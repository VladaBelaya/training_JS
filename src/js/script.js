'use strict';
// const num = 50;
// // if (num < 49) {
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log("Слишком много");
// // } else {
// //     console.log('OK');
// // }
// switch (num) {
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     case 50:
//         console.log('верно');
//         break;
//     default:
//         console.log('Не в этот раз');
// }
// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);
// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         // break; //прерывает цикл, когда он достиг нужного значения
//         // continue; //не прерывает цикл, но пропускает указанное не нужное значение
//     }
// }

// ФУНКЦИИ
// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage('Hello, World ');

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(2, 3));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('hello');
// };
// logger();

// const calc = (a, b) => a + b;

// МЕТОДЫ И СВОЙСТВА У СТРОК И ЧИСЕЛ
// const str = "test";
// const arr = [1, 2, 3];
// console.log(str.toUpperCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const log = "hello, world";
// console.log(log.slice(6, 11));

// const arm = "привет, как дела?";
// console.log(arm.slice(8, 18));

// const prime = "Андрей вечно всем недоволен";
// // console.log(prime.slice(0, 6));
// // console.log(prime.substring(0, 6));
// console.log(prime.substr(0, 6));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

// callback-функция
// function first() {
//     // do something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('and me');
// }
// learnJS('JavaScript', done);

// ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('test');
//     }
// };
// // options.makeTest();

// // console.log(Object.keys(options).length); // !!!!!!ВАЖНО
// // console.log(options.name);
// // delete options.name;
// // let counter = 0;
// // for (let key in options) {
// //     if (typeof (options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     } else {
// //         console.log(`свойство ${key} имеет значение ${options[key]}`);
// //         counter++;

// //     }
// // }
// // console.log(counter);

// const {
//     border,
//     bg
// } = options.colors;

// МАССИВЫ И ПСЕВДОМАССИВЫ

// const arr = [10, 1, 4, 123, 51];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// // arr.pop();
// // arr.push(123);
// // console.log(arr);

// // 1 СПОСОБ
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // 2 СПОСОБ
// // for (let value of arr) {
// //     console.log(value);
// // }

// // 3 СПОСОБ
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: &{item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));