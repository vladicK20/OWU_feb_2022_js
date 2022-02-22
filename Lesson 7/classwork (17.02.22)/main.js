// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, maker, year, ms, volume) {
//     this.model = model
//     this.maker = maker
//     this.year = year
//     this.ms = ms
//     this.volume = volume
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.ms} на годину`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.ms = this.ms + newSpeed
//     }
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} - ${this[item]}`)
//             }
//         }
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//         console.log(driver)
//     }
// }
//
// let car1 = new Car('BMW', 'Germany', 2020, 300, 3.5)
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(50)
// car1.drive()
// car1.changeYear(2022)
// car1.info()
// car1.addDriver('Petro')
// console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//
//     constructor (model, maker, year, ms, volume) {
//         this.model = model
//         this.maker = maker
//         this.year = year
//         this.ms = ms
//         this.volume = volume
//
//         this.drive = function () {
//             console.log(`Їдемо зі швидкістю ${this.ms} на годину`)
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.ms = this.ms + newSpeed
//         }
//         this.info = function () {
//             for (const item in this) {
//                 if (typeof this[item] !== 'function') {
//                     console.log(`${item} - ${this[item]}`)
//                 }
//             }
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//             console.log(driver)
//         }
//     }
// }
//
// let car1 = new Car('BMW', 'Germany', 2020, 300, 3.5)
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(50)
// car1.drive()
// car1.changeYear(2022)
// car1.info()
// car1.addDriver('Petro')
// console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// class Cinderella {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
//
// }
//
// let dataCinderella = [
//     new Cinderella('cind1', 30, 36),
//     new Cinderella('cind2', 32, 35),
//     new Cinderella('cind3', 34, 38),
//     new Cinderella('cind4', 35, 39),
//     new Cinderella('cind5', 29, 39),
//     new Cinderella('cind6', 39, 40),
//     new Cinderella('cind7', 40, 35),
//     new Cinderella('cind8', 18, 37),
//     new Cinderella('cind9', 27, 36),
//     new Cinderella('cind10', 21, 37)
// ]
//
// class Prince {
//     constructor(name, age, shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     }
// }
//
// let prince = new Prince('Petro', 30, 38)
//
// let find = (dataCinderella, prince) => {
//     for (const dataCinderellaElement of dataCinderella) {
//         if (dataCinderellaElement.footsize === 38) {
//             return (`Cinderella is ${dataCinderellaElement.name}`)
//         }
//     }
// }
// console.log(find(dataCinderella, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let find2 = dataCinderella.find((value) => value.footsize === 38)
// console.log(find2)