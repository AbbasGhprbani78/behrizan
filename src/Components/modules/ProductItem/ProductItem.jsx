import React, { useEffect, useState } from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import { IP } from '../../../App'
import { useMyContext } from '../../../context/langugaeContext'
import { useTranslation } from 'react-i18next'
export default function ProductItem({ link, name, img, dec, stylediv, textContent, price }) {

    const { language } = useMyContext()
    const { t } = useTranslation()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            {
                windowWidth < 600 && dec ?
                    <Link className='link' to={link}>
                        <div className={`product-item-wrapper style-small ${stylediv}`}>
                            <div className="product-img-wrapper">
                                <img src={`${IP}${img}`} alt="product-img" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <p className="product-text">
                                {name}
                            </p>

                            <p className="product-price-small ">
                                {language === "fa" ?
                                    price?.toLocaleString("fa") :
                                    price?.toLocaleString()
                                }
                            </p>
                        </div>
                        <p className="mt-3 dec-product-menu">
                            {dec}
                        </p>
                    </Link> :

                    <Link className='link' to={link}>
                        <div className={`product-item-wrapper ${stylediv}`}>
                            <div className="product-img-wrapper">
                                <img src={`${IP}${img}`} alt="product-img" />
                            </div>
                            <div className={`d-flex flex-column justify-content-start align-items-start mx-3 ${textContent}`}>
                                <p className="product-text">
                                    {name}
                                </p>
                                {
                                    dec &&
                                    <p className="mt-2 dec-product-menu">
                                        {dec}
                                    </p>
                                }
                            </div>
                        </div>
                    </Link>

            }

        </>
    )
}



{/* <div className={`d-flex flex-column justify-content-start align-items-start mx-3 ${textContent}`}>
                                <p className="product-text">
                                    {name}
                                </p>
                                {
                                    dec &&
                                    <p className="mt-2 dec-product-menu">
                                        {dec}
                                    </p>
                                }
                            </div> */}