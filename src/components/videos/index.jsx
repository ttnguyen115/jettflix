import React from 'react'

import './_videos.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Movies = ({movie}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/original';

    return (
        <div className="video">
            <div className="video__top">
                <img src={`${imgBaseUrl}${movie.poster_path}`} alt="poster movie"/>
            </div>

            <div className="video__title">
                {movie.original_title || movie.name}
            </div>

            <div className="video__details">
                <span>
                    <VisibilityIcon /> {movie.vote_average} - {movie.release_date || movie.first_air_date}
                </span>
            </div>
        </div>
    )
}

export default Movies
