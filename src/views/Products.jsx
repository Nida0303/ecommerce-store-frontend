import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/api';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <>
            <Header />
            <Box component="section" sx={{ padding: '60px 0' }}>
                <Typography variant="h4" gutterBottom textAlign="center">All Products</Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                <Grid container spacing={3} justifyContent="center" padding={'30px'}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default Products;
