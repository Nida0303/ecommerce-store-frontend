// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';
import ProductRoutes from './ProductRoutes';
import AboutRoutes from './AboutRoutes';
import ContactRoutes from './ContactRoutes';
import CategoriesRoutes from './CategoriesRoutes';
import {AuthProvider} from "../context/AuthContext";

function AppRoutes() {
    return (
        <AuthProvider>
            <Router>
                <HomeRoutes />
                <AuthRoutes />
                <ProductRoutes />
                <AboutRoutes />
                <ContactRoutes />
                <CategoriesRoutes />
            </Router>
        </AuthProvider>
);
}

export default AppRoutes;
