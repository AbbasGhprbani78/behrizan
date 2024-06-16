import React, { useEffect, useState } from 'react'
import './Product.css'
import MenuHeader from '../../Components/modules/MenuHeader/MenuHeader'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMyContext } from '../../context/langugaeContext'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Section1 from '../../Components/templates/Product/Section1/Section1'
import Section3 from '../../Components/templates/Product/Section3/Section3'
import { useParams } from 'react-router-dom'
import { IP } from '../../App'
import axios from 'axios'
import Lodaing from '../../Components/modules/Loading/Lodaing'
import Header from '../../Components/modules/Header/Header'
import Footer from '../../Components/modules/Footer/Footer'



export default function Product() {
    const { language } = useMyContext()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const { id } = useParams()
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const [mainProduct, setMainProduct] = useState("")
    const [selectorder, setSelectOrder] = useState("medium");
    const [totalPrice, setTotalPrice] = useState(0)
    const [productPrice, setProductPrice] = useState(0)

    useEffect(() => {
        const getMainProduct = async () => {
            setLoading(true)
            const headers = {
                'Accept-Language': language
            }
            try {
                const response = await axios.get(`${IP}/app/product/${id}`, { headers })
                if (response.status === 200) {
                    setMainProduct(response.data)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        getMainProduct()
    }, [language, id])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {loading ? (
                <Lodaing />
            ) : (
                <>
                    <Header />
                    <div className="main-content">
                        <div className={`productpage-container ${language === "fa" && "rtl"}`}>
                            <div className="menu-container">
                                <MenuHeader isborder={true} />
                                <div className='link' onClick={() => navigate(-1)}>
                                    <div className='main-menu-title-wrapper'>
                                        {language === "fa" ? (
                                            <KeyboardReturnIcon className='backIconfa' />
                                        ) : (
                                            <KeyboardReturnIcon />
                                        )}
                                        <p className="main-menu-title">{mainProduct?.product?.name}</p>
                                    </div>
                                </div>
                            </div>
                            <Section1
                                mainProduct={mainProduct}
                                setSelectOrder={setSelectOrder}
                                setProductPrice={setProductPrice}
                                setTotalPrice={setTotalPrice}
                                totalPrice={totalPrice}
                                productPrice={productPrice}
                                selectorder={selectorder}
                            />
                            {
                                mainProduct?.suggested_products?.length > 0 &&
                                <Section3 tryProduct={mainProduct.suggested_products} />
                            }

                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}
