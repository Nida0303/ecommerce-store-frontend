// src/routes/ProductRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Orders from "../views/Orders";

function ProductRoutes() {
    return (
        <Routes>
            <Route path="/orders" element={<Orders />} />
        </Routes>
    );
}

export default ProductRoutes;
