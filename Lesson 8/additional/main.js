// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let newArr = []

function scrapper(startEl) {
    // console.log(startEl.classList)
    let children = startEl.children
    for (const child of children) {
        if (child.classList) {
            newArr.push(child.classList)
        }
        scrapper(child)
    }
    console.log(newArr)
}

scrapper(document.body)


