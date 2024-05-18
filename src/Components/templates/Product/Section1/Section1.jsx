import React from 'react'
import './Section1.css'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { useTranslation } from 'react-i18next';
export default function Section1() {

    const { t } = useTranslation()
    return (
        <>
            <div className="section1-product-wrapper">
                <div className="section1-product-container">
                    <div className="left-section1-product">
                        <div className="main-product-img-wrapper">
                            <img src="../../../../../public/images/cappuccino-coffee-cup-isolated-illustration-ai-generativexa_115919-24822 1.png" alt="" />
                        </div>
                        <div className="clippath-product">
                            <p className='clippath-py-text'>Iced Latte asfdset ssfdgre</p>
                        </div>
                    </div>
                    <div className="select-size-wrapper">
                        <div className="icon-size-wrapper">
                            <div className="icon-size-order">
                                <div className="icon-order-container">
                                    <LocalDrinkIcon className='icon-order icon-oder-size-1' />
                                </div>
                                <span className='size-order-text'>{t("Small")}</span>
                            </div>
                            <div className="icon-size-order meduiem-wrapper">
                                <div className="icon-order-container">
                                    <LocalDrinkIcon className='icon-order icon-oder-size-2' />
                                </div>
                                <span className='size-order-text'>{t("Medium")}</span>
                            </div>
                            <div className="icon-size-order">
                                <div className="icon-order-container">
                                    <LocalDrinkIcon className='icon-order icon-oder-size-3' />
                                </div>
                                <span className='size-order-text'>{t("Large")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
