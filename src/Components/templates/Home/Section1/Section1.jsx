import React, { useEffect, Fragment } from 'react'
import './Section1.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
import 'animate.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import { IP } from '../../../../App';

export default function Section1({ dataHome }) {
    const { language } = useMyContext();
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);

    const headerText = language === 'fa' ? dataHome?.header_text_farsi : dataHome?.header_text;

    const formattedHeaderText = headerText?.split(',').map((text, index, arr) => (
        <Fragment key={index}>
            {text}
            {index < arr.length - 1 && <br />}
        </Fragment>
    ));

    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const toPersianDigits = (num) => {
        return num?.toString()?.replace(/\d/g, (x) => persianNumbers[parseInt(x)]);
    };


    const startText = language === 'fa' ? toPersianDigits(dataHome?.start?.replace('AM', 'صبح')) : dataHome.start;
    const endText = language === 'fa' ? toPersianDigits(dataHome?.end?.replace('PM', 'عصر')) : dataHome.end;




    return (
        <>
            <div className={`section1-wrapper ${language === "fa" && "rtl rtl-back"}`}>
                <Col xs={12} sm={6} md={5} className="crosan-img-wrapper">
                    <div className='fade-wrapper' data-aos={`${language === "fa" ? "fade-left" : "fade-right"}`} data-aos-once="false">
                        <img src={`${IP}${dataHome?.image_one}`} alt="image-1" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={7} className="right-section1">
                    <div className="byword-wrapper animate__animated animate__fadeInDown animate__delay-1s">
                        {formattedHeaderText}
                    </div>
                    <div className='time-work-wrapper'>
                        {
                            language === "fa" ?
                                <span className='time-work fw-bold'>{`${startText} تا ${endText}`}</span> :
                                <span className='time-work fw-bold'>{`${dataHome?.start} - ${dataHome?.end}`}</span>
                        }
                    </div>
                    <div className="link-nav-wrapper mt-4 link-sec-m">
                        <Link className='link-nav join-now link-nav-sec' to={"https://order.qmancafe.com/order"}>
                            {t("orderonline")}
                        </Link>
                    </div>
                </Col>
            </div>
        </>
    );
}
