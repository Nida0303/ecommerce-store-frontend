import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

function Profile() {
    const { user } = useAuth();

    return (
        <>
            <Header />
            <Container>
                <Box mt={5} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>Profile</Typography>
                    {user && (
                        <>
                            <Typography variant="h6">Name: {user.name}</Typography>
                            <Typography variant="h6">Email: {user.email}</Typography>
                        </>
                    )}
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default Profile;
