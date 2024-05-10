import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';
import ProductRoutes from './ProductRoutes';
import AboutRoutes from './AboutRoutes';
import ContactRoutes from './ContactRoutes';
import CategoriesRoutes from './CategoriesRoutes';
import {AuthProvider} from "../context/AuthContext";
import ProfileRoute from "./ProfileRoute";
import CartRoute from "./CartRoute";
import Orders from "../views/Orders";

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
                <ProfileRoute />
                <CartRoute />
                <Orders />
            </Router>
        </AuthProvider>
);
}

export default AppRoutes;
