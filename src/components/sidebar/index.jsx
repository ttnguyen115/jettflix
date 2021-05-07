import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import React from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_URL } from '../../constants/tmdbUrl';
import { fetchMovieApi } from '../../redux/movieReducer/movieSlice';
import './_sidebar.scss';

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch();
    
    const handleUseFetchHook = (link) => {
        dispatch(fetchMovieApi(link));
    }

    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}
            onClick={handleToggleSidebar}
        >
            <li onClick={() => handleUseFetchHook(TMDB_URL[0])}>
                <HomeIcon />
                <span>Home</span>
            </li>

            <li onClick={() => handleUseFetchHook(TMDB_URL[1])}>
                <WhatshotIcon />
                <span>Trending</span>
            </li>

            <li onClick={() => handleUseFetchHook(TMDB_URL[2])}>
                <ThumbUpIcon />
                <span>Top Rated</span>
            </li>

            <li onClick={() => handleUseFetchHook(TMDB_URL[3])}>
                <MovieFilterIcon />
                <span>Movies</span>
            </li>

            <li onClick={() => handleUseFetchHook(TMDB_URL[4])}>
                <TvIcon />
                <span>TV Shows</span>
            </li>

            <li onClick={() => handleUseFetchHook(TMDB_URL[5])}>
                <EventIcon />
                <span>Upcoming</span>
            </li>
        </nav>
    )
}

export default Sidebar
