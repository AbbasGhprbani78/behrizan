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
import { IP } from '../../../App';
export default function Header() {

    const { setLanguage, language, socaial } = useMyContext()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showMenuTab, SetShowMenuTab] = useState(false)
    const [isEn, setIsEn] = useState(false)
    const [isFa, setIsFa] = useState(false)
    const { t } = useTranslation()
    const [scrollY, setScrollY] = useState(0);

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

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        const langweb = localStorage.getItem("language")
        if (langweb === "fa") {
            setIsEn(false)
            setIsFa(true)
        } else {
            setIsEn(true)
            setIsFa(false)
        }
    }, [])



    return (
        <>

            <OffcanvasSideBar
                show={showOffCanvas}
                onHide={() => setShowOffCanvas(false)}
            />
            {
                windowWidth < 1025 ?
                    <>
                        <header className={`header-container-m ${language === "fa" && "rtl"} ${scrollY > 50 ? "fixed-header" : ""}`}>
                            <nav className='header-nav-m'>
                                <div className="menu-icon-wrapper" onClick={windowWidth > 600 ? handleTogglemenuTab : handleToggleOffCanvas} >
                                    {
                                        showMenuTab ? <CloseIcon className='menu-icon' /> : <MenuIcon className='menu-icon' />
                                    }
                                </div>
                                <div className="logo-nav">
                                    <img src={`${IP}${socaial?.logo}`} alt="" />
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
                                                        <NavLink className="navlink-nav" to={'/categorymenus'}>{t("MENU")}</NavLink>
                                                    </li>
                                                    <li className='nav-list-item'>
                                                        <PhotoAlbumOutlinedIcon className='icon-tab mx-2' />
                                                        <NavLink className="navlink-nav" to={'/aboutus'}>{t("STORY")}</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="right-menu-tab">
                                                <Link className='link' to={"/cart"} onClick={e => e.preventDefault()}>
                                                    <div className="cart-icon-wrapper">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-basket2-fill cart-icon" viewBox="0 0 16 16">
                                                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                                <div className="switch mx-4">
                                                    <div className="change-languge d-flex align-items-center">
                                                        <p className={`btn-change-la change-en ${isEn && "lang-active"}`} onClick={changeLanguageToEn}>EN</p>
                                                        <p className={`btn-change-la change-fa mx-2 ${isFa && "lang-active"}`} onClick={changeLanguageToFa}>FA</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </header>
                    </> :
                    <>
                        <header className={`header-container ${language === "fa" && "rtl"} ${scrollY > 50 ? "fixed-header" : ""}`}>
                            <nav className='header-nav'>
                                <div className="left-nav">
                                    <div className="logo-nav">
                                        <img src={`${IP}${socaial?.logo}`} alt="" />
                                    </div>
                                    <ul className='nav-list'>
                                        <li className='nav-list-item'>
                                            <NavLink className="navlink-nav" to={'/'}>{t("HOME")}</NavLink>
                                        </li>
                                        <li className='nav-list-item'>
                                            <NavLink className="navlink-nav" to={'/categorymenus'}>{t("MENU")}</NavLink>
                                        </li>
                                        <li className='nav-list-item'>
                                            <NavLink className="navlink-nav" to={'/aboutus'}>{t("STORY")}</NavLink>
                                        </li>
                                        <li className='nav-list-item'>
                                            <div className="change-lan-nav">
                                                <div className="switch">
                                                    <div className="change-languge d-flex align-items-center">
                                                        <p className={`btn-change-la change-en ${isEn && "lang-active"}`} onClick={changeLanguageToEn}>EN</p>
                                                        <p className={`btn-change-la change-fa mx-2 ${isFa && "lang-active"}`} onClick={changeLanguageToFa}>FA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-nav">
                                    <Link className='link' to={"/cart"} onClick={e => e.preventDefault()}>
                                        <div className="cart-icon-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-basket2-fill cart-icon" viewBox="0 0 16 16">
                                                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                                            </svg>
                                        </div>
                                    </Link>

                                    <div className="link-nav-wrapper">
                                        <Link className='link-nav join-now' to={"https://order.qmancafe.com/order"}>
                                            {t("orderonline")}
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



{/* <Link className='link-nav signin' to={"#"}>
                                            {t("Signin")}
                                        </Link>
                                         */}