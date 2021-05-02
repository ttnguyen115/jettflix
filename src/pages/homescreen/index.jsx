import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import CategoriesBar from '../../components/categoriesBar';
import Videos from '../../components/videos';
import { fetchRequests } from '../../helpers/fetchRequest';
import tmdb from '../../apis/tmdb';
import { TMDB_URL } from '../../constants/tmdbUrl';

const HomeScreen = () => {
    const data = fetchRequests(tmdb, TMDB_URL);
    console.log(data);

    return (
        <Container>
            {/* <CategoriesBar /> */}

            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4} >
                            <Videos />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default HomeScreen
