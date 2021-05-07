import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Recommendation from '../../components/recommendation/Recommendation';
import Trailer from '../../components/trailer/Trailer';
import useFetchRecommendation from '../../hooks/useFetchRecommedation';
import useFetchTrailer from '../../hooks/useFetchTrailer';
import './_detailscreen.scss';

const DetailScreen = () => {
    const { id } = useParams();
    const { list, recLoading } = useFetchRecommendation(id);
    const { trailers, isLoading } = useFetchTrailer(id);

    if (recLoading || isLoading) return <p>Loading...</p>; 

    return (
        <Container>
            <Col xs={12}>
                <div className="detailScreen">
                    { trailers 
                        ? <Trailer key={trailers.id} trailers={trailers} />
                        : null
                    }
                </div>
            </Col>

            <h2>Recommendations</h2>
            <Row sm={3} md={4} lg={6} className="recRow">
                { list
                    ? list.map(item => <Recommendation key={item.id} item={item} />)
                    : <p>There is not any related items !!</p>
                }
            </Row>
        </Container>
    )
}

export default DetailScreen
