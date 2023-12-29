const products = [];

class Product {
    constructor(title) {
        this.title = title;
    }

    save = () => products.push(this);

    static fetchAll = () => products;
}

export default Product;