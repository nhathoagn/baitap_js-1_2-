const fs = require('fs');
const path = require('path')
const dir = '/Users/nhathoang/Documents/Javascript/BT2/baitap_js-1_2-/folder-parent'
var result = []
const getFilesFromDirectory = (directoryPath) => {
    setTimeout(() => {
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
    },1000);

};

getFilesFromDirectory(dir);

console.log(result)