/* Задание 4: Добавление строки в таблицу. Создать форму и таблицу. Написать скрипт, добавляющий содержимое формы в таблицу в виде строки
1. Форма добавления должна размещаться над или под таблицей
2. Дизайн строгий минималистический (не нужно добавлять изображения, лишнее CSS-оформление)*/

let submitTR = function() {
    let textInner = document.querySelector("#textInner");
    textInner.value = textInner.value.trim();
    if (textInner.value == "")
        return;
    let table  = document.querySelector("#table");
    let uploadTD = document.createElement("td");
    let uploadTR = document.createElement("tr");
    uploadTD.innerHTML = textInner.value;
    textInner.value = "";
    uploadTR.appendChild(uploadTD);
    table.appendChild(uploadTR);
}
button.addEventListener("click", submitTR);