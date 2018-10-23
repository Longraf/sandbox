/* Задание 3: Создать lightbox
Создать лайтбокс с возможностью перехода от одного изображения к другому. По аналогии с http://lokeshdhakar.com/projects/lightbox2/ */

let box = document.querySelector("#lightbox");
let imgBox = document.querySelectorAll(".min-image")
let closeImg = document.createElement("a");
closeImg.setAttribute("class", "close");
closeImg.setAttribute("href", "#");
closeImg.innerHTML = "Закрыть";

let divOrig = document.createElement("div");
divOrig.setAttribute("class", "div-orig");
let divImg = document.createElement("div");
divImg.setAttribute("class", "div-img");
let origImg = document.createElement("img");
origImg.setAttribute("class", "orig-image");
let prev = document.createElement("a");
prev.setAttribute("class", "prev");
prev.innerHTML = "&lt"
let next = document.createElement("a");
next.setAttribute("class", "next");
next.innerHTML = "&gt";

let sumImg = document.querySelectorAll(".min-image").length;
console.log(sumImg);
divOrig.appendChild(prev);
divOrig.appendChild(divImg).appendChild(origImg);
divImg.appendChild(closeImg);
divOrig.appendChild(next);

let some = function() {
    let src = this.getAttribute("src");
    let alt = this.getAttribute("alt");

    src = src.replace("min-","");
    origImg.setAttribute("src", src);
    origImg.setAttribute("alt", alt);
    console.log(src);
    console.log(this);
    document.body.insertBefore(divOrig, box);
}
for (let i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener("click", some);
}

let deleteImg = function(){
    divOrig.remove();
}
let turnPrev = function() {

    let image = document.querySelector(".orig-image");
    let imageAttribute = image.getAttribute(`alt`);
    if (imageAttribute < 2){return}
    image.setAttribute("alt", imageAttribute - 1)
    let srcReplace = image.getAttribute("src").replace(imageAttribute, imageAttribute-1);
    image.setAttribute("src", srcReplace);
}
let turnNext = function() {
    let image = document.querySelector(".orig-image");
    let imageAttribute = image.getAttribute(`alt`);
    if (imageAttribute > imgBox.length-1){return}
    image.setAttribute("alt", Number(imageAttribute) + 1)
    let srcReplace = image.getAttribute("src").replace(imageAttribute, Number(imageAttribute) + 1);
    image.setAttribute("src", srcReplace);
}
origImg.addEventListener("click", deleteImg);
closeImg.addEventListener("click", deleteImg);
prev.addEventListener("click", turnPrev);
next.addEventListener("click", turnNext);