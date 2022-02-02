// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = "hello"
// let b = "owu"
// let c = "com"
// let d = "ua"
// let e = 1
// let f = 10
// let g = -999
// let h = 123
// let i = 3.14
// let j = 2.7
// let k = 16
// let l = true
// let m = false
// console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(g)
// alert(h)
// alert(i)
// alert(j)
// alert(k)
// alert(l)
// alert(m)
// document.write(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h + " " + i + " " + j + " " + k + " " + l + " " + m)

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = "hello"
// a = "one"
// let b = "owu"
// b = "two"
// let c = "com"
// c = "three"
// let d = "ua"
// d = "com"
// let e = 1
// e = 2
// let f = 10
// f = 11
// let g = -999
// g = 999
// let h = 123
// h = 1234
// let i = 3.14
// i = 3
// let j = 2.7
// j = 2
// let k = 16
// k = 15
// let l = true
// l = false
// let m = false
// m = true
// console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(g)
// alert(h)
// alert(i)
// alert(j)
// alert(k)
// alert(l)
// alert(m)
// document.write(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h + " " + i + " " + j + " " + k + " " + l + " " + m)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let lastName = "Вишневський"
// let firstName = "Владислав"
// let middleName = "Юрійович"
// let fullName = lastName + " " + firstName + " " + middleName
// console.log(fullName)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let lastName = prompt("What is your lastname?", "Vyshnevskyi")
// let firstName = prompt("What is your name?", "Vladyslav")
// let age = prompt("How old are you?", 20)
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// alert(`"Вітаю ${lastName} ${firstName}. Тобі ${age} років.`)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// console.log(a, typeof a)
// let b = '100';
// console.log(b, typeof b)
// let c = true;
// console.log(c, typeof c)
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
// let n1 = 5 < 6
// let n2 = 5 > 6
// let n3 = 5 === 6
// let n4 = 5 >= 6
// let n5 = 10 === 10
// let n6 = 10 == 10
// let n7 = 10 !== 10
// let n8 = 10 < 10
// let n9 = 10 > 10
// let n10 = 123 === "123"
// let n11 = 123 !== "123"
//
// console.log(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11)

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

//У вікні браузера буде наступне:
// Перше значення 5 - тому що цифра + стрінга не додадуться як два числа, а просто з'єднаються як текст
// Всі інші значення очевидно буду обраховуватись ніби там два числа, оскільки зі всіма іншими діями "20" сприймається як число, і відповідно виводить правильний математичний результат, але не розумію чому саме так.
