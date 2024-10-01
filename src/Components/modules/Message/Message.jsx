import React from 'react'
import './Message.css'
export default function Message({ isai, text }) {
    return (
        <div className={`${isai ? "message_wrapper_ai" : "message_wrapper_user"}`} >
            <div className={`${isai ? "chat-contant-ai" : "chat-contant-user"}`}>
                {text}
            </div>
        </div>
    )
}
