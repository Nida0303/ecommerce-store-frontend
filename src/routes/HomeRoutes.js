// src/routes/HomeRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';

function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default HomeRoutes;
