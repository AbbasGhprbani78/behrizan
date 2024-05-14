import React, { useEffect, useState } from 'react'
import './Header.css'
import { useMyContext } from '../../../context/langugaeContext';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import OffcanvasSideBar from '../Offcanvas/Offcanvas';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import i18n from '../../../i18n'
export default function Header() {

    const { setLanguage, language } = useMyContext()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showMenuTab, SetShowMenuTab] = useState(false)
    const { t } = useTranslation()

    const changeLanguage = (value) => {
        if (value) {
            i18n.changeLanguage("en")
            setLanguage("en")
            localStorage.setItem("language", "en")
        } else {
            i18n.changeLanguage("fa")
            setLanguage("fa")
            localStorage.setItem("language", "fa")
        }

    }

    const handleToggleOffCanvas = () => {
        setShowOffCanvas(!showOffCanvas);
    };

    const handleTogglemenuTab = () => {
        SetShowMenuTab(!showMenuTab)
    }

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>

            <OffcanvasSideBar
                show={showOffCanvas}
                onHide={() => setShowOffCanvas(false)}
            />
            {
                windowWidth < 1025 ?
                    <>
                        <header className={`header-container-m ${language === "fa" && "rtl"}`}>
                            <nav className='header-nav-m'>
                                <div className="menu-icon-wrapper" onClick={windowWidth > 600 ? handleTogglemenuTab : handleToggleOffCanvas} >
                                    {
                                        showMenuTab ? <CloseIcon className='menu-icon' /> : <MenuIcon className='menu-icon' />
                                    }
                                </div>
                                <div className="logo-nav">
                                    <img src='../../../../public/images/logo.svg' alt="" />
                                </div>
                            </nav>
                            {
                                showMenuTab &&
                                <>
                                    <div className="menutab-container py-3">
                                        <div className="closemenu-tab"></div>
                                        <div className="menu-tab-wrapper">
                                            <div className="link-menu-tab">
                                                <ul className='link-menu-tab-list'>
                                                    <li className='nav-list-item'>
                                                        <WindowOutlinedIcon className='icon-tab mx-2' />
                                                        <NavLink className="navlink-nav" to={'/'}>{t("HOME")}</NavLink>
                                                    </li>
                                                    <li className='nav-list-item'>
                                                        <LocalCafeOutlinedIcon className='icon-tab mx-2' />
                                                        <NavLink className="navlink-nav" to={'/menu'}>{t("MENU")}</NavLink>
                                                    </li>
                                                    <li className='nav-list-item'>
                                                        <PhotoAlbumOutlinedIcon className='icon-tab mx-2' />
                                                        <NavLink className="navlink-nav" to={'/story'}>{t("STORY")}</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="right-menu-tab">
                                                <div className="cart-icon-wrapper">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill cart-icon" viewBox="0 0 16 16">
                                                        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                                                    </svg>
                                                </div>
                                                <div className="switch mx-4">
                                                    <input
                                                        id="language-toggle"
                                                        className="check-toggle check-toggle-round-flat"
                                                        type="checkbox"
                                                        onChange={(e) => changeLanguage(e.target.checked)}
                                                        checked={
                                                            localStorage.getItem("language") === "fa" ? false : true
                                                        }
                                                    />
                                                    <label htmlFor="language-toggle"></label>
                                                    <span className="on">FA</span>
                                                    <span className="off">EN</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </header>
                    </> :
                    <>
                        <header className={`header-container ${language === "fa" && "rtl"}`}>
                            <nav className='header-nav'>
                                <div className="left-nav">
                                    <div className="logo-nav">
                                        <img src='../../../../public/images/logo.svg' alt="" />
                                    </div>
                                    <ul className='nav-list'>
                                        <li className='nav-list-item'>
                                            <NavLink className="navlink-nav" to={'/'}>{t("HOME")}</NavLink>
                                        </li>
                                        <li className='nav-list-item'>
                                            <NavLink className="navlink-nav" to={'/menu'}>{t("MENU")}</NavLink>
                                        </li>
                                        <li className='nav-list-item'>
                                            <NavLink className="navlink-nav" to={'/story'}>{t("STORY")}</NavLink>
                                        </li>
                                        <li className='nav-list-item'>
                                            <div className="change-lan-nav">
                                                <div className="switch">
                                                    <input
                                                        id="language-toggle"
                                                        className="check-toggle check-toggle-round-flat"
                                                        type="checkbox"
                                                        onChange={(e) => changeLanguage(e.target.checked)}
                                                        checked={
                                                            localStorage.getItem("language") === "fa" ? false : true
                                                        }
                                                    />
                                                    <label htmlFor="language-toggle"></label>
                                                    <span className="on">FA</span>
                                                    <span className="off">EN</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-nav">
                                    <div className="cart-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill cart-icon" viewBox="0 0 16 16">
                                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                                        </svg>
                                    </div>

                                    <div className="link-nav-wrapper">
                                        <Link className='link-nav signin'>
                                            {t("Signin")}
                                        </Link>
                                        <Link className='link-nav join-now'>
                                            {t("joinnow")}
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </>
            }

        </>
    )
}
