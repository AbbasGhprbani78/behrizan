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
import { useMyContext } from '../../../../context/langugaeContext'
export default function Section2() {
    const [age, setAge] = useState("");
    const { language } = useMyContext()

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });


    return (
        <>
            <div className="section2-product-wrapper">
                <Col xs={12} md={6} className="section2-product-left">
                    <p className="Additives-text">Additives</p>
                    {
                        language === "fa" ?
                            <>
                                <CacheProvider value={cacheRtl}>
                                    <FormControl className='drop-product'>
                                        <InputLabel id="demo-simple-select-helper-label">Add Syrop</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="Add Syrop"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </CacheProvider>
                            </> :
                            <>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Add Syrop</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={age}
                                        label="Add Syrop"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </>
                    }

                    <div className="prodcut-radio-wrapper">
                        <label className='label'>
                            <input type="radio" name="radio" />
                            <span className='item-radio-product mx-3'>Regular Milk</span>
                        </label>
                        <label className='label'>
                            <input type="radio" name="radio" />
                            <span className='item-radio-product mx-3'>Almond Milk</span>
                        </label>
                        <label className='label'>
                            <input type="radio" name="radio" />
                            <span className='item-radio-product mx-3'>Coconut Milk</span>
                        </label>
                    </div>
                </Col>
                <Col xs={12} md={6} className="section2-product-right">
                    <img src="../../../../../public/images/milk.png" alt="" />
                    <div className="section2-product-right-content">
                        <div className="section2-product-right-title">try vegan milk</div>
                        <p className="section2-product-right-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas. Et sollicitudin ac orci phasellus egestas.
                        </p>
                    </div>
                </Col>
            </div>
        </>
    )
}
