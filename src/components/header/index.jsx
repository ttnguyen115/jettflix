import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { isOpen, sidebarSelector } from '../../redux/sidebarReducer/sidebarSlice';
import './_header.scss';

const Header = () => {
    const sidebar = useSelector(sidebarSelector);

    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(isOpen(!sidebar));
    }


    return (
        <div className="header">
            <FaBars className="header__menu" size={26}
                onClick={handleToggleSidebar}
            />

            <img src="/jettflix.png" alt="" className="header__logo"/>

            <form>
                <input type="text" placeholder="Search" />
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
