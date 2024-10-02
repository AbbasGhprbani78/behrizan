import React, { useState, useRef, useEffect } from 'react'
import './Chat.css'
import Message from '../Message/Message'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useMyContext } from '../../../context/langugaeContext';
import axios from 'axios';
// import { IP } from '../../../App';

export default function Chat() {
    const { t } = useTranslation();
    const [showChat, setShowChat] = useState(false);
    const { language } = useMyContext()
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [sessioId, setSessionId] = useState("")
    const [disableInput, setDisableInput] = useState(false)
    const messageEndRef = useRef(null);

    const sendMessage = async () => {

        const newMessage = {
            id: messages.length + 1,
            isai: false,
            text: message
        }
        setMessages((prevMessages) => [...prevMessages, newMessage])
        setMessage("")
        setDisableInput(true)

        try {
            const body = {
                query: message,
                ...(sessioId && { session_id: sessioId })
            }
            const res = await axios.post(`https://recomchat.ariisco.com/recomchatbothistory/`, body)
            if (res.status === 201 || res.status === 200) {
                setDisableInput(false)
                if (res.data.session_id) {
                    setSessionId(res.data.session_id)
                }
                const messageAi = {
                    id: messages.length + 1,
                    isai: true,
                    text: res.data.ai_assistant
                }
                setMessages((prevMessages) => [...prevMessages, messageAi])

            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };



    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    return (
        <>
            <div className={`chatbot-container ${showChat && "active-chatbot"} ${language === "fa" && "chatbot-container-right"}`}>
                <div className={`chatbot-header ${language === "fa" && "chabot_dir"}`}>
                    <div className='d-flex align-items-center'>
                        <IoMdInformationCircleOutline className='info-chat' />
                        <span className='title-chat'>{t("welcometo")}</span>
                        <img className='icon-chatbot' src="/images/logo.svg" alt="logo" />
                        <span className='title-chat'>{t("chatbot")}</span>
                    </div>
                    <CloseIcon className='close-chat' onClick={() => setShowChat(false)} />
                </div>
                <div className="chatbot-body">
                    <div className="chat-content">
                        {
                            messages.length > 0 &&
                            messages.map((message) => (
                                <Message key={message.id} message={message} />
                            ))
                        }
                        <div ref={messageEndRef}></div>
                    </div>
                </div>
                <div className={`'chat-bottom' ${language === "fa" && "chabot_dir"}`}>
                    <div className='chatbot-actions'>
                        <input
                            type="text"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className={`input-chat ${disableInput && "disable-input-chat"}`}
                            autoComplete='false'
                            placeholder={t("message")}
                            onKeyDown={handleKeyDown}
                            disabled={disableInput}
                        />
                        <BiSolidSend className={`send-icon ${language === "fa" && "send-icon-right"}`} onClick={sendMessage} />
                    </div>
                    <p className='text-bottom'>Powered By ARIISCO</p>
                </div>
            </div>
            <div className={`${language === "fa" ? 'chat-icon-wrapper-right' : "chat-icon-wrapper"}`} onClick={() => setShowChat(prev => !prev)}>
                <img src="/images/iconchat.png" alt="icon_chat" />
            </div>
        </>
    )
}
