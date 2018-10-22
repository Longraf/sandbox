const X = {

    Data: {
        Name: 'Имя',
        LastName: 'Фамилия',
        Age: '1',
        Rating: 'rate',
        Values: [
            ['Ivan', 'ivanov', 99, 0],
            ['Oleg', 'ivanov', 1, 10],
            ['Lena', 'ivanov', 20, 0]
        ]

    },

    SetLine: function(value){ // rewrite data values
        this.Data.Values = value;
    },
    AddLine: function(value){
        this.Data.Values.push(value);
    },
    GetValues: function(value){ // output to console.log
//        console.clear();
        for (let i in this.Data.Values){
            console.log(this.Data.Values[i]);
        }

    }
};
document.querySelector('.getValues').addEventListener('click', function() {
  return X.GetValues();
});
document.querySelector('.addValues').addEventListener('click', entryField);
document.querySelector('.submit').addEventListener('click', submitForm);

function createTableFromObject(){ 
    let userDataBase = document.querySelector('.userBase');
    let tbody = document.querySelector('.tbody');
    let thead = document.querySelector('.thead');
    for (theadItem in this.Data) {
        if (theadItem === 'Values'){break}
        let td = document.createElement('td');
        td.innerHTML = theadItem;
        document.querySelector('.userBase .thead').appendChild(td);
    }
    for (let valuesItem = 0; valuesItem < X.Data.Values.length; valuesItem++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < X.Data.Values[valuesItem].length; i++) {
            let td = document.createElement('td');
            td.innerHTML = X.Data.Values[valuesItem][i];
            tr.appendChild(td);
        }
        document.querySelector('.userBase tbody').appendChild(tr);
    }
}


function entryField() {
    if (document.querySelectorAll('.userBase input').length >= X.Data.Values[0].length) {
        return
    }
    
    let tr = document.createElement('tr');
    for (i = 0; i < Object.keys(X.Data).length - 1; i++){
        let td = document.createElement('td');
        let input = document.createElement('input');
        td.appendChild(input);
        tr.appendChild(td);
    }
    let tbody = document.querySelector('.userBase tbody');
    tbody.appendChild(tr);
}




function submitForm(){
    
    let inputs = document.querySelectorAll('.userBase tbody input');
    console.log(document.querySelectorAll('.userBase tbody input'));
    let inputArray = [];
    let tr = document.createElement('tr');
    let tbody = document.querySelector('tbody');    
    if (inputs.length == 0) {
        return
    }
    for (i = 0; i < inputs.length; i++){
        let td = document.createElement('td');
        inputArray.push(inputs[i].value);    
        td.innerHTML = inputs[i].value;
        tr.appendChild(td);
    }
    
    X.AddLine(inputArray);
    if (inputs.length == 0){
        return
    };
    console.log(inputs[0]);
    document.querySelector('.userBase tbody > tr:last-child').remove();
    tbody.appendChild(tr);

}

createTableFromObject()
