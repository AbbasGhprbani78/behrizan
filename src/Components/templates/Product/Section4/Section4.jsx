import React from 'react'
import './Section4.css'
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
export default function Section4({ setOpenModal, totalPrice }) {

    const { t } = useTranslation()
    return (
        <>
            <div className='section4-product-wrapper'>
                <div className="show-price-products">
                    {totalPrice} {t("t")}
                </div>
                <button className='btn-page-product' onClick={() => setOpenModal(true)}>{t("Order")} <AddIcon /> </button>
            </div>
        </>

    )
}
