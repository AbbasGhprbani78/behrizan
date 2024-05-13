import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <Col md={6} className="socal-media">
                    <div className="icon-socal-wrapper">
                        <WhatsAppIcon className="icon-socal" />
                    </div>
                    <div className="icon-socal-wrapper second-icon">
                        <TelegramIcon className="icon-socal" />
                    </div>
                    <div className="icon-socal-wrapper">
                        <InstagramIcon className="icon-socal" />
                    </div>
                </Col>
                <Col md={6} className="footer-right">
                    <p className="footer-text-1">
                        c
                        2024
                        Qmancafe All Rights Reserved</p>
                    <p className="footer-text-2">Powered By Ariisco</p>
                </Col>
            </footer>
        </>
    )
}
