// src/views/Home.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../controllers/productController';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>Our Products</Typography>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
