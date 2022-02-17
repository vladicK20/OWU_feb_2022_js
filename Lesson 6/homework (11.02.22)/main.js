// - Знайти та вивести довижину настипних стрінгових значень

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
//
// console.log(a.toUpperCase())
// console.log(b.toUpperCase())
// console.log(c.toUpperCase())

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD'
// let b = 'LOREM IPSUM'
// let c = 'JAVASCRIPT IS COOL'
//
// console.log(a.toLowerCase())
// console.log(b.toLowerCase())
// console.log(c.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать'
// let stringToarray = (str) => {
//     return str.split(' ')
// }
// let arr = stringToarray(str)
// document.writeln(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
// return str.substring(0,length)
// }
// document.writeln(delete_characters(str,7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//    return  str.toUpperCase().replaceAll(' ','-')
// }
// console.log(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello world'
// let upperFirst = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(upperFirst(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(xxx=>xxx.charAt(0).toUpperCase()+xxx.slice(1)).join(' ')
// }
// console.log(capitalize('one two three four five'))