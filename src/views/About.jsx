// src/views/About.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/index.css';

const teamMembers = [
    { name: 'Alice Johnson', role: 'Founder & CEO', avatar: '/assets/images/avatar1.png' },
    { name: 'Mark Brown', role: 'COO', avatar: '/assets/images/avatar2.png' },
    { name: 'Sophia Lee', role: 'CTO', avatar: '/assets/images/avatar3.png' },
    { name: 'Michael Davis', role: 'Marketing Manager', avatar: '/assets/images/avatar4.png' }
];

function About() {
    return (
        <>
            <Header />
            <Container>
                {/* About Us Section */}
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h4" gutterBottom>About Us</Typography>
                    <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                    <Typography variant="body1" paragraph>
                        Welcome to Elara, your number one source for all things fashionable.
                        We're dedicated to providing you the best products, with a focus on dependability,
                        customer service, and uniqueness.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Founded in 2024 by the Elara Team, Elara has come a long way from its beginnings.
                        When we first started out, our passion for providing top-quality products drove us to
                        start our own business.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We hope you enjoy our products as much as we enjoy offering them to you.
                        If you have any questions or comments, please don't hesitate to contact us.
                    </Typography>
                </Box>

                {/* Our Mission Section */}
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h4" gutterBottom>Our Mission</Typography>
                    <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                    <Typography variant="body1" paragraph>
                        At Elara, our mission is to deliver high-quality fashion products that empower individuals
                        to express their unique style with confidence. We believe that fashion should be accessible,
                        fun, and empowering for everyone.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We strive to provide the best customer experience, offering a diverse selection of products
                        that cater to various tastes and preferences. Our commitment to sustainability and ethical
                        practices drives us to source materials responsibly and support fair labor practices.
                    </Typography>
                </Box>

                {/* Our Story Section */}
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h4" gutterBottom>Our Story</Typography>
                    <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                    <Typography variant="body1" paragraph>
                        Elara was born out of a desire to create a fashion brand that not only offers the latest trends
                        but also makes a positive impact on the world. Our founders, Alice Johnson and Mark Brown,
                        envisioned a brand that prioritizes quality, customer service, and sustainability.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Since our inception, we've built a loyal customer base that shares our values and passion for fashion.
                        We've expanded our product offerings to include a wide range of styles, ensuring there's something
                        for everyone.
                    </Typography>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default About;
