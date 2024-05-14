import React from 'react'
import './Offcanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../context/langugaeContext';
import i18n from '../../../i18n';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import { NavLink } from 'react-router-dom';
export default function OffcanvasSideBar({ show, onHide }) {
    const { t } = useTranslation()
    const { setLanguage, language } = useMyContext()
    const changeLanguage = (value) => {
        if (value) {
            i18n.changeLanguage("en")
            setLanguage("en")
            localStorage.setItem("language", "en")
        } else {
            i18n.changeLanguage("fa")
            setLanguage("fa")
            localStorage.setItem("language", "fa")
        }

    }
    return (
        <>
            <Offcanvas show={show} onHide={onHide} className="offcanvas">
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="menu-sidebar">
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
