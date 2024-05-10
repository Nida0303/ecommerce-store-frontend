import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Auth context
const AuthContext = createContext();

// Export a custom hook to access AuthContext values
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [cart, setCart] = useState([]);

    // Load user data and cart from local storage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        const storedCart = localStorage.getItem('cart');

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }

        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Function to handle user login
    const login = (user, token) => {
        setUser(user);
        setToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    };

    // Function to handle user logout
    const logout = () => {
        setUser(null);
        setToken(null);
        setCart([]);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
    };

    // Function to add item to cart
    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            let updatedCart;
            if (existingItem) {
                updatedCart = prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                updatedCart = [...prevCart, { ...product, quantity }];
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Function to remove item from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </AuthContext.Provider>
    );
};
