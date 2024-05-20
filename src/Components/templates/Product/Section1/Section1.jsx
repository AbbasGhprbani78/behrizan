import React, { useEffect, useState } from 'react'
import './Section1.css'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { useTranslation } from 'react-i18next';
import { IP } from '../../../../App';
export default function Section1({ mainProduct, setSelectOrder, setTotalPrice, }) {

    const { t } = useTranslation()
    const [selectSize, setSelectSize] = useState('medium')

    useEffect(() => {
        setSelectOrder("medium")
        setTotalPrice(mainProduct?.product?.medium_glass_price)
    }, [])


    const calcTotalPrice = (value) => {
        setTotalPrice(value)
    }
    return (
        <>
            <div className="section1-product-wrapper">
                <div className="section1-product-container">
                    <div className="left-section1-product">
                        <div className="main-product-img-wrapper">
                            <img src={`${IP}${mainProduct?.product?.image_url}`} alt="" />
                        </div>
                        <div className="clippath-product">
                            <p className='clippath-py-text'>{mainProduct?.product?.name}</p>
                        </div>
                    </div>
                    <div className="select-size-wrapper">
                        <div className="icon-size-wrapper">
                            <div className="icon-size-order">
                                <div className={`icon-order-container ${selectSize === "small" && "active-size"}`}
                                    onClick={() => {
                                        setSelectSize("small")
                                        setSelectOrder("small")
                                        calcTotalPrice(mainProduct?.product?.small_glass_price)

                                    }}>
                                    <LocalDrinkIcon className='icon-order icon-oder-size-1' />
                                </div>
                                <span className='size-order-text'>{t("Small")}</span>
                            </div>
                            <div className="icon-size-order meduiem-wrapper">
                                <div className={`icon-order-container ${selectSize === "medium" && "active-size"}`}
                                    onClick={() => {
                                        setSelectSize("medium")
                                        setSelectOrder("medium")
                                        calcTotalPrice(mainProduct?.product?.medium_glass_price)

                                    }}
                                >
                                    <LocalDrinkIcon className='icon-order icon-oder-size-2' />
                                </div>
                                <span className='size-order-text'>{t("Medium")}</span>
                            </div>
                            <div className="icon-size-order">
                                <div className={`icon-order-container ${selectSize === "large" && "active-size"}`}
                                    onClick={() => {
                                        setSelectSize("large")
                                        setSelectOrder("large")
                                        calcTotalPrice(mainProduct?.product?.big_glass_price)

                                    }}
                                >
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
