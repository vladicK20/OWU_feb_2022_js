// setTimeout(() => {
//     let monday = 'Do some sport activity'
//     let counter = 1
//     console.log(`${counter} - ${monday}`)
//     setTimeout(() => {
//         let tuesday = 'Read the book'
//         counter++
//         console.log(`${counter} - ${tuesday}`)
//         setTimeout(() => {
//             let wednesday = 'Clean the room'
//             counter++
//             console.log(`${counter} - ${wednesday}`)
//             setTimeout(() => {
//                 let thursday = 'Do okten classwork'
//                 counter++
//                 console.log(`${counter} - ${thursday}`)
//                 setTimeout(() => {
//                     let friday = 'Do okten homework'
//                     counter++
//                     console.log(`${counter} - ${friday}`)
//                     setTimeout(() => {
//                         let saturday = 'Meet with friends'
//                         counter++
//                         console.log(`${counter} - ${saturday}`)
//                         setTimeout(() => {
//                             let sunday = 'Go to the gym'
//                             counter++
//                             console.log(`${counter} - ${sunday}`)
//                         }, 500)
//                     }, 500)
//                 }, 500)
//             }, 500)
//         }, 500)
//     }, 500)
// }, 500)

function schedule(counter, ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(value)
            counter++
            resolve(counter)
        }, ms)
    })
}

schedule(0,500, 'Lets do it!')
    .then(value => {
        return (schedule(value,500,'Monday - Do some sport activity'))
    })  .then(value => {
        return (schedule(value,500,'Tuesday - Read the book'))
    })  .then(value => {
        return (schedule(value,500,'Wednesday - Clean the room'))
    })  .then(value => {
        return (schedule(value,500,'Thursday - Do okten classwork'))
    })  .then(value => {
        return (schedule(value,500,'Friday - Do okten homework'))
    })  .then(value => {
        return (schedule(value,500,'Saturday - Meet with friends'))
    })  .then(value => {
        return (schedule(value,500,'Sunday - Go to the gym'))
    })
