// - Дано натуральное число n. Выведите все числа от 1 до n.

// let Num = (n) => {
//     let result = []
//     if (typeof n !== 'number')
//         console.log('ERROR')
//     else {
//         for (let i = 0; i < n; i++)
//             result.push(i + 1)
//     }
//     return result
// }
// console.log(Num(29));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let numbers = (a, b) => {
//     let result = []
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             result.push(i)
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             result.push(i)
//         }
//     } else if (typeof a !== 'number' || typeof b !== 'number'){
//         result.push('ERROR')
//     }
//     return result
// }
// console.log(numbers(25, 30));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// let foo = (arr, index) => {
//     let swap1 = arr[index];
//     let swap2 = arr[index + 1];
//
//     arr[index] = swap2;
//     arr[index + 1] = swap1;
//
//
//     return arr;
// }
// console.log(foo([9, 8, 0, 4], 0)); // ==> [ 8, 9, 0, 4 ]
// console.log(foo([9, 8, 0, 4], 1)); // ==> [ 9 ,0, 8, 4 ]
// console.log(foo([9, 8, 0, 4], 2)); // ==> [ 9, 8, 4, 0 ]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let replaceNull = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr.push(arr.splice(arr.indexOf(0,),1)[0])
//     }
//     return arr
// }
//
//
// let qqq = [1, 0, 6, 0, 3];
// let www = [0, 1, 0, 0, 0, 0, 2, 3, 0, 0, 4];
//
// console.log(replaceNull([1, 0, 6, 0, 3]));
// console.log(replaceNull([0, 1, 2, 3, 4]));
// console.log(replaceNull([0, 0, 1, 0]));
