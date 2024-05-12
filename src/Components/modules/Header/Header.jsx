import React from 'react'
import './Header.css'
import { useMyContext } from '../../../context/langugaeContext';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
export default function Header() {

    const { setLanguage } = useMyContext()
    const { t } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
        localStorage.setItem("language", language)
        setLanguage(language)
    }
    return (
        <>
            <header className='header-container'>
                <nav className='header-nav'>
                    <div className="left-nav">
                        <div className="logo-nav">
                            <img src='../../../../public/images/logo.svg' alt="" />
                        </div>
                        <ul className='nav-list'>
                            <li className='nav-list-item'>
                                <NavLink className="navlink-nav" to={'/'}>HOME</NavLink>
                            </li>
                            <li className='nav-list-item'>
                                <NavLink className="navlink-nav" to={'/menu'}>MENU</NavLink>
                            </li>
                            <li className='nav-list-item'>
                                <NavLink className="navlink-nav" to={'/story'}>STORY</NavLink>
                            </li>
                            <li className='nav-list-item'>
                                <div className="change-lan-nav">
                                    <div className="switch">
                                        <input
                                            id="language-toggle"
                                            className="check-toggle check-toggle-round-flat"
                                            type="checkbox"
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
                            <svg className='cart-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                            </svg>
                        </div>

                        <div className="link-nav-wrapper">
                            <Link className='link-nav signin'>
                                Sign in
                            </Link>
                            <Link className='link-nav join-now'>
                                join now
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
