const fs = require('fs');
const path = require('path')
const dir = '/Users/nhathoang/Documents/Javascript/BT2/baitap_js-1_2-/folder-parent/'
const readFiles = (dirname) => {

    const readDirPr = new Promise( (resolve, reject) => {
        fs.readdir(dirname,
            (err, filenames) => (err) ? reject(err) : resolve(filenames))
    });

    return readDirPr.then( filenames => Promise.all(filenames.map((filename) => {
        return new Promise ( (resolve, reject) => {
            fs.readFile(dirname + filename, 'utf-8',
                (err, content) => (err) ? reject(err) : resolve(content));
        })
    })).catch( error => Promise.reject(error)))
};

readFiles(dir)
    .then( allContents => {

        // handle success treatment

    }, error => console.log(error));