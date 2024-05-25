import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import { IP } from '../../../App'
import { useMyContext } from '../../../context/langugaeContext'
import { useTranslation } from 'react-i18next'
export default function ProductItem({ link, name, img, price }) {

    const { language } = useMyContext()
    const { t } = useTranslation()
    return (
        <>
            <Link className='link' to={link}>
                <div className="product-item-wrapper">
                    <div className="product-img-wrapper">
                        <img src={`${IP}${img}`} alt="product-img" />
                    </div>
                    <div className='d-flex flex-column justify-content-start align-items-start mx-3'>
                        <p className="product-text">
                            {name}
                        </p>
                        {
                            price &&
                            <p className="product-price mt-2">
                                {
                                    language === "fa" ?
                                        price.toLocaleString("fa") :
                                        price.toLocaleString()
                                } <span> {t("t")}</span>
                            </p>
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}
