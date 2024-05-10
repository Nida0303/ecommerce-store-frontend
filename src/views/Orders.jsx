import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllUserOrders } from '../services/api';

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllUserOrders()
            .then(setOrders)
            .catch((error) => console.error('Error fetching orders:', error));
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Box mt={5} mb={5} textAlign="center">
                    <Typography variant="h3" gutterBottom>
                        My Orders
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Review your previous orders.
                    </Typography>
                </Box>
                <Grid container spacing={3} justifyContent="center">
                    {orders.length ? (
                        orders.map((order) => (
                            <Grid item xs={12} sm={6} md={4} key={order.id} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ maxWidth: '400px' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">Order #{order.id}</Typography>
                                        <Typography variant="body2" color="text.secondary">Total: ${order.total}</Typography>
                                        <Typography variant="body2" color="text.secondary">Status: {order.status}</Typography>
                                        <Typography variant="body2" color="text.secondary">Placed on: {new Date(order.created_at).toLocaleDateString()}</Typography>
                                        <Typography variant="h6" mt={2}>Items:</Typography>
                                        <ul>
                                            {order.order_items.map((item) => (
                                                <li key={item.id}>
                                                    {item.product.name} - {item.quantity} pcs @ ${item.price}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" textAlign="center" color="textSecondary">
                            You have no previous orders.
                        </Typography>
                    )}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default Orders;
