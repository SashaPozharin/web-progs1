//шаблонные строки `` полностью повторяет текст и могут внедрять переменные используыя ${}

//циклы
//классический for
//for
//начинается с определенного момента

let fruits =['Apple','Banana', 'Mango', 'Pear']
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

//упрощенный for
//for in
//начиная с начала до конца
//let fruitsreversed = fruits.reverse()
//for (let i in fruitsreversed) {
//    console.log(fruitsreversed[i])
//}

//массивчики
//продвинутая работа с массивамми
//.foreach(ФУНКЦИЯ) обычный перебор массива без изменения самого массива
fruits.forEach(function (item, i){
    // item => элемент массива
    // i => индекс элемента
    console.log(`Фрукт ${item} в позиции ${i+1}`)

})

//.map(АНОНИМНАЯ_ФУНКЦИЯ) перебор массива с возможностью самого массива
let notEatable = fruits.map(function (item, i){
    // item => элемент массива
    // i => индекс элемента
    if (item == 'Mango'){
        item = "Candy"
    }
    //возвращаем измененный элемент
    return item

})
console.log(notEatable)

//домашка
//1)объявить массив boyClub и заполнить его 3 именами мальчиков и 2 именами девочек
//2)Создать функцию amongUs(boyClub), которая находит и выводит на экран сообщение по типу 'Этот traitor не из нашего клуба!'
//и заменяет человека на подходящий 
//Реализовать это через продвинутые итерации