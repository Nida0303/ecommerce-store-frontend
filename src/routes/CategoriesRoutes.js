// src/routes/CategoriesRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPage from '../views/CategoriesPage';

function CategoriesRoutes() {
    return (
        <Routes>
            <Route path="/categories/:category" element={<CategoriesPage />} />
        </Routes>
    );
}

export default CategoriesRoutes;
