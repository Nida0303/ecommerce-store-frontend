import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';

function AppRoutes() {
    return (
        <Router>
            <HomeRoutes />
        </Router>
    );
}

export default AppRoutes;
