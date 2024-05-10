import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Box, Button, Card, CardContent, CardMedia, TextField } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../services/api';

function Cart() {
    const { user, cart, removeFromCart, clearCart } = useAuth();
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        // Initialize quantities based on the current cart items
        const initialQuantities = cart.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cart]);

    const handleQuantityChange = (id, newQuantity) => {
        setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * (quantities[item.id] || item.quantity), 0).toFixed(2);
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
        setQuantities((prev) => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
        });
    };

    const handleCheckout = async () => {
        const cartItems = cart.map((item) => ({
            id: item.id,
            quantity: quantities[item.id] || item.quantity,
            price: item.price,
        }));

        const total = calculateTotal();

        try {
            const response = await createOrder(cartItems, total);
            console.log('Order created:', response);
            clearCart();
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('Checkout failed!');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h3" gutterBottom>
                        {user ? `${user.name}'s Cart` : 'Your Cart'}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Review your selected items before proceeding to checkout.
                    </Typography>
                </Box>
                <Grid container spacing={3} justifyContent="center">
                    {cart.length ? (
                        <>
                            {cart.map((item) => (
                                <Grid item xs={12} sm={6} md={4} key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Card sx={{ maxWidth: '400px' }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={process.env.PUBLIC_URL + item.image}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5">{item.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">Price: ${item.price}</Typography>
                                            <TextField
                                                label="Quantity"
                                                type="number"
                                                InputProps={{ inputProps: { min: 1 } }}
                                                value={quantities[item.id] || item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, Math.max(1, parseInt(e.target.value, 10) || 1))}
                                                variant="outlined"
                                                size="small"
                                                style={{ marginRight: '20px', width: '100px' }}
                                            />
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Remove
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Typography variant="h5">Total: ${calculateTotal()}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleCheckout}
                                    style={{ marginTop: '20px', fontWeight: 'bold' }}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Grid>
                        </>
                    ) : (
                        <Typography variant="h6" textAlign="center" color="textSecondary">
                            Your cart is empty.
                        </Typography>
                    )}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Cart;
