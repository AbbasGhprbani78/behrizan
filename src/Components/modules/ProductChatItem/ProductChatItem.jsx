import React from 'react'
import './productChatItem.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useMyContext } from '../../../context/langugaeContext'
export default function ProductChatItem({ item }) {
    const { t } = useTranslation()
    const { language } = useMyContext();
    return (

        // <Link to={`${item.link}`} className={`productchat `}>
        //     <div className='img-chat-wrapp'>
        //         <img src={`https://recomchat.ariisco.com${item.image}`} alt="image" />
        //     </div>
        //     <div className='chat-product-info'>
        //         <span className='product-chat-name'>{item.name}</span>
        //         <span className='product-chat-price'>75 {t("t")}</span>
        //     </div>
        // </Link>
        <Link to={`/public/images/Group 33.png`} className={`productchat ${language === "fa" && "rtlmessage"}`}>
            <div className='img-chat-wrapp'>
                <img src={`/public/images/Group 33.png`} alt="image" />
            </div>
            <div className='chat-product-info'>
                <span className='product-chat-name'>هات چاکلت</span>
                <span className='product-chat-price'>75 {t("t")}</span>
            </div>
        </Link>
    )
}
