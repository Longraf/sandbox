
let myCalc  = document.querySelector('.my-calc');
myCalc.innerHTML = `<div class="input-filed">
     <input class="display-calc" type="text" placeholder="0">
</div>
<div class="keys">
    <div class="key numbers  one">1</div>
    <div class="key numbers  two">2</div>
    <div class="key numbers  three">3</div>
    <div class="key numbers  four">4</div>
    <div class="key numbers  five">5</div>
    <div class="key numbers  six">6</div>
    <div class="key numbers  seven">7</div>
    <div class="key numbers  eight">8</div>
    <div class="key numbers  nine">9</div>
    <div class="key numbers  zero">0</div>
    <div class="key point">C</div>
    <div class="key actions  plus">+</div>
    <div class="key actions  minus">-</div>
    <div class="key actions  multiply">*</div>
    <div class="key actions  split">/</div>
    <div class="key actions  equal">=</div>
</div>`;
let rrr        = /[0-9]/;
let numbers    = myCalc.querySelectorAll('.numbers');
let actions    = myCalc.querySelectorAll('.actions');
let inputArea  = myCalc.querySelector('.display-calc');
let keys       = myCalc.querySelectorAll('.key');
let action     = null;
let firstValue = null;
console.log(keys);
let calculate = (target) => {
    let value =target.currentTarget.innerHTML;
    switch (value) {
        case '0': pushNumber(value); break;
        case '1': pushNumber(value); break;
        case '2': pushNumber(value); break;
        case '3': pushNumber(value); break;
        case '4': pushNumber(value); break;
        case '5': pushNumber(value); break;
        case '6': pushNumber(value); break;
        case '7': pushNumber(value); break;
        case '8': pushNumber(value); break;
        case '9': pushNumber(value); break;
        case '+': pushAction(value); break;
        case '-': pushAction(value); break;
        case '*': pushAction(value); break;
        case '/': pushAction(value); break;
        case 'C': clearArea(value); break;
        case '=':
            rezult(value);
            break;
        default: action = value;
    }
};
let pushNumber = val=>{
    inputArea.value = inputArea.value + val;
};
let pushAction = val=>{
    action = val;
    firstValue = inputArea.value;
    inputArea.value = '';
};
let clearArea = (val)=>{
    firstValue = inputArea.value;
    inputArea.value = '';
    console.log(firstValue, '<- firstValue');
};
let rezult = ()=>{
    console.log(firstValue, 'firstValue');
    console.log(inputArea.value, "inputArea.value");
    switch (action) {
        case '+': inputArea.value = Number(inputArea.value) + Number(firstValue); break;
        case '-': inputArea.value = Number(firstValue) - Number(inputArea.value); break;
        case '*': inputArea.value = Number(inputArea.value) * Number(firstValue); break;
        case '/': inputArea.value = Number(firstValue) / Number(inputArea.value); break;
    }
};
for (let item of keys){
    item.addEventListener('click', (e)=>{
        calculate(e);
    })
}
