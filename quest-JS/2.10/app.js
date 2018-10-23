/* Задание 10: ToDo лист
Создать скрипт учитывающий список дел (todo лист). Дела можно добавлять, удалять, помечать выполненными или снимать отметку о выполнении. */
let list   = document.querySelector("#list");
let button = document.querySelector("#button");
let input  = document.querySelector("#input");
button.onclick = addList;
function lineThrough(){
    this.classList.toggle("line-through");
}
function addList(){
    function deleteList(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
    if(input.value.trim() == "") {
        input.value = "";
        return
    }
    let newList   = document.createElement("li");
    let newSpan   = document.createElement("span");
    newSpan.innerHTML = input.value;
    newSpan.addEventListener("click", lineThrough);

    let deleterLi = document.createElement("span");
    deleterLi.innerHTML = "Удалить"
    deleterLi.classList.add("delete-li");
    deleterLi.addEventListener("click", deleteList);

    newList.appendChild(newSpan);
    newList.appendChild(deleterLi);
    list.appendChild(newList);

    input.value = "";
    input.focus();
}
