import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ReviewsSection from '../components/ReviewsSection';
import CategoryCard from '../components/CategoryCard';
import { getAllProducts, getAllCategories } from '../services/api';

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch((error) => console.error('Error fetching products:', error));

        getAllCategories()
            .then((data) => {
                console.log('Fetched categories:', data);
                setCategories(data);
            })
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    const featuredProducts = products.slice(0, 3); // Take the first three as featured products
    const newArrivals = products.slice(3); // Rest as new arrivals

    return (
        <>
            <Header />
            {/* Welcome Section */}
            <Box component="section" sx={{ padding: '60px 0', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>Welcome to Elara</Typography>
                <Typography variant="body1" paragraph>
                    Discover the best of fashion at Elara. We offer a range of high-quality products to suit your needs.
                </Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
            </Box>

            {/* Featured Products Section */}
            <Box component="section" sx={{ padding: '60px 0' }}>
                <Typography variant="h4" gutterBottom textAlign="center">Featured Products</Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                <Grid container spacing={3} justifyContent="center" padding={'30px'}>
                    {featuredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* New Arrivals Section */}
            <Box component="section" sx={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
                <Typography variant="h4" gutterBottom textAlign="center">New Arrivals</Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                <Grid container spacing={3} justifyContent="center" padding={'30px'}>
                    {newArrivals.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Shop by Categories Section */}
            <Box component="section" sx={{ padding: '60px 0', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Shop by Categories</Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                <Grid container spacing={3} justifyContent="center" padding={'30px'}>
                    {categories.map((category) => (
                        <Grid item xs={12} sm={6} md={4} key={category.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CategoryCard category={category} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Reviews Section */}
            <Box component="section" sx={{ padding: '60px 0', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Latest Reviews</Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                <ReviewsSection />
            </Box>

            <Footer />
        </>
    );
}

export default Home;
