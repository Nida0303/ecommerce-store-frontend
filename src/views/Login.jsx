// src/views/Login.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        // Perform login action here
    };

    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <Box mt={5} sx={{
                    border: '1px solid #999',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    height: '400px'
                }}>
                    <Typography variant="h4" gutterBottom fontWeight={"bold"}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ marginTop: '40px' }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '40px', fontWeight:"bold" }}
                        >
                            Login
                        </Button>
                    </form>
                    <Box mt={2}>
                        <Typography variant="body2" component="p">
                            Don't have an account?{' '}
                            <Link component="span" underline="hover" to={'/signup'}>
                                SignUp
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default Login;
