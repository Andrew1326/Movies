import React from 'react';

const Video = ({src}: {src: string}): JSX.Element => {
    return (
        <video autoPlay loop muted playsInline>
            <source src={src} type='video/mp4' />
        </video>
    )
}

export default Video