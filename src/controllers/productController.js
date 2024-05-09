// src/controllers/productController.js
import API from '../services/api';

export const getAllProducts = async () => {
    return [
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, image: '/assets/images/product1.jpg' },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 15, image: '/assets/images/product2.jpg' },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 20, image: '/assets/images/product3.jpg' }
    ];
};
