import React, { useState, useRef } from 'react';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import './Video.css'
import { IP } from '../../../App';
export default function Video({ Video }) {

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
                <source src={`${IP}${Video}`} type="video/mp4" />
                <source src={`${IP}${Video}`} type="video/webm" />
                <source src={`${IP}${Video}`} type="video/ogg" />
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
