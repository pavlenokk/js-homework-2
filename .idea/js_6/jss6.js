// // let s = (a, b) => a*b;
// // console.log(s(21, 43))
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// // function colo(radius) {
// //     return Math.round(2 * Math.PI * radius);
// // }
// // console.log(colo(21,32))


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// // let cylinder = (h, r) => Math.round(2*Math.PI*r*(r*h));
// // console.log(cylinder(12,42))


// // - створити функцію яка приймає масив та виводить кожен його елемент
// // let array = [1,2,3,4];
// // let list = arr => {
// //     console.log(arr);
// //     for (const arrayElement of arr) {
// //         console.log(arrayElement);
// //     }
// // };
// // list(array);


// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// // let text = `tra-ta-ta-ta-ta по русні`
// // function paragraph(text){
// //     document.write(`<p>${text}</p>`)
// // }
// // paragraph(text)
//




// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// // let list = `tra-ta-ta-ta-ta по кацапам`
// // function paragraph(list){
// //     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list (text)
// {
// document.write(<ul>)
//     for (i=0;i++)
//     {document.write(<li>${text}</li>)}
//
//     document.write(</ul>)}
// На этом задании я застопорился, совсем не клеится :(

    // / - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = [`dasdwada`,21312312,null,undefined,NaN,true,false]
// function arraylist(array){
//     for (const box of list){console.log(box)}
// }
// arraylist(list)



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: 123},
//     {name: 'petya', age: 30, id: 41245},
//     {name: 'kolya', age: 29, id: 3213},
//     {name: 'olya', age: 28, id: 421412},
//     {name: 'max', age: 30, id: 123123}]
//
// for (let i= 0;i<users.length;i++) {
//     document.write(`<div>${users[i].name} ... ${users[i].age} ... ${users[i].id}</div>`);
// }
//

// - створити функцію яка повертає найменьше число з масиву
// const min = (array)=> {
//     let min = array[0];
//     for (const minelement of array) {
//         if (minelement < min) min = minelement;
//     }
//     return min;
// };
// const minreturn = min([2,3,4,5,6,10,4,3,6]);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const plus = (array) => {
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     }
//     return i;
// };
//
// const sume = plus([1,2,10,])
// console.log(sume);
