const user  = [
    {name: 'Vasya', age: 33, height: 120},
    {name: 'Dima',  age: 51, height: 145},
    {name: 'Yulia', age: 24, height: null},
];
// const user  = {name: 'Vasya', age: 33};
function glue(prop) {
    return user.map(function (item) {
        if (item.height === null){
            item.height = 'неизвестен';
        }
        return <p className="orange">{item.name} ему - {item.age}года, его рост - {item.height}</p>
    })
}
function Welcome(props) {
  return <p>Hello, {props.name}, {props.age}</p>
}
function Theme(props) {
    return <h2>{props.theme}</h2>
}
function Options(props) {
    return <label><input type='radio' name='quiz' />{props.value}</label>
}
function App(props) {
  return <div className='quiz'>
      <div>Тема опроса</div>
      <Theme theme='Что мне делать?'/>
      <div className='options'>
          <Options value='Стоять' />
          <Options value='Идти' />
          <Options value='Бежать' />
      </div>

      {/*<Welcome name='Vika' age='27' />*/}
      {/*<Welcome name='Katya' age='34' />*/}
      {/*<Welcome name='Vasya' age='45' />*/}
  </div>
};

function tick() {
    const element = (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root2'));
}
setInterval(tick, 1000);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()}
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Hello, word!</h1>
//                 <h2>It is {this.state.date.toLocaleString()}</h2>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root3')
// );

let root3 = document.querySelector('#root3');
let string = document.createElement('p');
let string2 = document.createElement('p');
let TickTack = ()=>{
    let date = new Date();
    // let newDate = .toLocaleString();
    string.innerHTML = date.toLocaleString();
    root3.appendChild(string);
};

setInterval(TickTack,1000);




// Создать компоненты для ануитетного ипотечного платежа
// Создать компоненты для формы голосования на сайте
// Есть массив городов. Создать Reackt компонентя, отрисовывающий список <select>