let usersSection = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(dataUsers => {
        for (const userItem of dataUsers) {
            let userSection = document.createElement('div');
            userSection.classList.add('user')
            let infoAnchor = document.createElement('a');
            infoAnchor.innerText = `${userItem.id} - ${userItem.name}`
            infoAnchor.href = `./user-details.html?data=${JSON.stringify(userItem)}`
            userSection.appendChild(infoAnchor)
            usersSection.appendChild(userSection)
        }
    })