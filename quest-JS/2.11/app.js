/* Задание 11: Сортировка HTML списка Сортировка html списка по алфавиту. Например есть список */
let sortButton = document.querySelector('.sort-btn');
function sort() {
    let flag = true;
    while(flag) {
        flag = false
        let list = document.querySelectorAll("#sort li");
        for (let i = 0; i < list.length - 1; i++) {
            let list = document.querySelectorAll("#sort li");
            if ((list[i].innerHTML) > (list[i + 1].innerHTML)) {
                let el11 = list[i].cloneNode(true);
                let el22 = list[i + 1].cloneNode(true);
                list[i + 1].parentNode.insertBefore(el11, list[i + 1]);
                list[i + 1].parentNode.insertBefore(el11, list[i + 1]);
                list[i].parentNode.insertBefore(el22, list[i]);
                list[i].parentNode.removeChild(list[i]);
                list[i + 1].parentNode.removeChild(list[i + 1]);
                flag = true;
            }
        }
    }

}
sortButton.addEventListener('click', sort);