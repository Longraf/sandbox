/* Задание 7: Построение дерева чекбоксов */
function setChecked(){
    let that = this;
    function set(boolean) {
        let check = that.parentNode.querySelectorAll(`input[type="checkbox"]`);
        for (i = 1; i < check.length; i++) {
            check[i].checked = boolean;
        }
    }
    if (this.type == 'checkbox' && this.checked == true){
        set(true);
    }
    if (this.type == 'checkbox' && this.checked == false){
        set(false);
    }

}
let typeCheckbox = document.querySelectorAll(`input[type="checkbox"]`);
for (i = 0; i < typeCheckbox.length; i++){
    typeCheckbox[i].addEventListener("click", setChecked);
}