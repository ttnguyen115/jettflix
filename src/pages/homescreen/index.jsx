import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../components/categoriesBar';
import SkeletonCustom from '../../components/skeleton';
import Movies from '../../components/videos';
import { TMDB_URL } from '../../constants/tmdbUrl';
import { fetchMovieApi, selectMovies } from '../../redux/movieReducer/movieSlice';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const {movies, loading} = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchMovieApi(TMDB_URL[0]));  
    }, [dispatch]);

    return (
        <Container>
            <CategoriesBar />

            <Row>
                { loading 
                    ?
                        [...Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <SkeletonCustom />
                            </Col>
                        ))
                    : (
                        movies.map(movie => (
                            <Col lg={3} md={4} key={movie.id} >
                                <Movies movie={movie}  />
                            </Col>
                        ))
                    )
                }
            </Row>
        </Container>
    )
}

export default HomeScreen
