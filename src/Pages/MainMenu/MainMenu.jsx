import React, { useEffect, useState } from 'react'
import './MainMenu.css'
import MenuHeader from '../../Components/modules/MenuHeader/MenuHeader'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import MainMenuProduct from '../../Components/modules/MainMenuProduct/MainMenuProduct';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/langugaeContext';
import { useParams } from 'react-router-dom';
import { IP } from '../../App';
import axios from 'axios';
import Lodaing from '../../Components/modules/Loading/Lodaing';
import Header from '../../Components/modules/Header/Header';
import Footer from '../../Components/modules/Footer/Footer';
export default function MainMenu() {

    const { language } = useMyContext()
    const { id } = useParams()
    const [Products, setProducts] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            const headers = {
                'Accept-Language': language
            };
            setLoading(true)
            try {
                const response = await axios.get(`${IP}/app/get-product/${id}`, {
                    headers,
                })

                if (response.status === 200) {
                    setProducts(response.data.products)
                    setLoading(false)
                }

            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getProducts()
    }, [language])


    return (
        <>
            {
                loading ?
                    <Lodaing /> :
                    <>
                        <Header />
                        <div className="main-content">
                            <div className={`menu-container ${language === "fa" && "rtl"}`}>
                                <MenuHeader
                                    isborder={true}
                                />
                                <Link className='link' to={'/categorymenus'}>
                                    <div className='main-menu-title-wrapper'>
                                        {
                                            language === "fa" ?
                                                <KeyboardReturnIcon className='backIconfa' />
                                                :
                                                <KeyboardReturnIcon />
                                        }

                                        <p className="main-menu-title">{Products[0]?.category?.name}</p>
                                    </div>
                                </Link>
                                <div className="main-products-wrapper">
                                    {
                                        Products.length > 0 && Products?.map((product) => (
                                            <MainMenuProduct
                                                key={product.id}
                                                image={product.image}
                                                dec={product.descriptions}
                                                name={product.name}
                                                price={product.small_glass_price}
                                                id={product.id}
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
