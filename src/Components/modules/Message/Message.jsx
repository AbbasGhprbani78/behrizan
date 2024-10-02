import React from 'react'
import './Message.css'
import ProductChatItem from '../ProductChatItem/ProductChatItem'
import { useMyContext } from '../../../context/langugaeContext'

export default function Message({ message }) {
    const { language } = useMyContext()
    return (
        <div className={`${message.isai ? "message_wrapper_ai" : "message_wrapper_user"}`} >
            <p className={`${message.isai ? "chat-contant-ai" : "chat-contant-user"} ${language === "fa" && "rtlmessage"}`}>
                {message?.text}
            </p>
        </div>
    )
}
{/* {
                    ismedia ?
                        <>
                            <ProductChatItem />
                            <ProductChatItem />
                            <ProductChatItem />
                            <ProductChatItem />
                        </> :
                        text
                } */}