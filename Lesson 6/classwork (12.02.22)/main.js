// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Wрisley'
// let n3 = 'Hermione Granger'

// let noValid = (n1) => {
//     return n1.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__',' ')
// }
// console.log(noValid(n1))
// console.log(noValid(n2))
// console.log(noValid(n3))

// <---------------------------OR-------------------------->

// let name = (x, y) => {
//     let arr = [];
//     if (x.includes(y)) {
//         let a = x.split(y)
//         a.forEach((item) => {
//             if (item) arr.push(item);
//         })
//         console.log(arr.join(' '))
//     }
// }
// name(n2, '-');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = (arrayLength, range) => {
//     let newArr = []
//     for (let i = 0; i < arrayLength; i++) {
//         newArr.push(Math.round(Math.random() * range))
//     }
//     return newArr
// }
// let result = (arr(5, 100))
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// console.log(result.sort((x, y) => x - y));
// console.log(result.sort((x, y) => y - x));

// let arr = (arrayLength, range) => {
//     let newArr = []
//     for (let i = 0; i < arrayLength; i++) {
//         newArr.push(Math.round(Math.random() * range))
//     }
//     return newArr.sort((x,y)=>x-y)
// }
// let result = (arr(10, 100))
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// console.log(result.filter(x => x % 2 === 0));

// let arr = (arrayLength, range) => {
//     let newArr = []
//     for (let i = 0; i < arrayLength; i++) {
//         newArr.push(Math.round(Math.random() * range))
//     }
//     return newArr.filter(x => x % 2 === 0)
// }
// let result = (arr(10, 100))
// console.log(result)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції). за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = (arrayLength, range, callback) => {
//     let newArr = []
//     for (let i = 0; i < arrayLength; i++) {
//         newArr.push(Math.round(Math.random() * range))
//     }
//     return newArr.map(num=>num.toString())
// }
// let result = (arr(10, 100))
//
// console.log(result)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (direction) => {
//     let nums = [11, 21, 3]
//     if (direction === 'descending') {
//         return nums.sort((x, y) => y - x)
//     }
//     if (direction === 'ascending') {
//         return nums.sort((x, y) => x - y)
//     }
// }
// console.log(sortNums('descending'))


// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortArr = (a, b) => {
//     return coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// }
// console.log(sortArr())

// let filterArr = (a) => {
//     return coursesAndDurationArray.filter(value => value.monthDuration>5)
// }
// console.log(filterArr())



