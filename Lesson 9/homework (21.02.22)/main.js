// Все робити за допомоги js.

// - створити блок,
// let div = document.createElement('div')
// - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.backgroundColor = 'grey'
// div.style.colr = 'red'
// div.style.fontSize = '24'
// - додати цей блок в body.
// document.body.appendChild(div)
// - клонувати його повністю, та додати клон в body.
// let cloneNode = div.cloneNode(true);
// document.body.appendChild(cloneNode)


/* <----------------------------------------------------------------------------------------------------------------> */
// - Є масив:
// let dataArr = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let ulElement = document.getElementsByClassName('menu')[0];
// for (const arrKey of dataArr) {
//     let liElement = document.createElement('li');
//     liElement.innerText = 'Hello okten'
//     ulElement.appendChild(liElement)
// }

/* <----------------------------------------------------------------------------------------------------------------> */

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (const item of coursesAndDurationArray) {
// let divElement = document.createElement('div');
//     divElement.innerText = `${item.title} ${item.monthDuration}`
//     document.body.appendChild(divElement)
// }

/* <----------------------------------------------------------------------------------------------------------------> */

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item')
//
//     let headingElement = document.createElement('h1');
//     headingElement.classList.add('heading')
//     headingElement.innerText = `${item.title}`
//
//     let paragraphElement = document.createElement('p');
//     paragraphElement.classList.add('description')
//     paragraphElement.innerText = `${item.monthDuration}`
//
//     divElement.append(headingElement,paragraphElement)
//
//     document.body.appendChild(divElement)
// }




