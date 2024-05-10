// src/components/ReviewsSection.jsx
import React from 'react';
import { Grid, Card, CardContent, Avatar, Typography, Rating, Box } from '@mui/material';

const reviews = [
    {
        product: 'Product 1',
        reviewer: 'Michael Davis',
        review: 'This product exceeded my expectations! Highly recommended.',
        date: '07/01/2023',
        rating: 5,
        avatar: '/assets/images/avatar4.png'
    },
    {
        product: 'Product 2',
        reviewer: 'Emma Wilson',
        review: 'Great quality and fast shipping. I am very satisfied.',
        date: '09/03/2023',
        rating: 4,
        avatar: '/assets/images/avatar5.png'
    },
    {
        product: 'Product 3',
        reviewer: 'Olivia Martinez',
        review: 'Amazing product and wonderful customer support.',
        date: '11/12/2023',
        rating: 5,
        avatar: '/assets/images/avatar6.png'
    }
];

function ReviewsSection() {
    return (
        <Grid container spacing={3} justifyContent="center" padding={'30px'}>
            {reviews.map((review, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ maxWidth: '300px', borderRadius: '16px', padding: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <Avatar alt={review.reviewer} src={review.avatar} style={{ width: 60, height: 60, marginBottom: '10px', borderRadius: '50%' }} />
                            </Box>
                            <Typography variant="h6" align="center">{review.reviewer}</Typography>
                            <Typography variant="subtitle2" color="text.secondary" align="center" gutterBottom>{review.date}</Typography>
                            <Box display="flex" justifyContent="center">
                                <Rating value={review.rating} readOnly size="small" />
                            </Box>
                            <Typography variant="body2" style={{ marginTop: '10px' }}>{review.review}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ReviewsSection;
