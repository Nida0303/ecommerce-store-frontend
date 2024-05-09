// src/App.jsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routes/AppRoutes';
import theme from './theme';
import './styles/index.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <AppRoutes />
            </div>
        </ThemeProvider>
    );
}

export default App;
