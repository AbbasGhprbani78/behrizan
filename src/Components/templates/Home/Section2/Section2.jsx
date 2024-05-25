import React, { useEffect, useState } from 'react'
import './section2.css'
import Button from '../../../modules/Button/Button'
import { Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import axios from 'axios';
import { IP } from '../../../../App'
import Lodaing from '../../../modules/Loading/Lodaing';
export default function Section2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { language } = useMyContext()
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState("")

    useEffect(() => {
        const offProducts = async () => {
            const headers = {
                'Accept-Language': language
            };
            setLoading(true)

            try {
                const response = await axios.get(`${IP}/home/get-special-offer/`, {
                    headers,
                })

                if (response.status === 200) {
                    setProduct(response.data)
                    setLoading(false)
                }

            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        offProducts()
    }, [])

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
                loading ?
                    <Lodaing /> :

                    windowWidth < 605 ?
                        <>
                            <div className={`section2-wrapper ${language === "fa" && "rtl"}`}>
                                <Col xs={4} className={`drinking-text-wrapper `}>
                                    <div className="drinking-text drinking-text-left">
                                        <p className='drinking-text-left-main'>{t("Cold")}</p>
                                    </div>
                                    <div className="drinking-text drinking-text-right">
                                        <p className='drinking-text-right-main'>{t("Drink")}</p>
                                    </div>
                                </Col>
                                <Col xs={8} data-aos={`fade-top`} data-aos-once="false">
                                    <div className='image-section2-wrapper-m '  >
                                        <img src={`${IP}${product[0]?.image}`} alt="" />
                                    </div>
                                </Col>
                            </div>
                            <div className="text-section2">
                                <span className={`section2-text-1 ${language === "fa" && "rtl-section2-text-1"}`}>{t("firstsec")}</span><br />
                                <span className={`section2-text-2 ${language === "fa" && "rtl-section2-text-2"}`}>{t("twosec")}</span>
                            </div>
                            <div className="btn-section2">
                                <Button
                                    name={product[0]?.name}
                                    id={product[0]?.id}
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
                                                name={product[0]?.name}
                                                id={product[0]?.id}

                                            />
                                        </div>
                                    </Col>
                                    <Col sm={5} className="right-section2">
                                        <>
                                            <div className='fade-wrapper fade-wrapper-m' data-aos="fade-top" data-aos-once="false">
                                                <div className='image-section2-wrapper' style={{ backgroundImage: `url(${IP}${product[0]?.image})` }} >
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
