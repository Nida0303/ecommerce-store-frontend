import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Ensure cross-origin cookies are sent
});

const authHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getAllProducts = async () => {
    try {
        const response = await apiClient.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const getProductById = async (id) => {
    try {
        const response = await apiClient.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
};

export const getProductsByCategory = async (categoryId) => {
    try {
        const response = await apiClient.get(`/categories/${categoryId}/products`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products for category ${categoryId}:`, error);
        return [];
    }
};

export const getAllCategories = async () => {
    try {
        const response = await apiClient.get('/categories');
        return response.data || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const signupUser = async (name, email, password) => {
    try {
        const response = await apiClient.post('/register', {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post('/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const createOrder = async (cartItems, total) => {
    try {
        const response = await apiClient.post('/orders', { cartItems, total }, { headers: authHeader() });
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const getAllUserOrders = async () => {
    try {
        const response = await apiClient.get('/orders', { headers: authHeader() });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
};
