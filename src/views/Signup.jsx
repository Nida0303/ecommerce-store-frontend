import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        // Perform signup action here
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
                    <Typography variant="h4" gutterBottom fontWeight={"bold"}>Sign Up</Typography>
                    <form onSubmit={handleSignup}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            style={{ marginTop: '20px', fontWeight: "bold" }}
                        >
                            Sign Up
                        </Button>
                    </form>
                    <Box mt={2}>
                        <Typography variant="body2" component="p">
                            Already have an account?{' '}
                            <Link component="span" underline="hover" to={"/login"}>
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default Signup;
