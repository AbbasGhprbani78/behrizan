import React, { useEffect, useState } from 'react'
import './Menu.css'
import MenuList from '../../Components/modules/MenuList/MenuList'
import { useMyContext } from '../../context/langugaeContext'
import MenuHeader from '../../Components/modules/MenuHeader/MenuHeader'
import { IP } from '../../App'
import axios from 'axios';
import Lodaing from '../../Components/modules/Loading/Lodaing'

export default function Menu() {

    const { language } = useMyContext()
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)

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




    return (
        <>
            {
                loading ?
                    <Lodaing /> :
                    <>
                        <div className={`menu-container ${language === "fa" && "rtl"}`}>
                            <MenuHeader />
                            <div className="menu-content">
                                {
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
                    </>
            }

        </>
    )
}
