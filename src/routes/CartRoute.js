import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from "../views/Cart";

function ProductRoutes() {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}

export default ProductRoutes;
