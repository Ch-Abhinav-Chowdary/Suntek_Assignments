/* '
i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            // Find and return product by ID
                          }
                          
                          export function getAllProducts() {
                            // Return all products
                          }
                          
                          export function getProductsByCategory(category) {
                            // Filter products by category
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                          }
                          
                          export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                          }
*/

// Product database (simulated)

const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];


// Get product by Id
export function getProductById(id) {
    return products.find(product => product.id === id);
}

// Get all products
export function getAllProducts() {
    return products;
}

// Get products by category
export function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Search products by name (case-insensitive)
export function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(lowerQuery));
}

// Check if product has enough stock
export function checkStock(productId, quantity) {
    const product = getProductById(productId);
    if (product) {
        return product.stock >= quantity;
    }
    return false;
}

// Reduce product stock after purchase
export function reduceStock(productId, quantity) {
    const product = getProductById(productId);
    if (product && product.stock >= quantity) {
        product.stock -= quantity;
        return true;
    }
    return false;
}