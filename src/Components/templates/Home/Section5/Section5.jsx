import React, { useEffect } from 'react'
import './Section5.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
export default function Section5() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        });
    }, []);

    return (
        <>
            <div className="section5-wrappper">
                <Col xs={7} md={8} className='motor-fade' data-aos="fade-left" data-aos-once="false">
                    <div className="section5-left">
                        <img src="../../../../../public/images/motor.png" alt="" />
                    </div>
                </Col>
                <Col xs={5} md={4} className="section5-right">
                    <p className="text-section5">
                        <span className="telephone-text">Telephone Orders : </span>
                        <span className='telephone-number'>09134641468</span>
                    </p>
                </Col >
            </div>
        </>
    )
}
