// const INTERVAL = 100;
// let total = 0;
//
// function Timer(props) {
//     const value = props.value;
//     return (
//         <div>
//             <p>Таймер:</p>
//             <p>
//                 <span>{Math.round(value/INTERVAL/60/60)} : </span>
//                 <span>{Math.round(value/INTERVAL/60)} : </span>
//                 <span>{Math.round(value/INTERVAL)} . </span>
//                 <span>{value % INTERVAL}</span>
//             </p>
//         </div>
//     );
// }
//
// function increment() {
//     total++;
//     ReactDOM.render(<Timer value={total}/>, document.getElementById('root'));
// }
// setInterval(increment, 1000/INTERVAL);
const INTERVAL = 100;
class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 0};
    }

    incrementT(){
        this.setState({value: this.state.value + 1});
    }

    componentDidMount(){
        this.timerID = setInterval(()=> this.incrementT(), 1000/INTERVAL);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render() {
        const value = this.state.value;
        return (
            <div>
                <p>Таймер</p>
                <p>
                    <span>{Math.round(value/INTERVAL/60/60)} : </span>
                    <span>{Math.round(value/INTERVAL/60)} : </span>
                    <span>{Math.round(value/INTERVAL)} . </span>
                    <span>{value % INTERVAL}</span>
                </p>
            </div>
        )
    }

}

class Conditioner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: 0};

        // Привязка необходима, чтобы сделать this доступным в коллбэке
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease(){
        this.setState(prevState => ({
            temperature: prevState.temperature + 1
        }))
    }

    onDecrease(){
        this.setState(prevState => ({
            temperature: prevState.temperature - 1
        }))
    }

    render() {
        return (<p>
            <h2>Текущая температура: {this.state.temperature}</h2>
            <button onClick={this.onDecrease}>-</button>
            <button onClick={this.onIncrease}>+</button>
        </p>);
    }
}
ReactDOM.render(<Timer />, document.getElementById('root'));