import React from 'react'
import './ProductItem2.css'
import AddIcon from '@mui/icons-material/Add';
export default function ProductItem2() {
    return (
        <>
            <div className="productItem2-container">
                <div className='productItem2-wrapper'>
                    <span className='addIcon'>
                        <AddIcon />
                    </span>
                    <img src="../../../../public/images/cookie.png" alt="product-img" />
                </div>
                <p className='productItem2-text'>
                    chocolatecookie
                </p>
            </div>
        </>

    )
}
