// let h2 = document.createElement('h2') /* create element */
// h2.innerText = 'okten' /*елемент наповнили*/
// document.body.append(h2) /*елемент створили в боді*/


// let targets = document.getElementsByClassName('target') /*or [0]*/ /*return [html] collection*/
// let target = targets[0]

// В даному випадку після двох еппендів з'явиться тільки в класі "таргет" (хоча по логіці мало б бути в двох). Чому?
// ---> Оскільки це {1} об'єкт то воно ніби створює посилання на об'єкт, яке спочатку пересунули в "body", а потім пересунули в "target". Тому бачимо тільки в таргеті.
// Два "посилання" на об'єкт зробити не можна, по замовчуванню заборонено.
// Як можна?
// --->
// let cloneNodeH2 = h2.cloneNode(true); /*без тру буде пустий вузол без внутрішніх елементів*/
// target.append(cloneNodeH2)

/* <----------------------------------------------------------------------------------------------------------------> */

// Структура елемент в елементі

// let wrap = document.createElement('div')
// wrap.classList.add('wrap')
//
// let outer = document.createElement('div')
// outer.classList.add('outer')
//
// let box1 = document.createElement('div')
// box1.classList.add('inner')
// box1.classList.add('box-1')
//
// let box2 = document.createElement('div')
// box2.classList.add('inner')
// box2.classList.add('box-2')
//
// outer.appendChild(box1,box2)
// wrap.appendChild(outer)
// document.body.appendChild(wrap)

/* <----------------------------------------------------------------------------------------------------------------> */

// next/previous sibling / sibling element

//  let point1 = document.getElementsByClassName('point1')[0]
// console.log(point1.nextElementSibling);
// console.log(point1.previousElementSibling);
// console.log(point1.parentElement);

/* <----------------------------------------------------------------------------------------------------------------> */

// a href

// let anchorElement = document.createElement('a');
// anchorElement.href = 'https://coinmarketcap.com/' /*якщо із зображенням то атрибут "src"*/
// anchorElement.innerText = 'coinmarketcap'
// document.body.appendChild(anchorElement)

/* <----------------------------------------------------------------------------------------------------------------> */

// Example

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// function productAppender(list) {
//     let productsDiv = document.getElementsByClassName('products')[0];
//     for (const product of list) {
//         let productDiv = document.createElement('div')
//         productDiv.classList.add('box')
//
//         let h2 = document.createElement('h2');
//         h2.innerText = `${product.title} ${product.price}`
//         productDiv.appendChild(h2)
//
//         let imageElement = document.createElement('img');
//         imageElement.src = product.image
//         imageElement.alt = `${product.title}`
//         productDiv.appendChild(imageElement)
//
//         productsDiv.appendChild(productDiv)
//     }
// }
//
// productAppender(products)

/* <----------------------------------------------------------------------------------------------------------------> */

// ES6

// vanila js
// let user = {name: 'vaysa', age: 31, status: true, id: 1};
// let id = user.id;
// let name = user.name;
// let age = user.age;
// let status = user.status;

// super duper modern
// let {id, name, age, wife, wife: {imya}} = {name: 'vaysa', age: 31, status: true, id: 1, wife: {imya: 'olya'}};
// console.log(id);
// console.log(name); // vaysa
// console.log(wife);
// console.log(imya) // olya

// function asdqwe(user) {
//     let {name, age} = user;
//     console.log(name, age);
//  }
//
// function asdqwe({name, age}) {
//     console.log(name, age);
// }
//
// let u = {name: 'vaysa', age: 31, status: true, id: 1, wife: {imya: 'olya'}};
// asdqwe(u);