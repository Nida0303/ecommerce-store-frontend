// src/views/CategoriesPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CategoriesPage() {
    const { category } = useParams();

    return (
        <>
            <Header />
            <Container>
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h3" gutterBottom>{category.charAt(0).toUpperCase() + category.slice(1)} Category</Typography>
                    <Typography variant="body1" paragraph>
                        Explore the best products in the {category} category.
                    </Typography>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default CategoriesPage;
