import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getAllCategories, getProductsByCategory } from '../services/api';

function CategoriesPage() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    // Fetch the category details and then fetch the products
    useEffect(() => {

        getAllCategories().then((categories) => {
            // Convert the category to an integer for direct comparison
            const categoryId = parseInt(category, 10);
            const foundCategory = categories.find((cat) => cat.id === categoryId);

            if (foundCategory) {
                setCategoryName(foundCategory.name);

                // Fetch products using the category ID
                getProductsByCategory(foundCategory.id).then((data) => {
                    setProducts(data);
                });
            } else {
                setCategoryName('Unknown Category');
                setProducts([]);
            }
        });
    }, [category]);

    return (
        <>
            <Header />
            <Container>
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h3" gutterBottom>
                        {categoryName} Category
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Explore the best products in the {categoryName.toLowerCase()} category.
                    </Typography>
                </Box>
                <Grid container spacing={3} justifyContent="center">
                    {products.length ? (
                        products.map((product) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={product.id}
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" textAlign="center" color="textSecondary">
                            No products found for {categoryName} category.
                        </Typography>
                    )}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default CategoriesPage;
