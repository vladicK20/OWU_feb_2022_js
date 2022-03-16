// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let usersBox = document.getElementById('users');
let fav = JSON.parse(localStorage.getItem('favorites')) || []

for (const user of users) {
    let usersDiv = document.createElement('div');
    usersDiv.innerText = user.name + ' '
    let btn = document.createElement('button');

    btn.onclick = () => {
        fav.push(user)
        localStorage.setItem('favorites', JSON.stringify(fav))
    }
    btn.innerHTML = `<b>add to favorite</b>`

    usersDiv.append(btn)
    usersBox.append(usersDiv)
}