// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let dataUsers = [
//     new User(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001),
//     new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
//     new User(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
//     new User(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
//     new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
//     new User(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
//     new User(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007)
// ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers = dataUsers.filter((user) => {
//     if (user.id % 2 === 0) {
//         return user
//     }
// })
// console.log(filterUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let filterUsers = dataUsers.sort((a,b)=>(a.id-b.id))
// console.log(filterUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = [order]
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let dataItems = [
//     new Client(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001, ['books', 'tomatoes', 'potatoes', 'fish']),
//     new Client(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002, ['books', 'tomatoes']),
//     new Client(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003, ['books', 'tomatoes', 'potatoes']),
//     new Client(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004, ['books', 'tomatoes', 'potatoes', 'magazine']),
//     new Client(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005, ['books']),
//     new Client(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006, ['books', 'tomatoes', 'potatoes']),
//     new Client(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007, ['books', 'tomatoes','sf','sfsfa','sfjsnf']),
//     new Client(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007, ['books', 'tomatoes', 'potatoes']),
//     new Client(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007, ['books']),
//     new Client(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007, ['books', 'tomatoes', 'potatoes'])
// ]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let dataClients = dataItems.sort((a,b)=>a.order.length-b.order.length)
// console.log(dataClients)
