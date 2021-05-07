import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Movies from '../videos';
import './_recommendation.scss';

const Recommendation = ({item}) => {
    return (
        <Row className="recommendation m-1 py-2 align-align-items-center">
            <Col xs={12} >
                <Movies movie={item}
                    className="recItem"
                />
            </Col>
        </Row>
    )
}

export default Recommendation
