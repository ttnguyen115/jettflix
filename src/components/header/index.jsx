import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchSearchRequest } from '../../redux/movieReducer/movieSlice';
import './_header.scss';

const Header = ({ handleToggleSidebar }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        history.push('/');
        dispatch(fetchSearchRequest(search));
    }

    return (
        <div className="header">
            <FaBars className="header__menu" size={26}
                onClick={handleToggleSidebar}
            />
            
            <img src="/jettflix.png" alt="" className="header__logo"/>
            
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" onChange={e => handleChange(e)} />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>

            {/* Change to dark/light theme button later */}
            <div className="header__icons">
                <Avatar src="/broken-image.jpg" /> 
            </div>
        </div>
    )
}

export default Header
