// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';
import ProductRoutes from "./ProductRoutes";

function AppRoutes() {
    return (
        <Router>
            <HomeRoutes />
            <AuthRoutes />
            <ProductRoutes />
        </Router>
    );
}

export default AppRoutes;
