import React from 'react'
import './Menu.css'
import MenuList from '../../Components/modules/MenuList/MenuList'
import { useMyContext } from '../../context/langugaeContext'
import MenuHeader from '../../Components/modules/MenuHeader/MenuHeader'
export default function Menu() {

    const { language } = useMyContext()
    return (
        <>
            <div className={`menu-container ${language === "fa" && "rtl"}`}>
                <MenuHeader />
                <div className="menu-content">
                    <MenuList
                        titleProducts={"Drink"}
                    />
                    <MenuList
                        titleProducts={"Snack & weets"}
                    />
                </div>
            </div>
        </>
    )
}
