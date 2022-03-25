const fs = require('fs');
const path = require('path')
const dir = '/Users/nhathoang/Documents/BT-JS/Folder/folder-parent'
const getFilesFromDirectory = (directoryPath) => {
    const filesInDirectory = fs.readdirSync(directoryPath);
    const files = filesInDirectory.map((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            return getFilesFromDirectory(filePath);
        } else {
            return filePath;
        }
    });

    // return files.filter((file) => file.length);


};

console.log(getFilesFromDirectory(dir));
