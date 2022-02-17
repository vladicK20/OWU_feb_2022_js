// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(one,two,three) {
//     if (one<two&&one<three) {
//         console.log(one)
//     } else if (two<one && two<three) {
//         console.log(two)
//     } else {
//         console.log(three)
//     }
// }
// numbers(10,8,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numbers(one,two,three) {
//     if (one>two&&one>three) {
//         console.log(one)
//     } else if (two>one && two>three) {
//         console.log(two)
//     } else {
//         console.log(three)
//     }
// }
// numbers(10,128,33)

// - створити функцію яка повертає найбільше число з масиву

// let dataNumbers = [11, 120, 123, 143, 153, 6, 107, 88, 999, 20]

// function numbers(arrMax) {
//     let max = arrMax[0]
//     for (const maxItem of arrMax) {
//         if (maxItem > max) {
//             max = maxItem
//         }
//     }
//     return max
// }
// document.write(numbers(dataNumbers))

// - створити функцію яка повертає найменьше число з масиву

// function numbers(arrMin) {
//     let min = arrMin[0]
//     for (const minItem of arrMin) {
//         if (minItem < min) {
//             min = minItem
//         }
//     }
//     return min
// }
// document.write(numbers(dataNumbers))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function numbers(sum) {
//     let itemsSum = 0
//     for (const sumElement of sum) {
//         itemsSum = itemsSum + sumElement
//     }
//     return itemsSum
// }
//
// console.log(numbers(dataNumbers))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function numbers(sum) {
//     let itemsSum = 0
//     for (const sumElement of sum) {
//         itemsSum = itemsSum + sumElement
//     }
//     return itemsSum/sum.length
// }
//
// console.log(numbers(dataNumbers))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numbers(array) {
//     let min = arguments[0]
//     let max = arguments[0]
//     for (const item of arguments) {
//         if (item > max) {
//             max = item
//         } else if (item < min) {
//             min = item
//         }
//     }
//     console.log(max)
//     return min
// }
//
// document.write(numbers(1,2,3,4,5,6,7,9,10))

// - створити функцію яка заповнює масив рандомними числами

// function random() {
//     let randomNum = []
//     for (let i = 0; i < 10; i++) {
//         randomNum.push(Math.floor(Math.random() * 100))
//     }
//     return randomNum
// }
// console.log(random());

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(limit) {
//     let randomNum = []
//     for (let i = 0; i < 10; i++) {
//         randomNum.push(Math.round(Math.random() * limit))
//     }
//     return randomNum
// }
//
// console.log(random(100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverseArray(arr) {
//     let arrReverse = [];
//     for (let i = 0, ri = arr.length - 1;
//          i < arr.length;
//          i++, ri--) {
//         arrReverse[i] = arr[ri]
//     }
//     return arrReverse
// }
//
// console.log(reverseArray([1, 2, 3, 4, 5]))
