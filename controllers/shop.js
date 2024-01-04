import Product from '../models/product.js';

const getShop = (req, res, next) => {
    const renderShop = (products) => res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });

    Product.fetchAll(renderShop);
};

// below JSDoc comment enables intelisense for the handler
/** @type {import("express").RequestHandler} */
const getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};

const getProductById = (req, res, next) => {
    // Express already provides params parameter in req object
    const productId = req.params.id;

    const renderProductDetails = product => res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products',
    });

    Product.findById(productId, renderProductDetails);
};

const getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

const getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

const getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};

export {
    getShop,
    getProducts,
    getProductById,
    getIndex,
    getCart,
    getOrders,
    getCheckout,
}