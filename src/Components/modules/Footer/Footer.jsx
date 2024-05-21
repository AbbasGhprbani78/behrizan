import React, { useEffect, useState } from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { IP } from '../../../App'

export default function Footer() {
    //home/footer/
    const [socaial, setSocaial] = useState("");

    useEffect(() => {

        const getSocial = async () => {
            try {
                const response = await axios.get(`${IP}/home/footer/`)

                if (response.status === 200) {
                    setSocaial(response.data)
                }

            } catch (e) {
                console.log(e)
            }
        }
        getSocial()
    }, [])


    const handleGoToInstagram = () => {
        const instagramUrl = `https://www.instagram.com/${socaial.instagram}`;
        window.open(instagramUrl, '_blank');
    }

    const handleGoToWhatsUp = () => {
        const whatsappUrl = `https://wa.me/${socaial.whatsapp}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleGoToTelegram = () => {
        const telegramUrl = `https://t.me/${socaial.telegram}`;
        window.open(telegramUrl, '_blank');
    };

    return (
        <>
            <footer className='footer'>
                <Col md={6} className="socal-media">
                    <div className="icon-socal-wrapper" onClick={handleGoToWhatsUp}>
                        <WhatsAppIcon className="icon-socal" />
                    </div>
                    <div className="icon-socal-wrapper second-icon" onClick={handleGoToInstagram}>
                        <TelegramIcon className="icon-socal" />
                    </div>
                    <div className="icon-socal-wrapper" onClick={handleGoToTelegram}>
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
