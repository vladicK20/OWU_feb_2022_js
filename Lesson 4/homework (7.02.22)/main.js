// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function figure(a, b) {
//     return a * b
// }
// let calc = figure(10,20)
// console.log(calc)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sCircle(r) {
//     let radius = r ** 2
//     let circle = 3.14 * radius
//         return circle
// }
// let result = sCircle(2)
// console.log(result)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCylinder(h,r) {
//    let calc = 2* 3.14 * h * r
//     return calc
// }
//
// console.log(sCylinder(2,3))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let xxx = [11, 12, 13, 14, 15]
// function array(xxx) {
//     for (let i = 0; i < xxx.length; i++) {
//         console.log(xxx[i])
//     }
// }
// array(xxx)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function dataText(txt) {
//     document.write(`<p>${txt}</p>`)
//     document.write(`<hr>`)
//     for (let i = 0; i < 5; i++) {
//     document.write(`<p>${txt}</p>`)
//     }
// }
// dataText('some txt')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function dataUl(txt) {
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// dataUl("some text")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function dataUl(txt, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// dataUl("some text", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [11, 12, 13, 'one', 'two', 'three', true, false, false]
//
// function dataArr(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// dataArr(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let dataItems = [
//     {id: 1, name: 'vasia', age: 23},
//     {id: 2, name: 'oleh', age: 20},
//     {id: 3, name: 'petro', age: 31},
//     {id: 4, name: 'vlad', age: 35}
// ]
//
// function dataArr(dataItems) {
//     document.write(`<ul>`)
//     for (let dataItem of dataItems) {
//         document.write(`<li>${dataItem.id} - ${dataItem.name} - ${dataItem.age}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// dataArr(dataItems)
