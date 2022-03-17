// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let click = document.getElementById('text');
// let btn = document.getElementById('button');
// btn.onclick = () => {
//     click.style.display = 'none';
//     btn.onclick = () => {
//         btn.style.display = 'none'
//         btn.innerText = 'Hover button'
//     }
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// document.getElementById('button1').onclick = function () {
//   let age = + document.getElementById('age').value;
//     if (!age) {
//         alert('ERROR');
//     } else if (age < 18 && age >0) {
//         alert('Entry is closed');
//     } else if (age < 0) {
//       alert('ERROR')
//     } else {
//         alert('Hello.');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике


// let btn = document.getElementById('btn')
// // let list = document.getElementsByClassName('list')
// let menu = document.getElementById('menu')
// btn.onclick =  (e) => {
// menu.hidden = true
//     btn.onclick = () => {
//         menu.hidden = false
//     }
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// let commentsData = [
//     {name: 'Максим', body: 'Вчи English'},
//     {name: 'Іван', body: 'Досить сидіти, вже пізно'},
//     {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
//     {name: 'Іра', body: 'Воно, тобі треба?'},
// ];
//
// let divMain = document.createElement('div');
// for (const comment of commentsData) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//
//     h3.innerText = comment.name;
//     p.innerHTML = comment.body;
//     btn.innerHTML = 'Close'
//
//     btn.onclick = () => {
//         p.hidden = true;
//     }
//     div.append(h3, p, btn);
//     divMain.append(div);
// }
// document.body.appendChild(divMain)