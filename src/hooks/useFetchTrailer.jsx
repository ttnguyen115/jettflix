import { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

export default function useFetchTrailer(itemId) {
    const [trailers, setTrailers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const url = `/movie/${itemId}/videos`;
                const res = await tmdb.get(url);
                setTrailers(res.data.results[res.data.results.length - 1]);
        
            } catch (err) {
                console.log({msg: err.message});
            }

            setIsLoading(false);
        })()
    }, [itemId]);

    return { trailers, isLoading };
}