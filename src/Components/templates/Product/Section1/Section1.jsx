import React, { useEffect, useState } from 'react'
import './Section1.css'
import { CiCoffeeCup } from "react-icons/ci";
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

    const imagesSilde = [
        mainProduct?.product?.image_url,
        mainProduct?.product?.image_four,
        mainProduct?.product?.image_three,
        mainProduct?.product?.image_two,
    ]
    const filteredArray = imagesSilde.filter(item => item !== null && item !== undefined);

    useEffect(() => {
        setCProperties("")
    }, [productPrice])

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });


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
                        <div className="section1-product-wrapper">
                            <div className="main-pooduct-image">
                                <Swiper
                                    slidesPerView={1}
                                    loop={true}
                                    className="mySwiper-products"
                                    navigation={true}
                                    modules={[Navigation]}
                                    centeredSlides={true}
                                >
                                    {
                                        filteredArray&&
                                        filteredArray.length > 0 &&
                                        filteredArray?.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <img className='image-main-product' src={`${IP}${item}`} alt="image-product" />
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>

                            </div>
                        </div>
                        <div className='main-product-price-mob d-flex align-items-center justify-content-between px-4 py-3 text-light'>
                            <p className='main-product-title-m'>
                                {mainProduct?.product?.name}
                            </p>
                            <p className="product-price-m">
                                {language === "fa" ?
                                    totalPrice?.toLocaleString("fa") :
                                    totalPrice?.toLocaleString()
                                }
                                <span> {t("t")}</span>
                            </p>
                        </div>
                        <div className='px-4 mt-4'>
                            <p className="main-product-text">
                                {mainProduct?.product?.descriptions}
                            </p>
                        </div>
                        <div className='d-flex flex-column  align-items-center mt-3 mb-5'>
                            <div className="icon-size-wrapper small-size-select">
                                <div className="icon-size-order">
                                    <div className={`icon-order-container ${selectSize === "small" && "active-size"}`}
                                        onClick={() => {
                                            setSelectSize("small")
                                            setSelectOrder("small")
                                            calcTotalPrice(mainProduct?.product?.small_glass_price)
                                        }}>
                                        <CiCoffeeCup
                                            className={`icon-order icon-oder-size-1 ${selectSize === "small" && "activeIcon"}`} />
                                    </div>
                                </div>
                                <div className="icon-size-order meduiem-wrapper">
                                    <div className={`icon-order-container ${selectSize === "medium" && "active-size"}`}
                                        onClick={() => {
                                            setSelectSize("medium")
                                            setSelectOrder("medium")
                                            calcTotalPrice(mainProduct?.product?.medium_glass_price)
                                        }}
                                    >
                                        <CiCoffeeCup
                                            className={`icon-order icon-oder-size-2  ${selectSize === "medium" && "activeIcon"}`} />
                                    </div>
                                </div>
                                <div className="icon-size-order">
                                    <div className={`icon-order-container ${selectSize === "large" && "active-size"}`}
                                        onClick={() => {
                                            setSelectSize("large")
                                            setSelectOrder("large")
                                            calcTotalPrice(mainProduct?.product?.big_glass_price)
                                        }}
                                    >
                                        <CiCoffeeCup
                                            className={`icon-order icon-oder-size-3 ${selectSize === "large" && "activeIcon"}`} />
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center small-size-select mb-5  mx-2'>
                                <span className='size-order-text'>{t("Small")}</span>
                                <span className='size-order-text'>{t("Medium")}</span>
                                <span className='size-order-text'>{t("Large")}</span>
                            </div>
                            {
                                mainProduct?.product?.syrup &&
                                <div className='small-dropdown-product '>
                                    <div className='small-size-dropdown'>
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
                                                        <InputLabel id="demo-simple-select-helper-label">Add Syrup</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-helper-label"
                                                            id="demo-simple-select-helper"
                                                            value={cProperties}
                                                            label={`Add Syrup`}
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
                                    </div>
                                </div>
                            }
                        </div>
                    </>
                    :
                    windowWidth < 992 ?
                        <>
                            <div className="section1-product-wrapper">
                                <div className="section1-product-container-small">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className="main-pooduct-image">
                                            <Swiper
                                                slidesPerView={1}
                                                loop={true}
                                                className="mySwiper-products"
                                                navigation={true}
                                                modules={[Navigation]}
                                                centeredSlides={true}
                                            >
                                                {
                                                    filteredArray?.map((item, index) => (
                                                        <SwiperSlide key={index}>
                                                            <img className='image-main-product' src={`${IP}${item}`} alt="image-product" />
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </div>
                                        <div>
                                            <p className='main-product-title'>{mainProduct?.product?.name}</p>
                                            <p className="main-product-text">
                                                {
                                                    mainProduct?.product?.descriptions
                                                }
                                            </p>
                                            <p className="main-product-price">
                                                {language === "fa" ?
                                                    totalPrice?.toLocaleString("fa") :
                                                    totalPrice?.toLocaleString()
                                                }
                                                <span> {t("t")}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex flex-column  align-items-center mt-3'>
                                            <div className="icon-size-wrapper small-size-select">
                                                <div className="icon-size-order">
                                                    <div className={`icon-order-container ${selectSize === "small" && "active-size"}`}
                                                        onClick={() => {
                                                            setSelectSize("small")
                                                            setSelectOrder("small")
                                                            calcTotalPrice(mainProduct?.product?.small_glass_price)
                                                        }}>
                                                        <CiCoffeeCup
                                                            className={`icon-order icon-oder-size-1 ${selectSize === "small" && "activeIcon"}`} />
                                                    </div>

                                                </div>
                                                <div className="icon-size-order meduiem-wrapper">
                                                    <div className={`icon-order-container ${selectSize === "medium" && "active-size"}`}
                                                        onClick={() => {
                                                            setSelectSize("medium")
                                                            setSelectOrder("medium")
                                                            calcTotalPrice(mainProduct?.product?.medium_glass_price)
                                                        }}
                                                    >
                                                        <CiCoffeeCup
                                                            className={`icon-order icon-oder-size-2  ${selectSize === "medium" && "activeIcon"}`} />
                                                    </div>

                                                </div>
                                                <div className="icon-size-order">
                                                    <div className={`icon-order-container ${selectSize === "large" && "active-size"}`}
                                                        onClick={() => {
                                                            setSelectSize("large")
                                                            setSelectOrder("large")
                                                            calcTotalPrice(mainProduct?.product?.big_glass_price)
                                                        }}
                                                    >
                                                        <CiCoffeeCup
                                                            className={`icon-order icon-oder-size-3 ${selectSize === "large" && "activeIcon"}`} />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center small-size-select mb-5  mx-2'>
                                                <span className='size-order-text'>{t("Small")}</span>
                                                <span className='size-order-text'>{t("Medium")}</span>
                                                <span className='size-order-text'>{t("Large")}</span>
                                            </div>
                                            <div className='small-dropdown-product'>
                                                {
                                                    mainProduct?.product?.syrup &&
                                                    <div className='small-size-dropdown'>
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
                                                                        <InputLabel id="demo-simple-select-helper-label">Add Syrup</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-helper-label"
                                                                            id="demo-simple-select-helper"
                                                                            value={cProperties}
                                                                            label={`Add Syrup`}
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
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> :

                        windowWidth > 992 ?
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
                                                {
                                                    filteredArray?.map((item, index) => (
                                                        <SwiperSlide key={index}>
                                                            <img className='image-main-product' src={`${IP}${item}`} alt="image-product" />
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </div>
                                        <div className="main-product-content">
                                            <p className='main-product-title'>{mainProduct?.product?.name}</p>
                                            <p className="main-product-text">
                                                {
                                                    mainProduct?.product?.descriptions
                                                }
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
                                                            <CiCoffeeCup
                                                                className={`icon-order icon-oder-size-1 ${selectSize === "small" && "activeIcon"}`} />
                                                        </div>
                                                    </div>
                                                    <div className="icon-size-order meduiem-wrapper">
                                                        <div className={`icon-order-container ${selectSize === "medium" && "active-size"}`}
                                                            onClick={() => {
                                                                setSelectSize("medium")
                                                                setSelectOrder("medium")
                                                                calcTotalPrice(mainProduct?.product?.medium_glass_price)
                                                            }}
                                                        >
                                                            <CiCoffeeCup
                                                                className={`icon-order icon-oder-size-2  ${selectSize === "medium" && "activeIcon"}`} />
                                                        </div>

                                                    </div>
                                                    <div className="icon-size-order">
                                                        <div className={`icon-order-container ${selectSize === "large" && "active-size"}`}
                                                            onClick={() => {
                                                                setSelectSize("large")
                                                                setSelectOrder("large")
                                                                calcTotalPrice(mainProduct?.product?.big_glass_price)
                                                            }}
                                                        >
                                                            <CiCoffeeCup
                                                                className={`icon-order icon-oder-size-3 ${selectSize === "large" && "activeIcon"}`} />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center mx-2'>
                                                    <span className='size-order-text'>{t("Small")}</span>
                                                    <span className='size-order-text'>{t("Medium")}</span>
                                                    <span className='size-order-text'>{t("Large")}</span>
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
                                                                        <InputLabel id="demo-simple-select-helper-label">Add Syrup</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-helper-label"
                                                                            id="demo-simple-select-helper"
                                                                            value={cProperties}
                                                                            label={`Add Syrup`}
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
                            </> :
                            null
            }
        </>
    )
}

