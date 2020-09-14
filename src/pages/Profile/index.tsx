import React from 'react';

import Navbar from '../../components/Navbar';

import { Container } from './styles';

const Profile: React.FC = () => {
    return (
        <Container>
            <Navbar />

            <h1>Profile</h1>
        </Container>
    );
};

export default Profile;
