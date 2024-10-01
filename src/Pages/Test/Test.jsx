import React, { useState } from 'react'
import './Test.css'
import { IoMdInformationCircleOutline } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { BiSolidSend } from "react-icons/bi";
import Message from '../../Components/modules/Message/Message';
export default function Test() {

    const { t } = useTranslation()
    const [showChat, setShowChat] = useState(false)
    return (
        <div className="test_container">
            <div className={`chatbot-container ${showChat && "active"}`}>
                <div className="chatbot-header">
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
                        <Message
                            isai={false}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum neque pariatur, rerum animi ab sunt, vero veniam ex ipsam voluptatibus dolorum odit. Aut eaque ducimus optio fugit tempore sint." />
                        <Message
                            isai={true}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum neque pariatur, rerum animi ab sunt, vero veniam ex ipsam voluptatibus dolorum odit. Aut eaque ducimus optio fugit tempore sint." />
                        <Message
                            isai={false}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum neque pariatur, rerum animi ab sunt, vero veniam ex ipsam voluptatibus dolorum odit. Aut eaque ducimus optio fugit tempore sint." />
                        <Message
                            isai={false}
                            text="hello" />
                    </div>
                </div>
                <div className='chat-bottom'>
                    <div className='chatbot-actions'>
                        <input
                            type="text"
                            className='input-chat'
                            autoComplete='false'
                            placeholder={t("message")}
                        />
                        <BiSolidSend className='send-icon' />
                    </div>
                    <p className='text-bottom'>Powered By ARIISCO</p>
                </div>
            </div>
            <div className='chat-icon-wrapper' onClick={() => setShowChat(prev => !prev)}>
                <img src="/images/iconchat.png" alt="icon_chat" />
            </div>
        </div>
    )
}
