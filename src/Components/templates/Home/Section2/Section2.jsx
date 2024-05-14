import React, { useEffect, useState } from 'react'
import './section2.css'
import Button from '../../../modules/Button/Button'
import { Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
export default function Section2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { language } = useMyContext()
    const { t } = useTranslation();

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);

    return (
        <>
            {
                windowWidth < 605 ?
                    <>
                        <div className='section2-wrapper'>
                            <Col xs={2} className={`drinking-text-wrapper ${language === "fa" && "feauter"}`}>
                                <div className="drinking-text drinking-text-left">
                                    <p className='drinking-text-left-main'>{t("Cold")}</p>
                                </div>
                                <div className="drinking-text drinking-text-right">
                                    <p className='drinking-text-right-main'>{t("Drink")}</p>
                                </div>
                            </Col>
                            <Col xs={10} data-aos={`fade-top`} data-aos-once="false">
                                <div className='image-section2-wrapper'>
                                </div>
                            </Col>
                        </div>
                        <div className="text-section2">
                            <span className='section2-text-1'>{t("firstsec")}</span><br />
                            <span className='section2-text-2'>{t("twosec")}</span>
                        </div>
                        <div className="btn-section2">
                            <Button
                                text={"Order"}
                            />
                        </div>
                    </> :
                    <>
                        <div className={`section2-container ${language === "fa" && "rtl"}`}>
                            <div className="section2-wrapper">
                                <Col sm={7} className="left-section2">
                                    <div className={`drinking-text-wrapper ${language === "fa" && "feauter"}`}>
                                        <div className={`drinking-text drinking-text-left`}>
                                            <p className='drinking-text-left-main'>{t("Cold")}</p>
                                        </div>
                                        <div className={`drinking-text drinking-text-right`}>
                                            <p className='drinking-text-right-main'>{t("Drink")}</p>
                                        </div>
                                    </div>
                                    <div className="text-section2">
                                        <span className='section2-text-1'>{t("firstsec")}</span><br />
                                        <span className='section2-text-2'>{t("twosec")}</span>
                                    </div>
                                    <div className="btn-section2">
                                        <Button
                                            text={"Order"}
                                        />
                                    </div>
                                </Col>
                                <Col sm={5} className="right-section2">
                                    <>
                                        <div className='fade-wrapper fade-wrapper-m' data-aos="fade-top" data-aos-once="false">
                                            <div className='image-section2-wrapper'>
                                            </div>
                                        </div>
                                    </>
                                </Col>
                            </div>
                        </div>

                    </>
            }

        </>
    )
}
