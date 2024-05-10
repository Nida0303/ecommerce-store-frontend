// src/routes/ContactRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../views/Contact';

function ContactRoutes() {
    return (
        <Routes>
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default ContactRoutes;
