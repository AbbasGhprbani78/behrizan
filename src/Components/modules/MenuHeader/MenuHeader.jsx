import React from 'react'
import './MenuHeader.css'
import { useTranslation } from 'react-i18next'
export default function MenuHeader({ isborder }) {
    const { t } = useTranslation();
    return (
        <div className={`menu-Header ${isborder && "border-menu"}`}>
            <p className="menu-title">{t("MENU")}</p>
            <div className="menu-tab-list">
                <span className='menu-tab-list-item'>{t("Menu")}</span>
                <span className='menu-tab-list-item'>{t("Previous")}</span>
                <span className='menu-tab-list-item'>{t("Favorites")}</span>
            </div>
        </div>
    )
}
