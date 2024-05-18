import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
export default function ProductItem({ link }) {
    return (
        <>
            <Link className='link' to={link}>
                <div className="product-item-wrapper">
                    <div className="product-img-wrapper">
                        <img src="../../../../public/images/Group 3.png" alt="product-img" />
                    </div>
                    <p className="product-text">
                        Lorem ipsum dolor sit amet,
                    </p>
                </div>
            </Link>
        </>
    )
}
