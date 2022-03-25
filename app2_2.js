const fs = require('fs');
const path = require('path')
const dir = '/Users/nhathoang/Documents/BT-JS/Folder/folder-parent'
var extention = '.txt'
var result = []
const getFilesFromDirectory = (directoryPath) => {
    const filesInDirectory = fs.readdirSync(directoryPath);
    for (var i = 0; i < filesInDirectory.length; i++) {
        var filePath = path.join(directoryPath, filesInDirectory[i]);
        var stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
             getFilesFromDirectory(filePath);
        } else {
            var reg_txt = /^.*\.(txt)$/.exec(filePath)
            if (reg_txt != null) {
                var data = fs.readFileSync(filePath, {encoding: 'utf8', flags: 'r'})
                result.push(data)
            }


        }

        // return files.filter((file) => file.length);
    };

    console.log(result)
};

getFilesFromDirectory(dir)
