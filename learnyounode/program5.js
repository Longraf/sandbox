let fs = require('fs');
let path = process.argv[2];
let extension = process.argv[3];
fs.readdir(path, function (err, arrItems) {
   if (err) throw err;
    for (let item of arrItems){
        if (item.indexOf(`.${extension}`) != -1){
            console.log(item);
        }
    }
});