import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import Message from '../Message/Message';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { BiSolidSend } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useMyContext } from '../../../context/langugaeContext';
import axios from 'axios';

export default function Chat({ setActiveChat }) {
    const { t } = useTranslation();
    const [showChat, setShowChat] = useState(false);
    const { language } = useMyContext();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [sessioId, setSessionId] = useState("");
    const [disableInput, setDisableInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const chatContentRef = useRef(null);
    const inputRef = useRef(null);
    const [responseCount, setResponseCount] = useState(0);
    const [maxMessage, setMaxMessage] = useState(70)
    const [maxLengthChat, setMaxLengthChat] = useState(false)
    const [windowWidth, setWindowWidth] = useState()

    const showChatHandler = () => {
        setShowChat((prev) => {
            const newValue = !prev;
            setActiveChat(newValue);
            return newValue;
        });
    };

    const sendMessage = async () => {
        if (message.trim() === "") return;
    
        if (responseCount === maxMessage) {
            setMaxLengthChat(true);
            return;
        }

        else {
            const newMessage = {
                id: crypto.randomUUID(),
                isai: false,
                text: message
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setMessage("");
            setDisableInput(true);
            setLoading(true);

            const headers = {
                'X-Language': language
            };

            try {
                const body = {
                    query: message,
                    ...(sessioId && { session_id: sessioId })
                };
                const res = await axios.post(`https://recomchat.ariisco.com/product/productinfochatIP/`, body, {
                    headers
                })
                if (res.status === 201 || res.status === 200) {
                    setDisableInput(false);
                    setLoading(false);
                    if (res.data.session_id) {
                        setSessionId(res.data.session_id);
                    }

                    if (res.data.request_limit) {
                        setMaxMessage(res.data.request_limit);
                    }

                    const messageAi = {
                        id: crypto.randomUUID(),
                        isai: true,
                        text: res.data.ai_assistant
                    };

                    setMessages((prevMessages) => [...prevMessages, messageAi]);

                    setResponseCount((prevCount) => prevCount + 1);

                    if (res.data.seggestion_list) {
                        const messageAi = {
                            id: crypto.randomUUID(),
                            isai: true,
                            images: res.data.seggestion_list
                        };
                        setMessages((prevMessages) => [...prevMessages, messageAi]);
                    }

                }
            } catch (error) {
                setLoading(false);
                setDisableInput(false);
                const errorMessage = {
                    id: crypto.randomUUID(),
                    isai: true,
                    text: t('errorchat'),
                    isError: true
                };
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            }
        }

    };


    const refreshChat = () => {
        setMessage("")
        setMessages("")
        setSessionId("")
        setMaxLengthChat(false)
        setMaxMessage(70)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;

        if (language === 'fa') {
            const persianRegex = /^[آ-ی۰-۹\s]*$/;
            if (persianRegex.test(inputValue)) {
                setMessage(inputValue);
            }
        } else if (language === 'en') {
            const englishRegex = /^[A-Za-z0-9\s]*$/;
            if (englishRegex.test(inputValue)) {
                setMessage(inputValue);
            }
        }
    };


    useEffect(() => {
        if (!loading && !disableInput) {
            inputRef.current?.focus();
        }
    }, [messages, loading, disableInput]);


    useEffect(() => {
        const chatContentElement = chatContentRef.current;

        if (chatContentElement) {
            const isContentOverflowing =
                chatContentElement.scrollHeight > chatContentElement.clientHeight;

            if (isContentOverflowing) {
                chatContentElement.scrollTo({
                    top: chatContentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }
    }, [messages, maxLengthChat]);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <>
            {
                windowWidth >= 767 ?
                    <div className='desk-chat'>
                        <div
                            className={`chatbot-container ${showChat && 'active-chatbot'} ${language === 'fa' && 'chatbot-container-right'
                                }`}
                        >
                            <div className={`chatbot-header ${language === 'fa' && 'chabot_dir'}`}
                            >
                                <div className='d-flex align-items-center'>
                                    <IoMdInformationCircleOutline className='info-chat' />
                                    {language === 'fa' ? (
                                        <>
                                            <span className='title-chat-fa'>
                                                خوش آمدید به ربات گفتگو
                                            </span>
                                            <img
                                                className='icon-chatbot'
                                                src='/images/logo.svg'
                                                alt='logo'
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <span className='title-chat'>
                                                {t('welcometo')}
                                            </span>
                                            <img
                                                className='icon-chatbot'
                                                src='/images/logo.svg'
                                                alt='logo'
                                            />
                                            <span className='title-chat'>
                                                {t('chatbot')}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <CloseIcon className='close-chat' onClick={() => setShowChat(prev => !prev)} />
                            </div>
                            <div className='chatbot-body'>
                                <div className='chat-content' ref={chatContentRef}>
                                    {messages.length > 0 &&
                                        messages.map((message) => (
                                            <Message
                                                key={message.id}
                                                message={message}
                                                showChatHandler={showChatHandler}
                                            />
                                        ))}

                                    {loading && (
                                        <div className='loading-chat'>
                                            <div className='dot'></div>
                                            <div className='dot'></div>
                                            <div className='dot'></div>
                                        </div>
                                    )}
                                    {
                                        maxLengthChat &&
                                        <>
                                            <div className={`message_wrapper_ai`} >
                                                <p className={`chat-contant-ai ${language === "fa" && "rtlmessage"}`}>
                                                    {t("textmaxchat")}
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-center mt-5'>
                                                <button className='btn-maxlenght' onClick={refreshChat}>{t("newChat")}</button>
                                            </div>

                                        </>
                                    }
                                </div>
                            </div>
                            <div className={`chat-bottom ${language === 'fa' && 'chabot_dir'}`}>
                                <div className='chatbot-actions'>
                                    <input
                                        type='text'
                                        value={message}
                                        onChange={handleChange}
                                        className={`input-chat ${disableInput && 'disable-input-chat'} 
                                        ${language === 'fa' && 'rtl'}`}
                                        autoComplete='false'
                                        placeholder={t('message')}
                                        onKeyDown={handleKeyDown}
                                        disabled={disableInput || maxLengthChat}
                                        maxLength={200}
                                        ref={inputRef}
                                    />
                                    <BiSolidSend
                                        className={`send-icon ${language === 'fa' && 'send-icon-right'}`}
                                        onClick={sendMessage}
                                    />
                                </div>
                                <p className='text-bottom'>Powered By NOBINCO</p>
                            </div>
                        </div>
                        <div
                            className={`${language === 'fa'
                                ? 'chat-icon-wrapper-right'
                                : 'chat-icon-wrapper'
                                }`}
                            onClick={() => setShowChat(prev => !prev)}
                        >
                            <img src='/images/iconchat.png' alt='icon_chat' />
                        </div>
                    </div> :
                    <div className='mobile-chat'>
                        <div
                            className={`chatbot-container ${showChat && 'active-chatbot'} ${language === 'fa' && 'chatbot-container-right'
                                }`}
                        >
                            <div
                                className={`chatbot-header ${language === 'fa' && 'chabot_dir'}`}
                            >
                                <div className='d-flex align-items-center'>
                                    <IoMdInformationCircleOutline className='info-chat' />
                                    {language === 'fa' ? (
                                        <>
                                            <span className='title-chat-fa'>
                                                خوش آمدید به ربات گفتگو
                                            </span>
                                            <img
                                                className='icon-chatbot'
                                                src='/images/logo.svg'
                                                alt='logo'
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <span className='title-chat'>
                                                {t('welcometo')}
                                            </span>
                                            <img
                                                className='icon-chatbot'
                                                src='/images/logo.svg'
                                                alt='logo'
                                            />
                                            <span className='title-chat'>
                                                {t('chatbot')}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <CloseIcon className='close-chat' onClick={showChatHandler} />
                            </div>
                            <div className='chatbot-body'>
                                <div className='chat-content' ref={chatContentRef}>
                                    {messages.length > 0 &&
                                        messages.map((message) => (
                                            <Message
                                                key={message.id}
                                                message={message}
                                                showChatHandler={showChatHandler}
                                            />
                                        ))}

                                    {
                                        maxLengthChat &&
                                        <>
                                            <div className={`message_wrapper_ai`} >
                                                <p className={`chat-contant-ai ${language === "fa" && "rtlmessage"}`}>
                                                    {t("textmaxchat")}
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-center mt-5'>
                                                <button className='btn-maxlenght' onClick={refreshChat}>{t("newChat")}</button>
                                            </div>
                                        </>
                                    }

                                    {loading && (
                                        <div className='loading-chat'>
                                            <div className='dot'></div>
                                            <div className='dot'></div>
                                            <div className='dot'></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={`chat-bottom ${language === 'fa' && 'chabot_dir'}`}>
                                <div className='chatbot-actions'>
                                    <input
                                        type='text'
                                        value={message}
                                        onChange={handleChange}
                                        className={`input-chat ${disableInput && 'disable-input-chat'} ${language === 'fa' && 'rtl'
                                            }`}
                                        autoComplete='false'
                                        placeholder={t('message')}
                                        onKeyDown={handleKeyDown}
                                        disabled={disableInput}
                                        maxLength={200}
                                        ref={inputRef}
                                    />
                                    <BiSolidSend
                                        className={`send-icon ${language === 'fa' && 'send-icon-right'}`}
                                        onClick={sendMessage}
                                    />
                                </div>
                                <p className='text-bottom'>Powered By NOBINCO</p>
                            </div>
                        </div>
                        <div
                            className={`${language === 'fa'
                                ? 'chat-icon-wrapper-right'
                                : 'chat-icon-wrapper'
                                }`}
                            onClick={showChatHandler}
                        >
                            <img src='/images/iconchat.png' alt='icon_chat' />
                        </div>
                    </div>
            }
        </>
    );
}




