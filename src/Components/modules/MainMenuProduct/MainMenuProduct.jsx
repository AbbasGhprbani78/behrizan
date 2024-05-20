import React from 'react'
import './MainMenuProduct.css'
import ProductItem from '../../modules/ProductItem/ProductItem'
import Button2 from '../Button2/Button2'
export default function MainMenuProduct({ image,
    dec,
    name,
    price,
    id }) {
    // console.log(price)

    return (
        <div className='mainMenuproduct-wrapper'>
            <ProductItem img={image} name={name} price={price} />
            <Button2 name={name} id={id} />
        </div>
    )
}
