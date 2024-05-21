import React, { useEffect } from 'react'
import './Section1.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
import 'animate.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
export default function Section1() {
    const { language } = useMyContext()
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);

    return (
        <>
            <div className={`section1-wrapper ${language === "fa" && "rtl"}`}>
                <Col xs={12} sm={6} md={5} className="crosan-img-wrapper">
                    <div className='fade-wrapper' data-aos={`${language === "fa" ? "fade-left" : "fade-right"}`} data-aos-once="false">
                        <img src="../../../../../public/images/crosan.png" alt="crosan" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={7} className="right-section1">
                    <div className="byword-wrapper animate__animated animate__fadeInDown animate__delay-1s">
                        {t("REST")}<br />
                        {t("DRINK")}<br />
                        {t("ANDDOMORE")}
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
    )
}


//home/get-specasil-offer