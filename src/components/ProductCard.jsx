// src/components/ProductCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <Card sx={{maxWidth: "400px"}}>
            <CardMedia
                component="img"
                height="250"
                image={process.env.PUBLIC_URL + product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Button variant="contained" onClick={() => navigate(`/product/${product.id}`)}>View Details</Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
