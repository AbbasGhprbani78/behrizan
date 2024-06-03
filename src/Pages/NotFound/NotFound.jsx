import React from 'react'
import './404.css'
import { Link } from 'react-router-dom'
import { useMyContext } from '../../context/langugaeContext'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
    const { language } = useMyContext()
    const { t } = useTranslation()


    const farsiNumber = "۴۰۴";

    return (
        <div className={`notfound-container ${language === "fa" ? "rtl" : ""}`}>
            <img className={"img-mot"} src="/public/images/404back.png" alt="" />
            <h1 className='notfound-title'>{language === "fa" ? farsiNumber : "404"}</h1>
            <p className='notfound-text'>{t("notFound")}</p>
            <Link className='link link-not' to={'/'}>{t("goback")}</Link>
        </div>
    )
}
