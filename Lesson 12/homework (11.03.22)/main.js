// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(dataPosts => {
        let wrapper = document.getElementById('wrapper1')
        console.log(wrapper)
        for (const dataItem of dataPosts) {
            let divPost = document.createElement('div');
            divPost.classList.add('post')
            divPost.innerHTML = `<h2>Id - ${dataItem.id}</h2>  <h3>Title: ${dataItem.title}</h3> <p>Body: ${dataItem.body}</p>`
            wrapper.appendChild(divPost)
        }
    });

//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then((value) => value.json())
.then(dataPosts2 => {
    let wrapper2 = document.getElementById('wrapper2')
    console.log(wrapper2)
    for (const dataItem of dataPosts2) {
        let divComment = document.createElement('div');
        divComment.classList.add('comment')
        divComment.innerHTML = `<h2>Id - ${dataItem.id}</h2> <h3>Name: ${dataItem.name}</h3> <h4>Email: ${dataItem.email}</h4> <p>Body: ${dataItem.body}</p>`
        wrapper2.appendChild(divComment)
    }
})