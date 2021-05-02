import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { isOpen, sidebarSelector } from '../../redux/sidebarReducer/sidebarSlice';

import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import './_sidebar.scss';



const Sidebar = () => {
    const sidebar = useSelector(sidebarSelector);
    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(isOpen(false));
    }

    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}
            onClick={handleToggleSidebar}
        >
            <li>
                <HomeIcon />
                <span>Home</span>
            </li>

            <li>
                <WhatshotIcon />
                <span>Trending</span>
            </li>

            <li>
                <ThumbUpIcon />
                <span>Top Rated</span>
            </li>

            <li>
                <MovieFilterIcon />
                <span>Movies</span>
            </li>

            <li>
                <TvIcon />
                <span>TV Shows</span>
            </li>

            <li>
                <EventIcon />
                <span>Upcoming</span>
            </li>
        </nav>
    )
}

export default Sidebar
