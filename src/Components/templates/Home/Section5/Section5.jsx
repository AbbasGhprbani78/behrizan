import React, { useEffect } from 'react';
import './Section5.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import { IP } from '../../../../App';

export default function Section5({ dataHome }) {
    const { language, socaial } = useMyContext();
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);


    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const toPersianDigits = (num) => {
        return num?.toString()?.replace(/\d/g, (x) => persianNumbers[parseInt(x)]);
    };


    const phoneNumber = language === 'fa' ? toPersianDigits(socaial?.phone_number) : socaial?.phone_number;

    return (
        <>
            <div className="section5-wrappper">
                <Col xs={6} md={8} className='motor-fade' data-aos="fade-left" data-aos-once="false">
                    <div className="section5-left">
                        <img src={`${IP}${dataHome?.motor_image}`} alt="" />
                    </div>
                </Col>
                <Col xs={6} md={4} className={`section5-right ${language === "fa" && "rtl"}`}>
                    <p className="text-section5">
                        <span className="telephone-text">{t("phoneOrders")} : </span>
                        <span className='telephone-number'>{phoneNumber}</span>
                    </p>
                </Col>
            </div>
        </>
    );
}
