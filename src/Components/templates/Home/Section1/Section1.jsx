import React, { useEffect } from 'react'
import './Section1.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
import 'animate.css'
export default function Section1() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);

    return (
        <>
            <div className="section1-wrapper">
                <Col md={6} className="crosan-img-wrapper">
                    <div className='fade-wrapper' data-aos="fade-right" data-aos-once="false">
                        <img src="../../../../../public/images/crosan.svg" alt="crosan" />
                    </div>
                </Col>
                <Col md={6} className="right-section1">
                    <div className="byword-wrapper animate__animated animate__fadeInDown animate__delay-1s">
                        REST<br />
                        DRINK<br />
                        AND DO MORE !
                    </div>
                    <div className="time-section1-wrapper">
                        <span className='am-time time-section1'>6:00 AM </span>
                        -
                        <span className='pm-time time-section1'> 11:00 PM </span>
                    </div>
                </Col>
            </div>
        </>
    )
}
