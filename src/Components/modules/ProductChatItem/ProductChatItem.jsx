import React from 'react'
import './productChatItem.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
export default function ProductChatItem() {
    const { t } = useTranslation()
    return (

        <Link to={"/"} className='productchat'>
            <div className='img-chat-wrapp'>
                <img src="/images/cup.png" alt="image" />
            </div>
            <div className='chat-product-info'>
                <span className='product-chat-name'>iced latte</span>
                <span className='product-chat-price'>75 {t("t")}</span>
            </div>
        </Link>
    )
}
