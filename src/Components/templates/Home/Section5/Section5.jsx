import React, { useEffect, useState } from 'react'
import './Section5.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../../../../context/langugaeContext';
import axios from 'axios';
import { IP } from '../../../../App';
export default function Section5() {

    const { language } = useMyContext()
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);

    const [socaial, setSocaial] = useState("");

    useEffect(() => {

        const getSocial = async () => {
            try {
                const response = await axios.get(`${IP}/home/footer/`)

                if (response.status === 200) {
                    setSocaial(response.data)
                    console.log(socaial)
                }

            } catch (e) {
                console.log(e)
            }
        }
        getSocial()
    }, [])

    return (
        <>
            <div className="section5-wrappper">
                <Col xs={6} md={8} className='motor-fade' data-aos="fade-left" data-aos-once="false">
                    <div className="section5-left">
                        <img src="../../../../../public/images/motor.png" alt="" />
                    </div>
                </Col>
                <Col xs={6} md={4} className={`section5-right ${language === "fa" && "rtl"}`}>
                    <p className="text-section5">
                        <span className="telephone-text">{t("phoneOrders")} : </span>
                        <span className='telephone-number'>{socaial?.phone_number}</span>
                    </p>
                </Col >
            </div>
        </>
    )
}
