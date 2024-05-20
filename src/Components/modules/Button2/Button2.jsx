import React from 'react'
import './Button2.css'
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Button2({ name, id }) {
    const { t } = useTranslation()
    return (

        <Link className='link' to={`/product/${name}/${id}`}>
            <button className='order-btn'>{t("Order")}
            </button>
        </Link>
    )
}
