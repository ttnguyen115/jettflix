import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './_videos.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from 'react-router';

const Movies = ({movie}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/original';
    const history = useHistory();

    const handleItemClick = () => {
        history.push(`/detail/${movie.id}`);
    }

    return (
        <div className="video"
            onClick={handleItemClick}
        >
            <div className="video__top">
                <LazyLoadImage 
                    src={`${imgBaseUrl}${movie.poster_path}`} 
                    effect="blur" 
                    alt={`${movie.original_title || movie.name}`} 
                />
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
