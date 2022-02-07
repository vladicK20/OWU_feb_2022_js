// 1) Створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [
//     [11, 12, 13, 14, 15],
//     ['one', 'two', 'three', 'four', 'five'],
//     [true, true, 1, 2, 'ten', 'xxx']
// ]
// console.log(arr)

// 2) Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [1, 2, 'okten', true, false]
// console.log(arr[0], arr [1], arr[2], arr[3], arr[4])
// document.write(arr)

// 3)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> some text </div>`)
// }

// for (let i = 0; i <= 10; i++) {
//     document.write(`<div> ${i} some text </div>`)
// }

// let i = 0
// while (i < 20) {
//     document.write(`<h1> some txt  </h1>`)
//     i++
// }

// let i = 0
// while (i <= 20) {
//     document.write(`<h1> ${i} some txt  </h1>`)
//     i++
// }

// 4)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let number of arr) {
//     console.log(number)
// }

// let arr =['one','two','three','four','five','six','seven','eight','nine','ten']
// for (let string of arr) {
//     console.log(string)
// }

// let arr =['one','two','three',11,12,13,14,true,false,true]
// for (let string of arr) {
//     console.log(string)
// }

// let arr =['one','two','three',11,12,13,14,true,false,true]
// for (let string of arr) {
//     if (typeof string === "boolean")
//     console.log(string)
// }

// let arr =['one','two','three',11,12,13,14,true,false,true]
// for (let string of arr) {
//     if (typeof string === "number")
//     console.log(string)
// }

// let arr =['one','two','three',11,12,13,14,true,false,true]
// for (let string of arr) {
//     if (typeof string === "string")
//     console.log(string)
// }


// 5)
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let arr = []
//     arr [0] = 'one'
//     arr [1] = 'two'
//     arr [2] = 'three'
//     arr [3] = 11
//     arr [4] = 12
//     arr [5] = 13
//     arr [6] = 14
//     arr [7] = true
//     arr [8] = false
//     arr [9] = true
//     arr [10] = true
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let i = 0; i < 10; i++) {
//     console.log('Номер кроку - ' + i + '')
//     document.write('Номер кроку - ' + i + ' ')
// }

// for (let i = 0; i < 100; i++) {
//     console.log('Номер кроку - ' + i + '')
//     document.write('Номер кроку - ' + i + ' ')
// }

// for (let i = 0; i < 100; i+=2) {
//     console.log('Номер кроку - ' + i + '')
//     document.write('Номер кроку - ' + i + ' ')
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0)
//         console.log('Номер кроку - ' + i + '')
//     document.write('Номер кроку - ' + i + ' ')
// }

// for (let i = 0; i < 100; i++) {
//     if (i%2 === 1)
//     console.log('Номер кроку - ' + i + '')
//     document.write('Номер кроку - ' + i + ' ')
// }