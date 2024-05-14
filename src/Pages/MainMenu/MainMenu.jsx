import React from 'react'
import './MainMenu.css'
import MenuHeader from '../../Components/modules/MenuHeader/MenuHeader'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import MainMenuProduct from '../../Components/modules/MainMenuProduct/MainMenuProduct';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/langugaeContext';
export default function MainMenu() {

    const { language } = useMyContext()
    return (
        <>
            <div className={`menu-container ${language === "fa" && "rtl"}`}>
                <MenuHeader
                    isborder={true}
                />
                <Link className='link' to={'/menu'}>
                    <div className='main-menu-title-wrapper'>
                        {
                            language === "fa" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                                </svg> :
                                <KeyboardReturnIcon />
                        }

                        <p className="main-menu-title">Iced Coffee</p>
                    </div>
                </Link>
                <div className="main-products-wrapper">
                    <MainMenuProduct />
                    <MainMenuProduct />
                    <MainMenuProduct />
                    <MainMenuProduct />
                    <MainMenuProduct />
                    <MainMenuProduct />
                </div>
            </div>

        </>
    )
}
