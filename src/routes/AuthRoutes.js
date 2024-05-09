// src/routes/AuthRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../views/Login';
import Signup from '../views/Signup';

function AuthRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default AuthRoutes;
