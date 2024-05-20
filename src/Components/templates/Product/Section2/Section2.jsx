import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Col } from 'react-bootstrap';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import './Section2.css';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { useMyContext } from '../../../../context/langugaeContext'
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';

export default function Section2({ mainProduct, selectorder, setTotalPrice, }) {
    const [cProperties, setCProperties] = useState("");
    const { language } = useMyContext()
    const [oldprice, setoldPrice] = useState(0)
    const { t } = useTranslation()
    const handleChange = (event) => {
        setCProperties(event.target.value);
        if (event.target.value) {
            setTotalPrice(prevPrice => prevPrice - oldprice)
            const selectProduct = mainProduct?.category_properties.filter(product => product.name === event.target.value);
            setoldPrice(selectProduct[0]?.price)
            setTotalPrice(prevPrice => prevPrice + selectProduct[0]?.price)
        }
        // else {
        //     setTotalPrice(prevPrice => prevPrice - selectProduct[0]?.price)
        // }
    };
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });


    // const calcTotalPrice = (value) => {

    //     setTotalPrice(prevPrice=>prevPrice+)
    // }

    // console.log(mainProduct.category_properties)

    return (
        <>
            <div className="section2-product-wrapper">
                {
                    mainProduct?.product?.syrup &&
                    <Col xs={12} md={6} className="section2-product-left">
                        <p className="Additives-text">{t("Additives")}</p>
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
                                            label={`language`}
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

                    </Col>
                }

                <Col xs={12} md={6} className={`section2-product-right ${mainProduct?.product?.syrup === false && "content-start"}`}>
                    <div className="price-product-show-container">
                        <div className="size-price-item">
                            <LocalDrinkIcon className='icon-order icon-oder-size-1' />
                            <span className='size-price-item-price'>
                                {language === "fa" ?
                                    mainProduct?.product?.small_glass_price.toLocaleString("fa") :
                                    mainProduct?.product?.small_glass_price.toLocaleString()
                                } <span> {t("t")}</span>
                            </span>
                            <span className={`select_order ${selectorder === "small" && "active-select-order"}`}>
                                <CheckIcon />
                            </span>
                        </div>
                        <div className="size-price-item">
                            <LocalDrinkIcon className='icon-order icon-oder-size-2' />
                            <span className='size-price-item-price'>
                                {language === "fa" ?
                                    mainProduct?.product?.medium_glass_price.toLocaleString("fa") :
                                    mainProduct?.product?.medium_glass_price.toLocaleString()
                                } <span> {t("t")}</span>
                            </span>
                            <span className={`select_order ${selectorder === "medium" && "active-select-order"}`}>
                                <CheckIcon />
                            </span>
                        </div>
                        <div className="size-price-item">
                            <LocalDrinkIcon className='icon-order icon-oder-size-3' />
                            <span className='size-price-item-price'>
                                {language === "fa" ?
                                    mainProduct?.product?.big_glass_price.toLocaleString("fa") :
                                    mainProduct?.product?.big_glass_price.toLocaleString()
                                } <span> {t("t")}</span>
                            </span>
                            <span className={`select_order ${selectorder === "large" && "active-select-order"}`}>
                                <CheckIcon />
                            </span>
                        </div>
                    </div>
                </Col>
            </div>
        </>
    )
}


