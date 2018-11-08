const prog6 = require('./program6module');

prog6(process.argv[2], process.argv[3], (err, list) => {
    return err ? console.error('There is error - ', err) : console.log(list);
});