// src/views/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductById } from '../controllers/productController';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(parseInt(id, 10)).then(setProduct);
    }, [id]);

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of ${product.name} to cart`);
        // Implement cart logic here
    };

    if (!product) {
        return (
            <>
                <Header />
                <Container>
                    <Typography variant="h4" mt={5}>Loading...</Typography>
                </Container>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} mt={5}>
                    <Grid item xs={12} md={6}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" marginBottom={'20px'}>{product.name}</Typography>
                        <Typography variant="h6" color="text.secondary" marginBottom={'20px'} gutterBottom>${product.price}</Typography>
                        <Typography variant="body1" marginBottom={'40px'} paragraph>{product.description}</Typography>
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
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default ProductDetails;
