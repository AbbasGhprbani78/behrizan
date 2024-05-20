import React, { useState, useEffect } from 'react'
import './Cart.css'
import { Col } from 'react-bootstrap'
import CartItem from '../../Components/modules/CartItem/CartItem'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import InputModal from '../../Components/modules/InputModal/InputModal';
import { useMyContext } from '../../context/langugaeContext';
import { useTranslation } from 'react-i18next';

export default function Cart() {
    const [openModal, setOpenModal] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { t } = useTranslation()
    const { language } = useMyContext()





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
        <div className={`cartpage-wrapper ${language === "fa" && "rtl"}`}>
            <div className={`modal-order-container ${openModal ? "activeModal" : ""}`}>
                <div className="close-order-modal" onClick={() => setOpenModal(false)}></div>
                <div className="modal-order-wrapper">
                    <div className="modal-order-header">
                        <p className='delivery-text'>delivery</p>
                        <span className='edit-wrappper'>
                            <EditIcon className='edit-icon' />
                        </span>
                    </div>
                    <div className="modal-order-body">
                        <form>
                            <div>
                                <div className='d-flex gap-4 mb-4 modal-input-wrapper'>
                                    <InputModal placeholder={t("Name")} />
                                    <InputModal placeholder={t("LastName")} />
                                </div>

                                <div className='d-flex gap-4 mb-4 modal-input-wrapper'>
                                    <InputModal placeholder={t("PhoneNumber")} />
                                    <InputModal placeholder={t("Email")} />
                                </div>
                            </div>
                            <textarea className='textarea-option'
                                placeholder={t("Address")}
                            />
                        </form>
                    </div>
                    <div className="btns-modal-order-wrapper">
                        <button className='btn-modal-order order-btn-modal'>{t("Order")}</button>
                        <button className='btn-modal-order cancel-btn-modal' onClick={() => setOpenModal(false)}>{t("Cancel")}</button>
                    </div>
                </div>
            </div>
            <div className='cart-container'>
                <div className="menu-container">
                    <p className="cart-title">
                        {t("Cart")}
                    </p>
                </div>

                {
                    windowWidth < 600 ?
                        <>
                            <div className="cart-content-m">
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                            </div>
                        </> :
                        <>
                            <div className="cart-content">
                                <Col xs={12} md={9} lg={8} className="cart-content-order">
                                    <div className="cart-header">
                                        <div className="cart-header-item">{t("Items")}</div>
                                        <div className="cart-header-item">{t('Number')}</div>
                                        <div className="cart-header-item">{t("Price")}</div>
                                    </div>
                                    <div className="cart-orders-wrapper">
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                    </div>
                                </Col>
                                <Col xs={12} md={3} lg={4} className="cart-content-img-wrapper">
                                    <img src="../../../public/images/imgcart.png" alt="image cart" />
                                </Col>
                            </div>
                        </>
                }

                <div className='section4-product-wrapper'>
                    <div className="show-price-products">
                        100.100.789.000 {t("t")}
                    </div>
                    <button className='btn-page-product' onClick={() => setOpenModal(true)}>{t("Order")} <AddIcon /> </button>
                </div>
            </div>
        </div>
    )
}
