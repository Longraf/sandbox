
class X {
    SetLine(value){ // rewrite data values
        this.Data.Values = value;
    } 
    AddLine(value){
        this.Data.Values.push(value);
    }
    GetValues (value){ // output to console.log
        //console.clear();
        for (let i in this.Data.Values){
            console.log(this.Data.Values[i]);
        }

    }
    _init(){
        let userDataBase = document.querySelector('.userBase');
        let tbody = document.querySelector('.tbody');
        let thead = document.querySelector('.thead');
        for (let theadItem in Object.getOwnPropertyNames(this.Data)) {
            if (theadItem !== 'Values'){
                let td = document.createElement('td');
                td.innerHTML = theadItem;
                document.querySelector('.userBase .thead').appendChild(td);
            }

        }

        for (let valuesItem = 0; valuesItem < this.Data.Values.length; valuesItem++) {
            let tr = document.createElement('tr');
            for (let i = 0; i < this.Data.Values[valuesItem].length; i++) {
                let td = document.createElement('td');
                td.innerHTML = this.Data.Values[valuesItem][i];
                tr.appendChild(td);
            }
            document.querySelector('.userBase tbody').appendChild(tr);
        }
        document.querySelector('.getValues').addEventListener('click', this.GetValues);
        document.querySelector('.addValues').addEventListener('click', entryField);
    }

   // _RowLen: null
    //_Temp:[]
    constructor(DOMTable){
        this.Data= {
            Name: 'Имя',
            LastName: 'Фамилия',
            Age: '1',
            Rating: 'rate',
            Values: [
                ['Ivan', 'ivanov', 99, 0],
                ['Oleg', 'ivanov', 1, 10],
                ['Lena', 'ivanov', 20, 0]
            ],


        }
        this._init()
    }
    constructor55({
        Target= null,
        Min= 0,
        Max=100,
        Values
                  }){
        this.Data= {
            Name: 'Имя',
            LastName: 'Фамилия',
            Age: '1',
            Rating: 'rate',
            Values: [
                ['Ivan', 'ivanov', 99, 0],
                ['Oleg', 'ivanov', 1, 10],
                ['Lena', 'ivanov', 20, 0]
            ],


        }
        this._init()
    }
}
const newinstance = new X(document.querySelector('.userBase'));

// document.querySelector('.getValues').addEventListener('click', X.GetValues);
// document.querySelector('.addValues').addEventListener('click', entryField);





function addInputsFields() {
    if (document.querySelectorAll('.userBase input').length >= X.Data.Values[0].length) {
        return
    }
    
    let tr = document.createElement('tr');
    for (let i = 0; i < Object.keys(X.Data).length - 1; i++){
        let td = document.createElement('td');
        let input = document.createElement('input');
        td.appendChild(input);
        tr.appendChild(td);
    }
    let tbody = document.querySelector('.userBase tbody');
    tbody.appendChild(tr);
}


let submit = document.querySelector('.submit');
submit.addEventListener('click', submitForm);
function submitForm(){
    
    let inputs = document.querySelectorAll('.userBase tbody input');
    let inputArray = [];
    let tr = document.createElement('tr');
    let tbody = document.querySelector('tbody');    
    if (inputs.length === 0) {
        return
    }
    for (i = 0; i < inputs.length; i++){
        let td = document.createElement('td');
        inputArray.push(inputs[i].value);    
        td.innerHTML = inputs[i].value;
        tr.appendChild(td);
    }

    
    if (inputs.length === 0){
        return
    }
    if (inputs[0].value === ''){
        document.querySelector('.userBase tbody > tr:last-child').remove();
        return console.log(Error('Не введёно имя пользователя'))
    }
    X.AddLine(inputArray);
    document.querySelector('.userBase tbody > tr:last-child').remove();
    tbody.appendChild(tr);

}

//createTableFromObject();
