import React from 'react';

import Navbar from '../../components/Navbar';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Navbar />

            <h1>Home</h1>
        </Container>
    );
};

export default Home;
