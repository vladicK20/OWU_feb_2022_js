// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let sectionOne = document.createElement('div');
// sectionOne.innerText = 'Section 1';
// sectionOne.style.margin = '10px';
// document.body.appendChild(sectionOne);
// let sectionTwo = document.createElement('div');
// sectionTwo.innerText = 'Section 2';
// sectionTwo.style.margin = '10px';
// document.body.appendChild(sectionTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// sectionOne.appendChild(formOne);
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'inputOne');
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'inputTwo');
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// sectionTwo.appendChild(formTwo);
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name', 'inputThree');
// let inputFour = document.createElement('input');
// inputFour.setAttribute('name', 'inputFour');
//
//
//
// let button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.appendChild(button);
//
// formOne.append(inputOne,inputTwo);
// formTwo.append(inputThree,inputFour);
//
//
// button.onclick = () =>{
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Table';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
// button.addEventListener('click',  () => {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let text = inputThree.value;
//
//     let table = (tr, td, xxx) => {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid red';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = `${xxx}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     table(tr, td, text)    ;
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words = ['fuck', 'shit', 'bitch'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Check';
// document.body.append(input, button);
//
// button.addEventListener('click',  () => {
//     // let valueInput = input.value;
//     for (let item of words) {
//         if (item === input.value) {
//             alert('ERROR');
//             input.value = '';
//             return;
//         }
//     }
//     if (input.value) {
//         alert('OK');
//     }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let words = ['fuck', 'shit', 'bitch'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Check';
// document.body.append(input, button);
//
// button.addEventListener('click',  () => {
//     // let valueInput = input.value;
//     for (let item of words) {
//         if ( input.value.includes(item)) {
//             alert('Fuck you');
//             input.value = '';
//             return;
//         }
//     }
//     if (input.value) {
//         alert('Welcome');
//     }
// })