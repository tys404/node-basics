import Product from "../models/product.js";


const renderAdminProducts = (req, res, next) => {
    const renderAdminProducts = (products) => res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    });

    Product.fetchAll(renderAdminProducts);
};

const renderAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

const addProduct = (req, res, next) => {
    const { title, imageUrl, description, price } = req.body;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}

export {
    renderAddProduct,
    renderAdminProducts,
    addProduct
}