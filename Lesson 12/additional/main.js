// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then(dataUsers => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')
        for (const user of dataUsers) {
            let userData = document.createElement('div');
            userData.classList.add('userData')
            let userID = document.createElement('div');
            userID.classList.add('userId')
            userID.innerHTML = `<h2>Id: ${user.id}</h2>`
            let userIdBtn = document.createElement('button');
            let userInfo = document.createElement('div');
            userInfo.classList.add('userInfo')
            userInfo.innerHTML = `
                <h3>Name: ${user.name}</h3>
                <h4>Username: ${user.name}</h4>
                <h4>Email: ${user.name}</h4>
                <div>
                Adress: ${user.name}
                    <h5><u>street</u>: ${user.address.street}</h5>
                    <h5><u>suite</u>: ${user.address.suite}</h5>
                    <h5><u>city</u>: ${user.address.city}</h5>
                    <h5><u>zipcode</u>: ${user.address.zipcode}</h5>
                    <h5> <u>geo</u>: <p>lat: ${user.address.geo.lat}</p> <p>lng: ${user.address.geo.lng}</p></h5>
                </div>
                    <h5><u>phone</u>: ${user.phone}</h5>
                    <h5><u>website</u> ${user.website}</h5>
                    <h5><u>company</u>: <p>${user.company.name}</p> <p>${user.company.catchPhrase}</p> <p>${user.company.bs}</p> </h5>
                `
            userIdBtn.classList.add('userIdBtn')
            userIdBtn.innerText = 'Check user`s post'
            userIdBtn.onclick = e => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then((id) => id.json())
                    .then(usersPosts => {
                        for (const postItem of usersPosts) {
                            if (user.id === postItem.userId) {
                                let userPost = document.createElement('div');
                                userPost.classList.add('commentCard')
                                userPost.innerHTML =
                                    `<h2>Id - ${postItem.id}</h2>  
                                    <h3>Title: ${postItem.title}</h3> 
                                    <p>Body: ${postItem.body}</p>`
                                let commentBtn = document.createElement('button');
                                commentBtn.classList.add('button')
                                commentBtn.innerText = 'Check comments'
                                commentBtn.onclick = (x) => {
                                    fetch('https://jsonplaceholder.typicode.com/users/' + user.id +  postItem.userId + '/comments')
                                        .then((post) => post.json())
                                        .then(comments => {
                                            for (const commentItem of comments) {
                                                if (userID.id === postItem.userId && postItem.userId === commentItem.postId) {
                                                    let commentCard = document.createElement('div');
                                                    commentCard.classList.add('commentCard')
                                                    commentCard.innerHTML = `
                                                        <h2>Id - ${commentItem.id}</h2>  
                                                        <h3>Name: ${commentItem.name}</h3> 
                                                        <h2>Email: ${commentItem.email} </h2> 
                                                        <p>Body: ${commentItem.body}</p> <hr>`
                                                    userPost.appendChild(commentCard)
                                                }
                                            }
                                        })
                                }
                                userPost.appendChild(commentBtn)
                                userID.appendChild(userPost)
                            }
                        }
                    })
            }

            userID.appendChild(userIdBtn)
            userData.appendChild(userID)
            userData.appendChild(userInfo)
            wrapper.appendChild(userData)
            document.body.appendChild(wrapper)
        }
    })

