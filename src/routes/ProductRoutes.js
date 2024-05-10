// src/routes/ProductRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from '../views/ProductDetails';
import Products from "../views/Products";

function ProductRoutes() {
    return (
        <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
}

export default ProductRoutes;
