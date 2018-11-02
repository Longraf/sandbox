// загружаем модуль filesystem(fs)
var fs = require('fs');
 
// считываем содержание файла в память
fs.readFile('example_log.txt', function (err, logData) {
 
    // Если возникла ошибка, мы кидаем исключение
	// и программа заканчивается
    if (err) throw err;
 
    // logData имеет тип Buffer, конвертируем в строку
    var text = logData.toString();
 
var results = {};
 
// Разбиваем текст на массив из строчек
var lines = text.split('\n');
 
lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);
 
if(!results[letter]) {
      results[letter] = 0;
}
 
results[letter] += parseInt(count);
});
 
console.log(results);
// { A: 2, B: 14, C: 6 }
});