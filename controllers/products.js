import Product from "../models/product.js";

const renderShop = (req, res, next) => {
    const products = Product.fetchAll();

    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};

const renderAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

const addProduct = (req, res, next) => {
    const newProduct = new Product(req.body.title);
    newProduct.save();

    res.redirect('/');
}

export {
    renderShop,
    renderAddProduct,
    addProduct
}