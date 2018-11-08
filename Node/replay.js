// const fs = require('fs');
// fs.readFile('example_log.txt',
//     (err, text) => {
//         let arr = text.toString().split('\n');
//         let rezult = [];
//         arr.forEach(item => rezult.push(item.split(' ')[1]));
//         console.log(rezult);
//     }
// );

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Express web app on localhost:3000');
});