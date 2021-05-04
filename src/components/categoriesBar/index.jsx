import React, { useState } from 'react'
import './_categoriesBar.scss';
import { genres } from '../../constants/genres';
import { useDispatch } from 'react-redux';
import { fetchGenreRequest } from '../../redux/movieReducer/movieSlice';

const CategoriesBar = () => {
    const dispatch = useDispatch();
    const [activeGenre, setActiveGenre] = useState('')

    const handleActiveGenreClick = (genre) => {
        setActiveGenre(genre.name);
        dispatch(fetchGenreRequest(genre.id));
    }

    return (
        <div className="categoriesBar">
            {
                Object.values(genres).map(genre => (
                    <span 
                        key={genre.id}
                        onClick={() => handleActiveGenreClick(genre)}
                        className={activeGenre === genre.name ? 'active' : '' }
                    >
                        {genre.name}
                    </span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
