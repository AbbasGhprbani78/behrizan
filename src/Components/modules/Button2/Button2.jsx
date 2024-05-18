import React from 'react'
import './Button2.css'
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Button2() {
    const { t } = useTranslation()
    return (

        <Link className='link' to={'/product/:hotchaklet'}><button className='order-btn'>{t("Order")} <AddIcon className='addIcon' /></button></Link>
    )
}
