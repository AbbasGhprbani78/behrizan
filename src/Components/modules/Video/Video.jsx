import React, { useState } from 'react';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ReactPlayer from 'react-player';
import './Video.css';
import { IP } from '../../../App';

export default function Video({ Video }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='video-container' onClick={handlePlay}>
            {!isPlaying && (
                <PlayCircleOutlinedIcon className='play-icon' />
            )}
            <ReactPlayer
                className='video'
                url={`${IP}${Video}`}
                playing={isPlaying}
                controls={false}
                width="100%"
                height="100%"
            />
        </div>
    );
}
