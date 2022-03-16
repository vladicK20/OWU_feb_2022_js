// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((value) => value.json())
    .then(dataPosts => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')
        for (const dataItem of dataPosts) {
            let divPost = document.createElement('div');
            divPost.classList.add('post')
            divPost.innerHTML = `<h2>Id - ${dataItem.id}</h2>  <h3>Title: ${dataItem.title}</h3> <p>Body: ${dataItem.body}</p>`
            let btnClick = document.createElement('button');
            btnClick.classList.add('button')
            btnClick.innerText = 'Check comments'
            btnClick.onclick = (e) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + dataItem.id + '/comments')
                    .then((value2) => value2.json())
                    .then(comments => {
                        for (const commentItem of comments) {
                            if (dataItem.id === commentItem.postId) {
                                let commentDiv = document.createElement('div');
                                commentDiv.classList.add('commentCard')
                                commentDiv.innerHTML = `<h2>Id - ${commentItem.id}</h2>  <h3>Name: ${commentItem.name}</h3> <h2>Email: ${commentItem.email} </h2> <p>Body: ${commentItem.body}</p> <hr>`
                                divPost.appendChild(commentDiv)
                            }
                        }
                    })
            }
            divPost.appendChild(btnClick)
            wrapper.appendChild(divPost)
            document.body.appendChild(wrapper)
        }
    })

