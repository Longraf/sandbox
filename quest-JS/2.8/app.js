/* Задание 8: Создание подсказки при поиске
Создать скрипт, который при вводе в input[type=text] выходит результат поиска по массиву с текстовыми элементами. Примечание: визуально это должно выглядеть, как делает Яндекс.*/
console.clear();

let arrWords = ["One", "One two", "One two three", "twoo", "123", "1 One", "0 1 2 3", "7 8 9", "7 seven", "7 9 seven nine", "Jane"];

function find(){
    let input = document.querySelector("#input");
    let ul    = document.querySelector("#ul-list");
    ul.style.display = "block";
    console.log(ul.childNodes.length);
    for (i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].innerHTML.indexOf(input.value) == -1){
            ul.childNodes[i].style.display = "none";
        }   else {
            ul.childNodes[i].style.display = "block";
        }
    }
}


function initialize(){
    let ul    = document.querySelector("#ul-list");
    while(ul.hasChildNodes()){
        ul.removeChild('li');
    }

    for (i = 0; i < arrWords.length; i++) {
        var node = document.createElement("li");
        node.addEventListener("click", function(){
            input.value = this.innerHTML;
            ul.style.display = "none";
        })
        var textnode = document.createTextNode(arrWords[i]);
        node.appendChild(textnode);
        ul.appendChild(node);
    }
}

initialize();