// 4 способа вызова функций

// 1 способ - просто вызвать ф-цию

// function showThis(a, b) {
//     console.log(this)

//     function sum() {
//         console.log(this)
//         return a + b
//     }
//     console.log(sum())
// }
// showThis(4, 5)
// 2 способ - создание объекта
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this)
    }
}
obj.sum()
// 1) Обычная функция: this = window, но если стоит use strict, то будет undefiend
// 2) контекст у методов объекта- сам объект