import path from 'path';
import fs from 'fs';

const rootDir = path.dirname(process.cwd()).concat('\\node-basics');

const filePath = path.join(rootDir, 'data', 'products.json');

const openProductsFile = (onError, onOpened) => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            onError(err);
            return;
        }

        onOpened(fileContent);
    });
}

const createFileWithProduct = product => {
    fs.writeFile(filePath, JSON.stringify([product]), (err) => { console.error(err); });
}

const updateFileWithProduct = (fileContent, product) => {
    const updatedContent = [...JSON.parse(fileContent), product];

    fs.writeFile(filePath, JSON.stringify(updatedContent), (err) => { console.error(err); });
}

export {
    rootDir,
    filePath,
    openProductsFile,
    createFileWithProduct,
    updateFileWithProduct,
}