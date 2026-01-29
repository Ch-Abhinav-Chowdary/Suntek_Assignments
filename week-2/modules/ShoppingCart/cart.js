/* 

ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                          }


*/

import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add to cart
export function addToCart(productId, quantity) {
    const product = getProductById(productId);
    if (!product) {
        return { success: false, message: 'Product not found' };
    }
    if (!checkStock(productId, quantity)) {
        return { success: false, message: 'Insufficient stock' };
    }
    const existingItem = cartItems.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ productId, quantity });
    }

    return { success: true, message: 'Product added to cart' };
}

// Remove from cart
export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.productId !== productId);
}

// Update quantity
export function updateQuantity(productId, newQuantity) {
    const item = cartItems.find(item => item.productId === productId);
    if (!item) {
        return { success: false, message: 'Product not in cart' };
    }
    if (!checkStock(productId, newQuantity)) {
        return { success: false, message: 'Insufficient stock' };
    }
    item.quantity = newQuantity;
    return { success: true, message: 'Quantity updated' };
}

// Get cart items
export function getCartItems() {
    return cartItems.map(item => {
        const product = getProductById(item.productId);
        return {
            ...product,
            quantity: item.quantity
        };
    });
}

// Get cart total
export function getCartTotal() {
    return cartItems.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}

// Clear cart
export function clearCart() {
    cartItems = [];
}