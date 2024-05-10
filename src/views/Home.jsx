// src/views/Home.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button, TextField, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ReviewsSection from '../components/ReviewsSection';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../controllers/productController';
import '../styles/index.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const handleNewsletterSubscription = (e) => {
        e.preventDefault();
        console.log(`Subscribed to the newsletter with email: ${newsletterEmail}`);
    };

    const featuredProducts = products.slice(0, 3); // Take the first three as featured products
    const newArrivals = products.slice(3); // Rest as new arrivals

    const categories = [
        { name: 'Footwear', image: '/assets/images/footwear.jpg' },
        { name: 'Cosmetics', image: '/assets/images/cosmetics.jpg' },
        { name: 'Accessories', image: '/assets/images/accessories.jpg' },
        { name: 'Clothing', image: '/assets/images/clothing.jpg' },
        { name: 'Bags', image: '/assets/images/bags.jpg' },
        { name: 'Jewelry', image: '/assets/images/jewelry.jpg' }
    ];

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
                    {categories.map((category, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                onClick={() => navigate(`/categories/${category.name.toLowerCase()}`)}
                                style={{
                                    maxWidth: '300px',
                                    borderRadius: '16px',
                                    padding: '15px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    backgroundColor: '#e0f7fa'
                                }}
                            >
                                <CardContent>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                    />
                                    <Typography variant="h6" align="center" style={{ marginTop: '10px' }}>{category.name}</Typography>
                                </CardContent>
                            </Card>
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

            {/* Newsletter Subscription Section */}
            <Box component="section" sx={{ padding: '60px 0', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Stay Updated</Typography>
                <Box sx={{ maxWidth: '80px', margin: '10px auto', height: '5px', borderRadius: '5px', backgroundColor: '#135D66' }}></Box>
                <Typography variant="body1" paragraph>
                    Subscribe to our newsletter for the latest updates and offers.
                </Typography>
                <form onSubmit={handleNewsletterSubscription}>
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        style={{ maxWidth: '400px', margin: '0 auto' }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                    >
                        Subscribe
                    </Button>
                </form>
            </Box>
            <Footer />
        </>
    );
}

export default Home;
