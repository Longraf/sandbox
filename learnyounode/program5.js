var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function (err, Data) {
    if (err) throw err;

    var contents = Data.toString();
    console.log(contents.split('\n').length-1);
});

