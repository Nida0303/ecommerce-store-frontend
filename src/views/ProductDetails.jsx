import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductById } from '../services/api';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(id).then(setProduct);
    }, [id]);

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of ${product?.name} to cart`);
        // Implement cart logic here
    };

    if (!product) {
        return <Typography variant="h5" textAlign="center" mt={5}>Loading...</Typography>;
    }

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} mt={5}>
                    <Grid item xs={12} md={6}>
                        <img
                            src={process.env.PUBLIC_URL + product.image}
                            alt={product.name}
                            style={{ width: '100%', borderRadius: '10px', marginRight: '20px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">{product.name}</Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom>${product.price}</Typography>
                        <Typography variant="body1" paragraph>{product.description}</Typography>
                        <Box display="flex" alignItems="center" mb={2}>
                            <TextField
                                label="Quantity"
                                type="number"
                                InputProps={{ inputProps: { min: 1 } }}
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                                variant="outlined"
                                size="small"
                                style={{ marginRight: '20px', width: '100px' }}
                            />
                            <Button variant="contained" color="primary" onClick={handleAddToCart}>Add to Cart</Button>
                        </Box>
                        <Button variant="outlined" onClick={() => navigate(-1)}>Go Back</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default ProductDetails;
