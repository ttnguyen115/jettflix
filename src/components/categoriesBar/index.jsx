import React, { useState } from 'react'
import './_categoriesBar.scss';
import { genres } from '../../constants/genres';

const CategoriesBar = () => {
    const [activeGenre, setActiveGenre] = useState('')

    const handleActiveGenreClick = (value) => {
        setActiveGenre(value);
    }

    return (
        <div className="categoriesBar">
            {
                Object.values(genres).map(genre => (
                    <span 
                        key={genre.id}
                        onClick={() => handleActiveGenreClick(genre.name)}
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
