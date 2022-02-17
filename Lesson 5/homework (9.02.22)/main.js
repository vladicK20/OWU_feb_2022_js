// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

// let calc = (a, b) => a * b
// console.log(calc(4,5))

// - створити функцію яка обчислює та повертає площу кола

// let calc = (r)=> {
//     let xxx = r**2
//     return 3.14 * xxx
// }
// console.log(calc(2))

// - створити функцію яка обчислює та повертає площу циліндру

// const cylinder = (r, h) => {
//     return 2 * 3.14 * r * h;
// }
// console.log(cylinder(10,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,true,false,'one','two']
// let dataArray = (array)=> {
//     for (const aElement of array) {
//         console.log(aElement)
//     }
//     return array
// }
// dataArray(array)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraph = (txt)=> {
//     document.write(`<p>${txt}</p>`)
//     document.write(`<p>${txt}</p>`)
//     document.write(`<hr>`)
// }
// paragraph('okten')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let dataUl = (txt)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// dataUl('okten')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let dataUl = (txt, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// dataUl('okten', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1, 2, 3, true, false, 'one', 'two']
// let dataArray = (newArray) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < newArray.length; i++) {
//         document.write(`<li>${newArray[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// dataArray(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let dataItems = [
//     {id: 1, name: 'vasia', age: 23},
//     {id: 2, name: 'oleh', age: 20},
//     {id: 3, name: 'petro', age: 31},
//     {id: 4, name: 'vlad', age: 35}
// ]
// let dataArray = (Items) => {
//     document.write(`<ul>`)
//     for (const aElement of Items) {
//         document.write(`<li>${aElement.id} ${aElement.name} ${aElement.age}</li>`)
//     }
//     document.write(`</ul>`)
// }
// dataArray(dataItems)


