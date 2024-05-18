import React from 'react'
import './Button.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Button({ text }) {
    const { t } = useTranslation();
    return (
        <>
            <Link className='link' to={'/product/:hotchaklet'}><button className='btn-module'>{t("Order")}</button></Link>
        </>
    )
}
