import React from 'react'
import './Section3.css'
import Video from '../../../modules/Video/Video'
import { Col } from 'react-bootstrap'
export default function Section3({ dataHome }) {
    return (
        <>
            <div className='section3-wrapper'>
                <Col className='video-wrapper' xs={12} md={4}>
                    <Video Video={dataHome?.video_one} image={dataHome?.image_for_one_video} />
                </Col>
                <Col className='video-wrapper' xs={12} md={4}>
                    <Video Video={dataHome?.video_two} image={dataHome?.image_for_two_video} />
                </Col>
                <Col className='video-wrapper' xs={12} md={4}>
                    <Video Video={dataHome?.video_three} image={dataHome?.image_for_three_video} />
                </Col>
            </div>
        </>
    )
}
