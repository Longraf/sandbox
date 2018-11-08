let fs = require('fs');
const prog6 = function bar(){
    fs.readdir(process.argv[2], function (err, arrItems) {
        if (err) throw err;
        for (let item of arrItems){
            if (item.indexOf(`.${process.argv[3]}`) != -1){
                console.log(item);
            }
        }
    });
};
 module.exports = prog6;

//
// const fs = require('fs');
// const path = require('path');
//
// const myModule = (dir, ext, cb) => {
//     fs.readdir(dir, (err, list) => {
//         return err ? cb(err) : cb(null, list.filter(file =>
//             path.extname(file) === `.${ext}`));
//     });
// };
//
// module.exports = myModule;