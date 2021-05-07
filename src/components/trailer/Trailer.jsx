import './_trailer.scss'; 
import React from 'react'

const Trailer = ({trailers}) => {
    return (
            <iframe 
                src={`https://www.youtube.com/embed/${trailers.key}`}
                frameBorder="0"
                title={trailers.name}
                allowFullScreen
                width="100%"
                height="100%"
            ></iframe>
    )
}

export default Trailer
