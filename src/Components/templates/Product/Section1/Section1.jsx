import React, { useEffect, useState } from 'react'
import './Section1.css'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { useTranslation } from 'react-i18next';
import { IP } from '../../../../App';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { useMyContext } from '../../../../context/langugaeContext';
import { CacheProvider } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
export default function Section1({ mainProduct, setSelectOrder, setTotalPrice, setProductPrice, productPrice, totalPrice }) {

    const { t } = useTranslation()
    const [selectSize, setSelectSize] = useState('medium')
    const [cProperties, setCProperties] = useState("");
    const { language } = useMyContext()

    useEffect(() => {
        setSelectOrder("medium")
        setTotalPrice(mainProduct?.product?.medium_glass_price)
        setProductPrice(mainProduct?.product?.medium_glass_price)
    }, [])


    const calcTotalPrice = (value) => {
        setProductPrice(value)
        setTotalPrice(value)
    }

    const handleChange = (event) => {
        setCProperties(event.target.value);
        if (event.target.value) {
            const selectProduct = mainProduct?.category_properties.filter(product => product.name === event.target.value);
            setTotalPrice(productPrice + selectProduct[0]?.price)
        }
        else {
            setTotalPrice(productPrice)
        }
    };

    useEffect(() => {
        setCProperties("")
    }, [productPrice])

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <>
            <div className="section1-product-wrapper">
                <div className="section1-product-container">
                    <div className="main-pooduct-image">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            className="mySwiper-products"
                            navigation={true}
                            modules={[Navigation]}
                            centeredSlides={true}
                        >
                            <SwiperSlide ><img src="/public/images/12-(PDG_Caffe-Buondi).webp" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="/public/images/imgcart.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/public/images/fabac.png" alt="" /></SwiperSlide>
                        </Swiper>
                        {/* <img src={`${IP}${mainProduct?.product?.image_url}`} alt="image-product" /> */}
                    </div>
                    <div className="main-product-content">
                        <p className='main-product-title'>{mainProduct?.product?.name}</p>
                        <p className="main-product-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum sapiente repudiandae quo minima vero.
                        </p>
                        <p className="main-product-price">
                            {language === "fa" ?
                                totalPrice?.toLocaleString("fa") :
                                totalPrice?.toLocaleString()
                            }
                            <span> {t("t")}</span>
                        </p>
                    </div>
                    <div className='width-size'>
                        <div className="select-size-wrapper">
                            <div className="icon-size-wrapper">
                                <div className="icon-size-order">
                                    <div className={`icon-order-container ${selectSize === "small" && "active-size"}`}
                                        onClick={() => {
                                            setSelectSize("small")
                                            setSelectOrder("small")
                                            calcTotalPrice(mainProduct?.product?.small_glass_price)
                                        }}>
                                        <LocalDrinkIcon
                                            className={`icon-order icon-oder-size-1 ${selectSize === "small" && "activeIcon"}`} />
                                    </div>
                                    <span className='size-order-text'>{t("Small")}</span>
                                </div>
                                <div className="icon-size-order meduiem-wrapper">
                                    <div className={`icon-order-container ${selectSize === "medium" && "active-size"}`}
                                        onClick={() => {
                                            setSelectSize("medium")
                                            setSelectOrder("medium")
                                            calcTotalPrice(mainProduct?.product?.medium_glass_price)
                                        }}
                                    >
                                        <LocalDrinkIcon
                                            className={`icon-order icon-oder-size-2  ${selectSize === "medium" && "activeIcon"}`} />
                                    </div>
                                    <span className='size-order-text'>{t("Medium")}</span>
                                </div>
                                <div className="icon-size-order">
                                    <div className={`icon-order-container ${selectSize === "large" && "active-size"}`}
                                        onClick={() => {
                                            setSelectSize("large")
                                            setSelectOrder("large")
                                            calcTotalPrice(mainProduct?.product?.big_glass_price)
                                        }}
                                    >
                                        <LocalDrinkIcon
                                            className={`icon-order icon-oder-size-3 ${selectSize === "large" && "activeIcon"}`} />
                                    </div>
                                    <span className='size-order-text'>{t("Large")}</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            {
                                mainProduct?.product?.syrup &&
                                <>
                                    {
                                        language === "fa" ?
                                            <>
                                                <CacheProvider value={cacheRtl}>
                                                    <FormControl className='drop-product'>
                                                        <InputLabel id="demo-simple-select-helper-label">اضافه کردن سیروپ</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-helper-label"
                                                            id="demo-simple-select-helper"
                                                            value={cProperties}
                                                            label="اضافه کردن سیروپ"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem style={language === "fa" && { direction: "rtl" }} value={""}>{t("None")}</MenuItem>
                                                            {
                                                                mainProduct?.category_properties?.length > 0 && mainProduct.category_properties.map((item, i) => (
                                                                    <MenuItem style={language === "fa" && { direction: "rtl" }} key={i} value={item.name}>{item.name}</MenuItem>
                                                                ))
                                                            }

                                                        </Select>
                                                    </FormControl>
                                                </CacheProvider>
                                            </> :
                                            <>
                                                <FormControl className='drop-product'>
                                                    <InputLabel id="demo-simple-select-helper-label">Add Syrop</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        value={cProperties}
                                                        label={`Add Syrop`}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={""}>{t("None")}</MenuItem>
                                                        {
                                                            mainProduct?.category_properties?.length > 0 && mainProduct?.category_properties.map((item, i) => (
                                                                <MenuItem key={i} value={item.name}>{item.name}</MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </>
                                    }
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


{/* <div className="left-section1-product">
                        <div className="main-product-img-wrapper">
                            <img src={`${IP}${mainProduct?.product?.image_url}`} alt="" />
                        </div>
                        <div className="clippath-product">
                            <p className='clippath-py-text'>{mainProduct?.product?.name}</p>
                        </div>
                    </div> */}