import React from 'react'
import './MenuList.css'
import ProductItem from '../ProductItem/ProductItem'
import { Col } from 'react-bootstrap'
export default function MenuList({ titleProducts }) {
    return (
        <>
            <div className="products-content">
                <div className="products-header">
                    <span className='title-products-header'>{titleProducts}</span>
                </div>
                <div className="menu-product">
                    <Col xs={12} sm={6}> <ProductItem link={"/menu/icecoffee"} /></Col>
                    <Col xs={12} sm={6}> <ProductItem link={"/menu/icecoffee"} /></Col>
                    <Col xs={12} sm={6}> <ProductItem link={"/menu/icecoffee"} /></Col>
                    <Col xs={12} sm={6}> <ProductItem link={"/menu/icecoffee"} /></Col>
                    <Col xs={12} sm={6}> <ProductItem link={"/menu/icecoffee"} /></Col>
                    <Col xs={12} sm={6}> <ProductItem link={"/menu/icecoffee"} /></Col>
                </div>
            </div>
        </>
    )
}
