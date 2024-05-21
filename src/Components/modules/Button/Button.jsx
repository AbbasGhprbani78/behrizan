import React from 'react'
import './Button.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Button({ name, id }) {
    const { t } = useTranslation();
    return (
        <>
            <Link className='link' to={`/product/${name}/${id}`}><button className='btn-module'>{t("Order")}</button></Link>
        </>
    )
}
