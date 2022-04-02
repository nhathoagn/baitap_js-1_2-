const fs = require('fs');
const path = require('path')

let result = []

function loop_dir(dir) {
    fs.readdirSync(dir).map((file) => {
        const filePath = path.join(dir, file)
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            loop_dir(filePath);
        } else {
            result.push(readFile(filePath))
        }
    });
}

function readFile(filePath) {
    let reg_txt = /^.*\.(txt)$/.exec(filePath);
    if (reg_txt != null) {
        return fs.readFileSync(filePath, {encoding: 'utf8', flags: 'r'})
    }
}

function main() {
    const dir = '/Users/nhathoang/Documents/Javascript/BT2/baitap_js-1_2-/folder-parent/'
    loop_dir(dir)
    console.log(result)
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

main()
// console.log(result)

