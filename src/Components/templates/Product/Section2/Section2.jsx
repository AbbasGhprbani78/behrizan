import React, { useEffect, useState } from 'react'
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
import { useMyContext } from '../../../../context/langugaeContext'
import { useTranslation } from 'react-i18next';


export default function Section2({ mainProduct, setTotalPrice, productPrice, totalPrice }) {
    const [cProperties, setCProperties] = useState("");
    const { language } = useMyContext()
    const { t } = useTranslation();

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
                    <p className="price-main-product-title">
                        {t("Price")}
                    </p>
                    <p className='price-main-product'>
                        {language === "fa" ?
                            totalPrice?.toLocaleString("fa") :
                            totalPrice?.toLocaleString()
                        }
                        <span> {t("t")}</span>
                    </p>
                </Col>
            </div>
        </>
    )
}


