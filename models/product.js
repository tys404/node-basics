import { openProductsFile, createFileWithProduct, updateFileWithProduct } from '../util/files.js';



class Product {
    constructor(title) {
        this.title = title;
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