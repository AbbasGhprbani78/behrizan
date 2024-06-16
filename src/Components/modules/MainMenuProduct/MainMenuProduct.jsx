import React, { useEffect, useState } from 'react'
import './MainMenuProduct.css'
import ProductItem from '../../modules/ProductItem/ProductItem'
import Button2 from '../Button2/Button2'
import { useMyContext } from '../../../context/langugaeContext'
import { useTranslation } from 'react-i18next'
export default function MainMenuProduct({ image,
    dec,
    name,
    price,
    id }) {
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
                windowWidth < 600 ?
                    <>
                        <div className="mainMenuproduct-wrapper-small my-5">
                            <ProductItem
                                img={image}
                                name={name}
                                dec={dec}
                                price={price}
                                link={`/product/${name}/${id}`}
                                textContent="content-menu-item"
                            />
                            <div className='d-flex justify-content-center mt-4'><Button2 name={name} id={id} /></div>
                        </div>
                    </> :
                    <>
                        <div className='mainMenuproduct-wrapper'>
                            <ProductItem
                                img={image}
                                name={name}
                                dec={dec}
                                link={`/product/${name}/${id}`}
                                textContent="content-menu-item"
                            />
                            <div className='d-flex flex-column'>
                                <p className="product-price">
                                    {language === "fa" ?
                                        price?.toLocaleString("fa") :
                                        price?.toLocaleString()
                                    }
                                    <span> {t("t")}</span>
                                </p>
                                <Button2 name={name} id={id} />
                            </div>
                        </div>
                    </>
            }

        </>

    )
}
