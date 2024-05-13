import React from 'react'
import './Video.css'

export default function Video() {

    return (
        <video className='video' controls >
            <source src="../../../../public/video/video .mp4" type="video/mp4" />
        </video>
    )
}
