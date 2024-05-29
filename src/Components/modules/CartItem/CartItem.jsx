import React, { useEffect, useState } from 'react'
import './CartItem.css'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
export default function CartItem() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { t } = useTranslation()



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
                        <div className="cartItem-m">
                            <Col xs={6} className="cart-item-m-left">
                                <div className='img-cart-item-m'>
                                    <img src="../../../../public/images/crosan.png" alt="" />
                                </div>
                                <p className="delete-item-m">
                                    <span className='remove-icon-wrapper'><CloseIcon className='closeIcon-m' /></span>
                                    <span className="text-order-product"> iced cafe</span>
                                </p>
                            </Col>
                            <Col xs={6} className="cart-item-m-right">
                                <div className="number-item-m">
                                    <span className='min-product'>
                                        <RemoveIcon className='icon-cart' />
                                    </span>
                                    <span className="number-porduct-order">
                                        100 X
                                    </span>
                                    <span className='plus-product'>
                                        <AddIcon className='icon-cart' />
                                    </span>
                                </div>
                                <div className="price-product">
                                    100.000.000 {t("t")}
                                </div>
                            </Col>
                        </div>
                    </> :
                    <>
                        <div className='CartItem mt-5'>
                            <div className='d-flex'>
                                <span className='remove-icon-wrapper'><CloseIcon /></span>
                                <p className="text-order-product">iced cafe</p>
                            </div>
                            <div className='d-flex number-order-wrapper'>
                                <span className="number-porduct-order">
                                    100 X
                                </span>
                                <span className='min-product'>
                                    <RemoveIcon />
                                </span>
                                <span className='plus-product'>
                                    <AddIcon />
                                </span>
                            </div>
                            <div className='d-flex'>
                                <p className="price-product">
                                    100.000.000 {t("t")}
                                </p>
                            </div>
                        </div>
                    </>
            }
        </>

    )
}
