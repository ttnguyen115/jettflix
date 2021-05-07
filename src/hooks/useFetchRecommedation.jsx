import { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

export default function useFetchRecommendation(itemId) {
    const [list, setList] = useState([]);
    const [ recLoading, setRecLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setRecLoading(true);
                const url = `/movie/${itemId}/similar`;
                const res = await tmdb.get(url);
                setList(res.data.results);
        
            } catch (err) {
                console.log({msg: err.message});
            }

            setRecLoading(false);
        })()
    }, [itemId]);

    return { list, recLoading };
}