import React from 'react'
import './ProductItem2.css'
import { IP } from '../../../App';
import { Link } from 'react-router-dom';
export default function ProductItem2({
    img,
    name,
    id
}) {
    return (
        <>
            <Link className='link' to={`/product/${name}/${id}`}>
                <div className="productItem2-container">
                    <div className='productItem2-wrapper'>
                        <img src={`${IP}${img}`} />
                    </div>
                    <p className='productItem2-text'>
                        {name}
                    </p>
                    {/* <p className="productItem2-price">
                    {price}
                </p> */}
                </div>
            </Link>

        </>

    )
}
