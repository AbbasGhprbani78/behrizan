import React from 'react'
import './productChatItem.css'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '../../../context/langugaeContext'
import { useTranslation } from 'react-i18next'
export default function ProductChatItem({ item, showChatHandler }) {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { language } = useMyContext();
    const url = new URL(item?.link, window.location.origin);
    const relativePath = url.pathname;

    const goToProductHandler = () => {

        showChatHandler()
        navigate(relativePath)
    }

    return (
        <div className={`productchat ${language === "fa" && "rtl"}`} onClick={goToProductHandler}>
            <div className='d-flex align-items-center gap-2'>
                <div className='img-chat-wrapp'>
                    <img src={`https://recomchat.ariisco.com${item.image}`} alt="image" />
                </div>
                <span className='product-chat-name'>{item.name}</span>
            </div>
            <span className='product-chat-price'>{item?.price}{t("t")}</span>
        </div>
    )
}
