import React, { useEffect, useState } from 'react'
import './Offcanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../context/langugaeContext';
import i18n from '../../../i18n';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import { NavLink } from 'react-router-dom';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export default function OffcanvasSideBar({ show, onHide }) {
    const { t } = useTranslation()
    const { setLanguage, language, socaial } = useMyContext();

    const [isEn, setIsEn] = useState(false)
    const [isFa, setIsFa] = useState(false)


    const changeLanguageToEn = () => {
        i18n.changeLanguage("en")
        setLanguage("en")
        localStorage.setItem("language", "en")
        setIsEn(true)
        setIsFa(false)
    }

    const changeLanguageToFa = () => {
        i18n.changeLanguage("fa")
        setLanguage("fa")
        localStorage.setItem("language", "fa")
        setIsEn(false)
        setIsFa(true)
    }

    useEffect(() => {
        if (language === "fa") {
            setIsEn(false)
            setIsFa(true)
        } else {
            setIsEn(true)
            setIsFa(false)
        }
    }, [language])

    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const toPersianDigits = (num) => {
        return num?.toString()?.replace(/\d/g, (x) => persianNumbers[parseInt(x)]);
    };


    const phoneNumber = language === 'fa' ? toPersianDigits(socaial?.phone_number) : socaial?.phone_number;

    return (
        <>
            <Offcanvas show={show} onHide={onHide} className={`offcanvas ${language === "fa" && "rtl"}`} placement={language === "fa" ? "end" : "start"}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="menu-sidebar">
                        <ul className="menu-sidebar-list">
                            <NavLink className="sidebar-item" onClick={onHide} to={"/"}>
                                <WindowOutlinedIcon className='icon-menu-sidebar' />
                                <span className="sidebar-text">{t("HOME")}</span>
                            </NavLink>
                            <NavLink className="sidebar-item" onClick={onHide} to={"/categorymenus"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" className="bi bi-cup-hot icon-menu-sidebar" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175" />
                                    <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
                                </svg>
                                <span className="sidebar-text">
                                    {t("MENU")}
                                </span>
                            </NavLink>
                            <NavLink className="sidebar-item" onClick={onHide} to={"/aboutus"}>
                                <PhotoAlbumOutlinedIcon className='icon-menu-sidebar' />
                                <span className="sidebar-text">{t("STORY")}</span>
                            </NavLink>
                            <NavLink className="sidebar-item" 
                               to={"https://order.qmancafe.com/order"}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" className="bi bi-basket2-fill cart-icon icon-menu-sidebar" viewBox="0 0 16 16">
                                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                                </svg>
                                <span className="sidebar-text">  {t("orderonline")}</span>
                            </NavLink>
                            <div className="sidebar-change-languge">
                                <p className={`btn-change-la change-en ${isEn && "lang-active"}`} onClick={changeLanguageToEn}>EN</p>
                                <p className={`btn-change-la change-fa ${isFa && "lang-active"}`} onClick={changeLanguageToFa}>FA</p>
                            </div>
                            <div className="location-wrapper">
                                <span><FmdGoodOutlinedIcon className='locicon-sidebar' /></span >
                                {
                                    language === "fa" ?
                                        <p p className="text-loction">
                                            {socaial?.address_farsi}
                                        </p> :
                                        <p className="text-loction">
                                            {socaial?.address}
                                        </p>
                                }

                            </div>
                        </ul>
                    </div>
                    <div className="phone-sidebar-wrapper">
                        <CallOutlinedIcon className='phone-sidebar-icon' />
                        <p className='phone-sidebar'>{phoneNumber}</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
