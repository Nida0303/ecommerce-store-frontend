import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoutes";
import Profile from "../components/Profile";

function ProductRoutes() {
    return (
        <Routes>
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
    );
}

export default ProductRoutes;
