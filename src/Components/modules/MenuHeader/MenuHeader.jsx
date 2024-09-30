import React from 'react'
import './MenuHeader.css'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';
export default function MenuHeader({ isborder }) {
    const { t } = useTranslation();
    return (
        <div className={`menu-Header ${isborder && "border-menu"}`}>
            {/* <p className="menu-title">{t("MENU")}</p> */}
            <div className="menu-tab-list">
                <NavLink
                    to={'/categorymenus'}
                    className='menu-tab-list-item'>
                    {t("Menu")}
                </NavLink>
                
                <NavLink
                    to={'/Favorites'}
                    className='menu-tab-list-item'
                    onClick={e => e.preventDefault()}
                >{t("Favorites")}</NavLink>
            </div>
        </div>
    )
}
