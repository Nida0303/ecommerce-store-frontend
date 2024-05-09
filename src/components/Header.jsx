// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h4"
                    component={Link}
                    to="/"
                    style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontFamily: 'Varela Round, sans-serif' }}
                >
                    Elara
                </Typography>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
