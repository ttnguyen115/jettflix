import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import tmdb from '../apis/tmdb';

export default function useFetch(tmdbUrl) {
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await tmdb.get(tmdbUrl);
                setMovies(result.data.results);
            } catch (err) {
                console.log({msg: err.message});
            }
            
            setLoading(false);
        })()
    }, [tmdbUrl, dispatch, movies]);

    return {movies, loading};
}