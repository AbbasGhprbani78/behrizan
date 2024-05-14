import React from 'react'
import './Button.css'
import { useTranslation } from 'react-i18next';
export default function Button({ text }) {
    const { t } = useTranslation();
    return (
        <>
            <button className='btn-module'>{t("Order")}</button>
        </>
    )
}
