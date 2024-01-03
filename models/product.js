import { openProductsFile, createFileWithProduct, updateFileWithProduct } from '../util/files.js';



class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save = () => openProductsFile(
        err => createFileWithProduct(this),
        fileContent => updateFileWithProduct(fileContent, this)
    );

    static fetchAll = (callback) => {
        openProductsFile(
            err => callback([]),
            fileContent => callback(JSON.parse(fileContent)),
        )
    };
}

export default Product;