// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let result = [];
//     for (let i = 0; i < str.length; i = i + n) {
//         result.push(str.substr(i, n))
//     }
//     return result
// };
// console.log(cutString('наслаждение', 3))

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let validator = (mail) => {
//     let a = '@'
//     let b = '.'
//     for (let i = 0; i < mail.length; i++) {
//         if (!mail.startsWith(a)) {
//         } else if (mail.startsWith(a)) {
//         }
//         if (!mail.includes(a)) {
//             // alert(`Email: ${mail} is not valid`)
//         }
//     }
//     alert(`Email: ${mail} is not valid`)
//     for (let j = 0; j < mail.length; j++) {
//         if (mail[j] === a && mail[j] === b) {
//             return
//         } else if (mail[j] === a && mail[j + 1] === b) {
//             alert(`Email: ${mail} is not valid`)
//         } else if (mail[j] === a && mail[j + 2] === b) {
//             alert(`Email: ${mail} is not valid`)
//         }
//     }
//     return mail.toLowerCase()
// }
// document.writeln((`Your email: ${validator('someeMAIL@i.ua')} is valid `))


// - є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length))

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let count = (str, stringsearch) => {
//     let xxx = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) {
//             xxx.push(str[i])
//         }
//     } return xxx
// }
// let symb = "о"
// let str = "Астрономия это наука о небесных объектах";
// console.log(count(str, symb))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела"
// let cutString = (str, n) => {
//     return str.split(' ').slice(0,n)
// }
// console.log(cutString(str, 2))