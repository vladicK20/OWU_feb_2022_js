// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header

// let addClass = document.getElementById('main_header')
// addClass.classList.add('task2')

// b) робить ширину елементу ul 400px

// let widthUl = document.getElementsByTagName('ul')
// console.log(widthUl)
// widthUl[0].style.width = '400px'

// c) робить ширину всіх елементів з класом linkList шириною 50%

// let w50 = document.getElementsByClassName('linkList')
// for (const w50Element of w50) {
// w50Element.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let txtClass = document.getElementsByClassName('listElement2')
// console.log(txtClass)
// txtClass[0].innerHTML = 'Hello okten'

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let allLi = document.getElementsByTagName('li')
// for (const allLiElement of allLi) {
//     allLiElement.style.backgroundColor = 'gray'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let addAnchor = document.getElementsByTagName('a')
// for (const addAnchorElement of addAnchor) {
//     addAnchorElement.classList.add('anchor')
//     console.log(addAnchorElement)
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let allA = document.getElementsByTagName('a')
// for (const allAElement of allA) {
//     if ( allAElement.innerText === 'link3') {
//         allAElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let allAxxx = document.getElementsByTagName('a')
// for (const allAxxx1 of allAxxx) {
//     let newTxt = allAxxx1.innerText
//     allAxxx1.classList.add(`element ${newTxt}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let allSubhead = document.getElementsByClassName('sub-header')
// console.log(allSubhead)
// for (const allSubheadElement of allSubhead) {
//     allSubheadElement.style.backgroundColor = prompt('Color: (red,blue,pink,grey) ')
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

// let allSubhead = document.getElementsByClassName('sub-header')
// console.log(allSubhead)
// for (const allSubheadElement of allSubhead) {
//     if (allSubheadElement.innerText === 'content 2 segment')
//         allSubheadElement.style.backgroundColor = prompt('Color: (red,blue,pink,grey) ')
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let class1 = document.getElementsByClassName('content_1')
// console.log(class1)
// class1[0].innerText = prompt('Enter new txt')

// l) отримати елементи p та змінити їм padding на 20px

// let allP = document.getElementsByTagName('p')
// console.log(allP)
// for (const allPElement of allP) {
//     console.log(allPElement)
//     allPElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Приклад sep-2021)

// let allTxt2 = document.getElementsByClassName('text2')
// console.log(allTxt2)
// allTxt2[0].innerText = 'dec-2021'
