import React from 'react'
import './MainMenuProduct.css'
import ProductItem from '../../modules/ProductItem/ProductItem'
import Button2 from '../Button2/Button2'
export default function MainMenuProduct() {
    return (
        <div className='mainMenuproduct-wrapper'>
            <ProductItem />
            <Button2 />
        </div>
    )
}
