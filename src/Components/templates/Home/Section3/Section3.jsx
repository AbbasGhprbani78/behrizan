import React from 'react'
import './Section3.css'
import Video from '../../../modules/Video/Video'
import { Col } from 'react-bootstrap'
export default function Section3() {
    return (
        <>
            <div className='section3-wrapper'>
                <Col className='video-wrapper' xs={12} md={4}><Video /></Col>
                <Col className='video-wrapper' xs={12} md={4}><Video /></Col>
                <Col className='video-wrapper' xs={12} md={4}><Video /></Col>
            </div>
        </>
    )
}
