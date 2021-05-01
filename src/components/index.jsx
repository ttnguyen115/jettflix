import React from 'react'

import { Container } from "react-bootstrap";
import Header from "./header";
import Sidebar from './sidebar';
import HomeScreen from "../pages/homescreen";

const HomePage = () => {
    return (
        <div>
            <Header />

            <div className="app__container" >
                <Sidebar />

                <Container fluid className="app__main ">
                    <HomeScreen  />
                </Container>
            </div>
        </div>
    )
}

export default HomePage;
