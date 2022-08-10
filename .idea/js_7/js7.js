// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let items = ['hello world', 'lorem ipsum', 'javascript is cool'];
// items.length
// console.log(items)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hello = `hello world`
// console.log(hello.toUpperCase())
//
// let lorem = `lorem ipsum`
// console.log(lorem.toUpperCase())
//
// let js = `javascript is cool`
// console.log(js.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let hello = `HELLO WORLD`
// console.log(hello.toLowerCase())
//
// let lorem = `LOREM IPSUM`
// console.log(lorem.toLowerCase())
//
// let js = `JAVASCRIPT IS COOL`
// console.log(js.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// clear = str.trim()
// console.log(clear)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let split = 'Ревуть воли як ясла повні';
// console.log(split.split(' '))



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nmbr= [10,8,-7,55,987,-1011,0,1050,0]
// let str=nmbr.map(x=> x+'')
// console.log(str)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3]
// let sort = nums.sort((n1, n2)=>{
// return n1-n2
// })
// console.log(sort)

// let nums = [11,21,3]
// let sort = nums.sort((n1, n2)=>{
//     return n2-n1
// })
// console.log(sort)



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// let sort =coursesAndDurationArray.sort((n1,n2)=>{return n2.monthDuration-n1.monthDuration;})
// console.log(sort)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
    // {title: 'JavaScript Complex', monthDuration: 5},
    // {title: 'Java Complex', monthDuration: 6},
    // {title: 'Python Complex', monthDuration: 6},
    // {title: 'QA Complex', monthDuration: 4},
    // {title: 'FullStack', monthDuration: 7},
    // {title: 'Frontend', monthDuration: 4}]

// let filtredcoures=coursesAndDurationArray.filter(function (value){
//     return value.monthDuration > 5;
// })
// console.log(filtredcoures)


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},]

// let search =cards.filter(item=>item.value === "Ace")
// console.log(search)

// let nmbr =cards.filter(item=>item.value === 6)
// console.log(nmbr)

// let color =cards.filter(item=>item.color === "red")
// console.log(color)

// let buba =cards.filter(item=>item.cardSuit === "diamonds")
// console.log(buba)
//

// cards.map((valued)=>{
//     if (valued.value > 9 || valued['value'][1])  //говнокод, насколько понимаю
//         console.log(valued)
// })

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let arr = cards.reduce((akb, card) => {
//
//     if (card.cardSuit === 'clubs') {
//         akb.clubs.push(card);
//     }
//     if (card.cardSuit === 'diamonds') {
//         akb.diamonds.push(card);
//     }
//     if (card.cardSuit === 'hearts') {
//         akb.hearts.push(card);
//     }
//     if (card.cardSuit === 'spades') {
//         akb.spades.push(card);
//     }
//     return akb
// }, {clubs: [], diamonds: [], hearts: [], spades: []});
// console.log(arr)

