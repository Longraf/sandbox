/* Задание 2: Cоздать плагин автотегов на JavaScript
Создать плагин автотегов, например как тут (но без jQuery): http://www.jqueryscript.net/demo/Colorfy-Tags-Mentions-In-An-Editable-Content-jQuery-autotag/
реализовать скрипт, который выполняет ту же работу можно писать текст в одном textarea, а результат форматировать в другом HTML элементе
виджет должен размещаться в <div class=»specEditor»></div> все стили должны указываться относительно указанного класса */

let tag = function (){
    let textarea = document.querySelector("#textarea");
    let rezult   = document.querySelector("#rezult");
    let textareaValue ;
    let array ;
    rezult.innerHTML = "";
    textareaValue = document.querySelector("#textarea").value;
    array = textareaValue.split(/[ ]/);

    for (i in array) {
        if (array[i].charAt(0) == `@`) {
            var a = document.createElement(`a`);
            a.setAttribute(`class`, `greenTag`);
            console.log(array[i].slice(1));
            var word = "https://vk.com/${array[i].slice(1)";
            a.setAttribute(`href`, `https://vk.com/${array[i].slice(1)}`);
            a.innerHTML = array[i];
            rezult.appendChild(a);
            rezult.innerHTML = rezult.innerHTML + ` `;
        } else if (array[i].charAt(0) == `#`) {
            var a = document.createElement(`a`);
            a.setAttribute(`class`, `redTag`);
            a.setAttribute(`href`, `https://vk.com/feed?section=search&q=%23${array[i].slice(1)}`);
            a.innerHTML = array[i] + ``;
            rezult.appendChild(a);
            rezult.innerHTML = rezult.innerHTML + ` `;
        } else {
            rezult.innerHTML = rezult.innerHTML + array[i] + ` `;
        }
    }
}
textarea.addEventListener("keyup", tag);