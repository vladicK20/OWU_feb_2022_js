// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9]
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: "Witcher",
    pages: 368,
    genre: "Fantasy"
}
console.log(book1)

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: "Witcher",
    pages: 368,
    genre: "Fantasy",
    author: "Anjey Sapkowski"
}
console.log(book2)

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books =
    [
        book1 =
            {name: "Witcher", pages: 368, genre: "Fantasy", author: "Anjey Sapkowski"},
        book2 =
            {name: "Witcher", pages: 368, genre: "Fantasy", author: "Anjey Sapkowski"}
    ]
console.log(books[0], books[1])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23
let width = 10
let s = `Площа прямокутника = ${height * width}`
console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10
let dC = 4/2
const pi = 3.14
let v = `Об'єм циліндра = ${pi * dC**2 * heightC}`
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
let k = `Гіпотенуза = ${n**2 + m**2}`
console.log(k)
