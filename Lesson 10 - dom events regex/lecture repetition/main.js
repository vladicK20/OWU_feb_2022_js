// let btn1 = document.getElementById('btn1'); // dom html document

// btn1.onclick = function () {
//     console.log('you click me')
// }
// btn1.onclick = function () {
//     console.log('you click me one more')
// }
// console.log(btn1);

/*юзаєм "addEventListener" замість "onclick" коли треба декілька раз (клік просто перезапише і покаже останнє, а не все) */
// btn1.addEventListener('click', function () {
//     console.log('click1')
// })

// btn1.addEventListener('click', function (e) {
//     console.log('click2')
//     console.log(e) // it calls 'event object'
//     console.log(e.target)
// })

// let title = document.getElementById('title');
// document.onmousemove = function (e) {
//     title.innerText = `x = ${e.clientX}; y = ${e.clientY}`
// }

// let points = []
//
// document.onclick = function (e) {
//     points.push({x: e.clientX, y: e.clientY})
// }
//
// btn1.addEventListener('click', () => {
//     console.log(points)
// })

/* <----------------------------------------------------------------------------------------------------------------> */

// prevent default

// let form = document.forms[0]

// let users = []
// form.onsubmit = (e) => {
//     e.preventDefault()
//     console.log('submit')
//
//     let user = {login: e.target.login.value, password: e.target.password.value}
//     users.push(user)
//
//     // users.push({login: e.target.login.value, password: e.target.password.value})
//
//     console.log(users)
// }

/* <----------------------------------------------------------------------------------------------------------------> */

// let inputLogin = form.login
// inputLogin.addEventListener('input', (e) => {
//     // console.log(e.target.value);
//     if (e.target.value.toLowerCase().includes('duck')) {
//         alert('atata')
//     }
// })

/* <----------------------------------------------------------------------------------------------------------------> */

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let form = document.forms[0]
// //or
// let usernameInput = form.username;
//
// let results = document.getElementById('results');
//
// form.onsubmit = (e) => {
//     e.preventDefault()
//     results.innerText = ''
//     // or
//     // e.target.username - попередній більш оптимізований
//     let usernameValue = usernameInput.value;
//     let filter = users.filter(value => value.name === usernameValue);
//     for (const item of filter) {
//         let li = document.createElement('li')
//         li.innerText = `${item.name} ${item.age} ${item.status}`
//         results.append(li)
//     }
// }

/* <----------------------------------------------------------------------------------------------------------------> */

// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//
// let chbx = document.getElementById('chbx');
// chbx.onclick = function () {
//         let resultsArr = []
//         if (chbx.checked) {
//                resultsArr = users.filter(value => value.status);
//         } else {
//                resultsArr = users.filter(value => !value.status);
//         }
//         for (const item of resultsArr) {
//                 console.log(item)
//         }
// }

/* <----------------------------------------------------------------------------------------------------------------> */

// regex

// let phone = '+380671231212';
// var re = /\+380\d{9}/i;
// console.log(phone.match(re));