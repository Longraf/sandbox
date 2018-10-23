/* Задание 1: Создание виджета опроса на JavaScript https://www.youtube.com/watch?v=WBl-8wT8TDU
Первое задание сразу охватывает две больших темы: DOM и события в DOM.
Вам нужно написать скрипт, который добавляет опросы как в ВК (зайдите к себе на стену и попробуйте добавить опрос):*/
function addPoll(){
    let divForm = document.querySelector("#divForm");
    let divTheme = document.createElement("div");
    divTheme.setAttribute("class", "divTheme");

    let inputTheme = document.createElement("input");
    inputTheme.setAttribute("type", "text");
    inputTheme.setAttribute("class", "input");
    inputTheme.setAttribute("id", "inputTheme");
//        inputTheme.setAttribute("value", "");

    let h3theme = document.createElement("h3");
    h3theme.innerHTML = "Тема опроса";
    divTheme.appendChild(h3theme);
    divTheme.appendChild(inputTheme);
    divForm.appendChild(divTheme);

    let h3 = document.createElement("h3");
    h3.innerHTML = "Варианты ответа"
    divForm.appendChild(h3);

    let divCreateInput = document.createElement("div");
    divCreateInput.setAttribute("class", "divInput");

    let createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("name", "input");
    createInput.setAttribute("class", "input radio");

    let createSpan = document.createElement("span");
    createSpan.innerHTML = "X"
    createSpan.setAttribute("class", "xspan");
    createSpan.setAttribute("onclick", "return removeInput(this)");
    divCreateInput.appendChild(createInput);
    divCreateInput.appendChild(createSpan);
    divForm.appendChild(divCreateInput);

    let createDivInput_0 = document.createElement("div");
    createDivInput_0.setAttribute("type", "text");
    createDivInput_0.setAttribute("id", "divInput_0");

    let createInput2 = document.createElement("input")
    createInput2.setAttribute("class", "input");
    createInput2.setAttribute("id", "input_0");
    createInput2.setAttribute("placeholder", "Добавить вариант");
    createInput2.setAttribute("onfocus", "addInput()");
    createDivInput_0.appendChild(createInput2);
    divForm.appendChild(createDivInput_0);

    let createButton = document.createElement("input");
    createButton.setAttribute("type", "button");
    createButton.setAttribute("value", "Отправить");
    createButton.setAttribute("onclick", "addRadio()");
    divForm.appendChild(createButton);

    let divQuote = document.createElement("div");
    divQuote.setAttribute("id", "quote");
    divForm.appendChild(divQuote);
}

function addInput() {
    let divInput = document.querySelector("#divForm .divInput").cloneNode(true);
    divInput.querySelector("input").value = "";
    let input = document.createElement("input");
    let input_0  = document.querySelector("#input_0");
    let divInput_0 = document.querySelector("#divInput_0")
    document.querySelector("#divForm").insertBefore(divInput, divInput_0);
    let inputLast = document.querySelectorAll(".input");
    inputLast[inputLast.length-2].focus();
}

function removeInput(elem ) {
    let it = document.querySelectorAll(".radio");
    if (it.length > 1) {
        elem.parentNode.remove();
    }
}

function addRadio(){
    let inputs      = document.querySelectorAll("#divForm .radio");
    let theme       = document.createElement("h3");
    let quote       = document.querySelector("#quote");
    let paragraf;
    console.log(inputs);
    theme.innerHTML = document.querySelector(".divTheme #inputTheme").value;
    quote.appendChild(theme);

    for (let i = 0; i < inputs.length; i++){
        textSpan     = document.createElement("span");
        textSpan.innerHTML = inputs[i].value;
        input        = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "radio");
        quote.appendChild(input);
        quote.appendChild(textSpan);
        let textbr = document.createElement("br");
        quote.appendChild(textbr);
    }
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Ответить");
    quote.appendChild(button);
}

