// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let name = document.forms.form.username
// let age = document.forms.form.age
// let btn = document.getElementById('btn1');
//
// let finalForm = (userN, userA) => {
//     let user = {username: userN, age: userA};
// localStorage.setItem('User1', JSON.stringify(user));
// };
//
// btn.onclick = (e) => {
//     e.preventDefault()
//     finalForm(name.value, age.value);
// }

/* <----------------------------------------------------------------------------------------------------------------> */

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let carsArr = JSON.parse(localStorage.getItem('cars')) || []
// document.forms.carForm.onsubmit = (e) => {
//     e.preventDefault()
//     let carModel = e.target.carModel.value
//     let carType = e.target.carType.value
//     let carVolume = e.target.carVolume.value
//     let dataCar = {carModel,carType,carVolume}
//     carsArr.push(dataCar)
//     localStorage.setItem('cars', JSON.stringify(carsArr))
// }