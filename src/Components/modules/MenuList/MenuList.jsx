import React from 'react'
import './MenuList.css'
import ProductItem from '../ProductItem/ProductItem'
import { Col } from 'react-bootstrap'
export default function MenuList({ titleProducts, menuItem }) {
    return (
        <>
            <div className="products-content">
                <div className="products-header">
                    <span className='title-products-header'>{titleProducts}</span>
                </div>
                <div className="menu-product">
                    {
                        menuItem?.map((item) => (
                            <Col key={item.id}
                                xs={12}
                                sm={5}
                            >
                                <ProductItem
                                    link={`/menu/${item.name}/${item.id}`}
                                    name={item.name}
                                    img={item.image}
                                    stylediv={"stylecontent"}
                                />
                            </Col>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
