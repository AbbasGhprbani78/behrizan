import React from 'react'
import './Section3.css'
import ProductItem2 from '../../../modules/ProductItem2/ProductItem2'
import { useTranslation } from 'react-i18next'
export default function Section3() {

    const { t } = useTranslation()
    return (
        <>
            <div className="section3-product-wrapper">
                <div className="menu-container">
                    <p className="header-section3-product-wrapper">
                        {t("TryWith")}
                    </p>
                    <div className="product-try-container">
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                        <ProductItem2 />
                    </div>
                </div>
            </div>
        </>
    )
}
