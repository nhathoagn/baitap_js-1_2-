const fs = require('fs');
const path = require('path')
const dir = '/Users/nhathoang/Documents/BT-JS/Folder/folder-parent'
var extention = '.txt'
var  getFilesFromDirectory = (directoryPath) => {
    var filesInDirectory = fs.readdirSync(directoryPath);
        var files = filesInDirectory.map((file) => {
                var filePath = path.join(directoryPath, file);
                var stats = fs.statSync(filePath);
                if (stats.isDirectory()) {
                    return getFilesFromDirectory(filePath);
                } else {
                    // return filePath;
                    var reg_txt = /^.*\.(txt)$/.exec(filePath)
                    if (reg_txt != null){
                        var data = fs.readFileSync(filePath, {encoding: 'utf8', flags: 'r'})
                        console.log(data)
                    }
                    // var data = fs.readFileSync(filePath, {encoding: 'utf8', flags: 'r'})
                    // console.log(data)
                }
        });
    // return files.filter((file) => file.length);
};
getFilesFromDirectory(dir)
