import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ category }) {
    const navigate = useNavigate();

    return (
        <Card
            onClick={() => navigate(`/categories/${category.id}`)}
            style={{
                maxWidth: '300px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                backgroundColor: '#e0f7fa',
                padding: '15px'
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + category.image}
                alt={category.name}
                style={{
                    borderRadius: '12px'
                }}
            />
            <CardContent>
                <Typography variant="h6" align="center">{category.name}</Typography>
            </CardContent>
        </Card>
    );
}

export default CategoryCard;
