import React, { useState, useRef } from 'react';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import './Video.css'
export default function Video() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }
    return (
        <div className='video-conatiner' onClick={handlePlay}>
            <video className='video'
                width={"100%"}
                height={"100%"}
                ref={videoRef}
            >
                <source src="../../../../public/video/video .mp4" type="video/mp4" />
            </video>
            {
                !isPlaying &&
                <div className='play-wrapper'>
                    <PlayCircleOutlinedIcon className='iconPlay' />
                </div>
            }
        </div>
    )
}
