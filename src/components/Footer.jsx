// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) => theme.palette.grey[200],
                padding: '20px 0',
                marginTop: '20px'
            }}
            style={{ fontFamily: 'Varela Round, sans-serif' }}
        >
            <Typography variant="body1" align="center">
                © {new Date().getFullYear()} eCommerce Store. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
