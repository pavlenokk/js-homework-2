





// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3

// let x = 0;
// console.log(x0 !== 0 ? "вірно" : "не вірно");

// let x = 1;
// console.log(x !== 0 ? "вірно" : "не вірно");

// let x = -3;
// console.log(x !== 0 ? "вірно" : "не вірно");

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt(`TIME`)
//
// if (time <15 )
// {console.log(`1st`)}
// else if (time <30 )
// {console.log(`2st`)}
// else if (time <45)
// {console.log(`3st`)}
// else if (time <59)
// {console.log(`4st`)};

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця пот1рапляє це число (у першу, другу чи третю).

// let day = +prompt(`Days`)
//
// if (day <=11){console.log(`1st`)}
// else if (day <=22){console.log(`2st`)}
// else if (day >23 && day<31) {console.log(`3st`)}
// else {console.log(`Sorry`)}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let Days= prompt(`Week`)
// switch (Days) {
//     case "1":
//         console.log(`Понедельник`)
//     case "2":
//         console.log(`Вторник`)
//         break;
//     case "3":
//         console.log(`Среда`)
//         break;
//     case "4":
//         console.log(`Четверг`)
//         break;
//     case "5":
//         console.log(`Пятница`)
//         break;
//     case "6":
//         console.log(`Суббота`)
//         break;
//     case "7":
//         console.log(`Воскесенье`)
//         break;
//     default:
//         console.log(`Серобуромалиновый`)
// }


// Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt("Enter")
// let number2 = +prompt("Enter")
// if (number1 > number2) {
//     console.log(number1 + " More than " + number2)
// } else if (number2 > number1) {
//     console.log(number2 + " More than " + number1)}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = +prompt(`Things`)
// let i = [`John`, 5, undefined, null];
// x = i
// x = x || "default"
// console.log(x)

//Последнее задание сидел думал-думал, так и не надумал, догоню на практике