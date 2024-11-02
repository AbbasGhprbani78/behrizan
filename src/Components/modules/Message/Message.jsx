import React from 'react'
import './Message.css'
import ProductChatItem from '../ProductChatItem/ProductChatItem'
import { useMyContext } from '../../../context/langugaeContext'

export default function Message({ message, showChatHandler }) {

    const { language } = useMyContext()
    return (
        <div className={`${message.isai ? "message_wrapper_ai" : "message_wrapper_user"}  ${message.images && "images-wrap"}`} >
            {
                message.text &&
                <p className={`
                            ${message.isai ? "chat-contant-ai" : "chat-contant-user"} 
                            ${language === "fa" && "rtlmessage"}
                            ${message.isError && "error-color"}
                `}>
                    {message?.text}
                </p>
            }
            {
                message.images?.length > 0 &&
                <div className='chat-contant-ai'>
                    {
                        message.images.map(item => (
                            <ProductChatItem
                                key={item.name}
                                item={item}
                                showChatHandler={showChatHandler}
                            />
                        ))
                    }
                </div>
            }

        </div>
    )
}
