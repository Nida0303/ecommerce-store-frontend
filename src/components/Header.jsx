import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#135D66', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar sx={{ justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography
                    variant="h4"
                    component={Link}
                    to="/"
                    style={{ textDecoration: 'none', color: 'white', fontFamily: 'Varela Round, sans-serif' }}
                >
                    Elara
                </Typography>
                <div>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif',
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/products"
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif',
                        }}
                    >
                        Products
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about"
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif',
                        }}
                    >
                        About
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact"
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif',
                        }}
                    >
                        Contact Us
                    </Button>
                    {user ? (
                        <>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/orders"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Varela Round, sans-serif',
                                }}
                            >
                                My Orders
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleLogout}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Varela Round, sans-serif',
                                }}
                            >
                                Logout
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/cart"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Varela Round, sans-serif',
                                }}
                            >
                                Cart
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/profile"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Varela Round, sans-serif',
                                }}
                            >
                                Profile
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/login"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Varela Round, sans-serif',
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/signup"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Varela Round, sans-serif',
                                }}
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
