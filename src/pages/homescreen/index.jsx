import React from 'react';
import { Container } from "react-bootstrap";
import HomePage from '../../components/index';


const HomeScreen = () => {
    return (
        <div>
            <div className="app__container" >
                <Container fluid className="app__main ">
                    <HomePage  />
                </Container>
            </div>
        </div>
    )
}

export default HomeScreen;
