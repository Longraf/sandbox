class RangeSlider {
    constructor({
        Target = null,
        Min    = 30,
        Max    = 100,
        Values = [0,0]
                })
    {
        this._Target = Target;
        this._Values = Values;
        this._Min    = Min;
        this._Max    = Max;
    }
    get Values(){
        return this._Values;
    }
    set Values(array){
        this._Values = 'array';
    }
    get Min(){
        return this._Min;
    }
    set Min(v){
        this._Min = v
    }
}


let rs = new RangeSlider({Target : 'Petia',Values : [2,3], Max : 90, Min : 40});
console.log(rs);


// class User {
//   constructor({name1 = 'аноним', age = 'неизвестен', height = 'средний'}) {
//     this.name   = name1;
//     this.age    = age;
//     this.height = height;
//   }
//   sayHi(word) {  console.log(this.name + ` ` + word);  }
//
//   sayAboutYourSelf(val = 'ЦАРЬ') {
//     console.log(`Меня зовут ${this.name} Подпись: ${val}`)
//   }
//   get youName() {
//       return `Моё имя ${this.name}`;
//   }
//   set youName(v) {
//       let a = v;
//       this.name = a+'123';  console.log('Hi from setter');
//   }
// }
// let user = new User();
// user.name = 'Alioshinko';
// user.sayHi("Аллоха"); // Вася
// user.sayAboutYourSelf();
// console.log(user)
