// src/controllers/productController.js
export const getAllProducts = async () => {
    return [
        { id: 1, name: 'Nike Soft Joggers', description: 'This is product 1', price: 10, image: '/assets/images/product1.jpg' },
        { id: 2, name: 'Eocjup Cosmetic Pack', description: 'This is product 2', price: 15, image: '/assets/images/product2.jpg' },
        { id: 3, name: 'Converse All Star Shoes', description: 'This is product 3', price: 20, image: '/assets/images/product3.jpg' },
        { id: 4, name: 'Adidas Running Shoes', description: 'This is product 4', price: 25, image: '/assets/images/product1.jpg' },
        { id: 5, name: 'Premium Hair Gel', description: 'This is product 5', price: 30, image: '/assets/images/product2.jpg' },
        { id: 6, name: 'Classic Leather Wallet', description: 'This is product 6', price: 35, image: '/assets/images/product3.jpg' }

    ];
};

export const getProductById = async (id) => {
    const products = await getAllProducts();
    return products.find((product) => product.id === id) || null;
};
