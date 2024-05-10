import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
};

export const getProductsByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/${categoryId}/products`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products for category ${categoryId}:`, error);
        return [];
    }
};

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

