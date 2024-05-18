import React from 'react'
import './CartItem.css'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';
export default function CartItem() {

    const { t } = useTranslation()
    return (
        <div className='CartItem mt-5'>
            <div className='d-flex'>
                <span className='remove-icon-wrapper'><CloseIcon /></span>
                <p className="text-order-product">dfsdfds dsgsd dgdsg</p>
            </div>
            <div className='d-flex number-order-wrapper'>
                <span className="number-porduct-order">
                    100 X
                </span>
                <span className='min-product'>
                    <RemoveIcon />
                </span>
                <span className='plus-product'>
                    <AddIcon />
                </span>
            </div>
            <div className='d-flex'>
                <p className="price-product">
                    100.000.000 {t("t")}
                </p>
            </div>
        </div>
    )
}
