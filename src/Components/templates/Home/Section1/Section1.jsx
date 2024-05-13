import React, { useEffect } from 'react'
import './Section1.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
import 'animate.css'
import { Link } from 'react-router-dom';
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
                <Col xs={12} sm={5} className="crosan-img-wrapper">
                    <div className='fade-wrapper' data-aos="fade-right" data-aos-once="false">
                        <img src="../../../../../public/images/crosan.png" alt="crosan" />
                    </div>
                </Col>
                <Col xs={12} sm={7} className="right-section1">
                    <div className="byword-wrapper animate__animated animate__fadeInDown animate__delay-1s">
                        REST<br />
                        DRINK<br />
                        AND DO MORE
                    </div>
                    <div className="link-nav-wrapper mt-4 link-sec-m">
                        <Link className='link-nav signin link-nav-sec'>
                            Sign in
                        </Link>
                        <Link className='link-nav join-now link-nav-sec'>
                            join now
                        </Link>
                    </div>
                </Col>

            </div>
        </>
    )
}
