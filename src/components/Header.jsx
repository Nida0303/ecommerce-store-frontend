// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
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
                        sx = {{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif'
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about"
                        sx = {{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif'
                        }}
                    >
                        About
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact"
                        sx = {{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif'
                        }}
                    >
                        Contact Us
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/login"
                        sx = {{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Varela Round, sans-serif'
                        }}
                    >
                        Login
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
