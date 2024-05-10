// src/routes/AboutRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../views/About';

function AboutRoutes() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AboutRoutes;
