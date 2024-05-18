import React from 'react'
import './Section4.css'
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
export default function Section4() {

    const { t } = useTranslation()
    return (
        <>
            <div className='section4-product-wrapper'>
                <div className="show-price-products">
                    10.100.789.000 {t("t")}
                </div>
                <button className='btn-page-product'>{t("Order")} <AddIcon /> </button>
            </div>
        </>

    )
}
