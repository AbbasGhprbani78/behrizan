import React, { useEffect, useState } from 'react'
import './section2.css'
import Button from '../../../modules/Button/Button'
import { Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Section2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
                            <Col xs={2} className="drinking-text-wrapper">
                                <div className="drinking-text drinking-text-left">
                                    <p className='drinking-text-left-main'>Cold</p>
                                </div>
                                <div className="drinking-text drinking-text-right">
                                    <p className='drinking-text-right-main'>Drink</p>
                                </div>
                            </Col>
                            <Col xs={10} data-aos="fade-right" data-aos-once="false">
                                <div className='image-section2-wrapper'>
                                </div>
                            </Col>
                        </div>
                        <div className="text-section2">
                            <span className='section2-text-1'>SUMMER IS HERE</span><br />
                            <span className='section2-text-2'> BEST OFFER</span>
                        </div>
                        <div className="btn-section2">
                            <Button
                                text={"Order"}
                            />
                        </div>
                    </> :
                    <>
                        <div className='section2-container'>
                            <div className="section2-wrapper">
                                <Col sm={6} md={7} className="left-section2">
                                    <div className="drinking-text-wrapper">
                                        <div className="drinking-text drinking-text-left">
                                            <p className='drinking-text-left-main'>Cold</p>
                                        </div>
                                        <div className="drinking-text drinking-text-right">
                                            <p className='drinking-text-right-main'>Drink</p>
                                        </div>
                                    </div>
                                    <div className="text-section2">
                                        <span className='section2-text-1'>SUMMER IS HERE</span><br />
                                        <span className='section2-text-2'> BEST OFFER</span>
                                    </div>
                                    <div className="btn-section2">
                                        <Button
                                            text={"Order"}
                                        />
                                    </div>
                                </Col>
                                <Col sm={6} md={5} className="right-section2">
                                    <div className='fade-wrapper fade-wrapper-m' data-aos="fade-right" data-aos-once="false">
                                        <div className='image-section2-wrapper'>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>

                    </>
            }

        </>
    )
}
