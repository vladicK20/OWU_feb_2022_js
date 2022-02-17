// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function calc(...a) {
//     let xxx
//     if (arguments.length === 1) {
//         console.log(arguments[0])
//     } else if (arguments.length === 2) {
//         console.log(arguments[0] + arguments[1])
//     } else {
//         console.log('ERROR')
//     }
//     return xxx
// }
//
// calc('okten ',2)


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

// function calc(arr1, arr2) {
//     let arrSum = []
//     let length = 0
//     if (arr1.length === arr2.length) {
//         length = arr1.length;
//     } 
//     for (let i = 0; i < length; i++) {
//         arrSum[i] = arr1[i] + arr2[i]
//     }
//     return arrSum
// }
//
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5]
// console.log(calc(arr1, arr2))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let dataArr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
// function dataKeys(arr) {
//     let result = []
//     for (let resultElement of arr) {
//         for (let arrKey in resultElement) {
//             result.push(arrKey)
//         }
//     }
//     return result
// }
// console.log(dataKeys(dataArr))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let dataArr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
// function dataKeys(arr) {
//     let result = []
//     for (let resultElement of arr) {
//         for (let arrKey in resultElement) {
//             result.push(resultElement[arrKey])
//         }
//     }
//     return result
// }
// console.log(dataKeys(dataArr))