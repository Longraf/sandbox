/* Задание 5: Фильтрация строк таблицы
Создать форму и таблицу. У формы должно быть столько же полей, сколько колонок у таблицы. Фильтровать строки таблицы по данным, вводимым в форму.
Сортировка должна вестись одновременно по нескольким полям: при вводе в два поля, строка должна содержать результат соответствующий двум условиям*/
let form = document.querySelector("#form");
form.onkeyup = function sort(){ // Сортирует таблицу по одноимённым полям формы
    let stroke = document.querySelectorAll(".tableRow");
    console.log(stroke);

    function ifInput (idForm, tdClass, iteration){
        let formSelector = document.querySelector(`#${idForm}`).value;
        let tableSelector = document.querySelectorAll(`.${tdClass}`)[iteration].textContent;
//        console.log(tableSelector);
        if (tableSelector.indexOf(formSelector) == -1 && formSelector != ""){
            stroke[iteration].style.display = "none";
        }
    }

    for (let i = 0; i < stroke.length; i++) {
        stroke[i].style.display = "";
        if (!ifInput(`name`, `tableName`, i));
        if (ifInput(`age`, `tableAge`, i));
        if (ifInput(`height`, `tableHeight`, i));
        if (ifInput(`hobby`, `tableHobby`, i));
        if (ifInput(`sex`, `tableSex`, i));
    }
}

//function clear() { // Очищает форму и возвращает таблицу без фильтрации
//    let input = document.querySelectorAll(`input[type=text]`)
//    for (i = 0; i < input.length; i++)
//    input[i].value = "";
//    form.onkeyup = sort();
//}
//
//buttonClear.addEventListener("click", clear);