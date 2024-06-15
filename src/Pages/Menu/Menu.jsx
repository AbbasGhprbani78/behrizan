import React, { useEffect, useState } from 'react'
import './Menu.css'
import MenuList from '../../Components/modules/MenuList/MenuList'
import { useMyContext } from '../../context/langugaeContext'
import MenuHeader from '../../Components/modules/MenuHeader/MenuHeader'
import { IP } from '../../App'
import axios from 'axios';
import Lodaing from '../../Components/modules/Loading/Lodaing'
import { useLocation } from 'react-router-dom'
import Header from '../../Components/modules/Header/Header'
import Footer from '../../Components/modules/Footer/Footer'

export default function Menu() {

    const { language } = useMyContext()
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        const getCategory = async () => {
            const headers = {
                'Accept-Language': language
            };
            setLoading(true)
            try {
                const response = await axios.get(`${IP}/app/get-category/`, {
                    headers,
                })

                if (response.status === 200) {
                    setCategory(response.data)
                    setLoading(false)
                }

            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getCategory()

    }, [language])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {
                loading ?
                    <Lodaing /> :
                    <>
                        <Header />
                        <div className="main-content">
                            <div className={`menu-container ${language === "fa" && "rtl"}`}>
                                <MenuHeader />
                                <div className="menu-content">
                                    {
                                        category &&
                                        category.length > 0 && category.map((item) => (
                                            <MenuList
                                                key={item.id}
                                                titleProducts={item.name}
                                                menuItem={item.children}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}
