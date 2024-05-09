// src/routes/ProductRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from '../views/ProductDetails';

function ProductRoutes() {
    return (
        <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    );
}

export default ProductRoutes;
