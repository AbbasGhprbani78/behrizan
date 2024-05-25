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

    return (
        <>
            <div className={`section1-wrapper ${language === "fa" && "rtl"}`}>
                <Col xs={12} sm={6} md={5} className="crosan-img-wrapper">
                    <div className='fade-wrapper' data-aos={`${language === "fa" ? "fade-left" : "fade-right"}`} data-aos-once="false">
                        <img src={`${IP}${dataHome?.image_one}`} alt="image-1" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={7} className="right-section1">
                    <div className="byword-wrapper animate__animated animate__fadeInDown animate__delay-1s">
                        {formattedHeaderText}
                    </div>
                    <div className='time-work-wrapper mb-5'>
                        <span className='time-work fw-bold'>{dataHome.start} _ {dataHome.end}</span>
                    </div>
                    <div className="link-nav-wrapper mt-4 link-sec-m">
                        <Link className='link-nav signin link-nav-sec' to={'#'}>
                            {t("Signin")}
                        </Link>
                        <Link className='link-nav join-now link-nav-sec' to={"#"}>
                            {t("joinnow")}
                        </Link>
                    </div>
                </Col>
            </div>
        </>
    );
}
