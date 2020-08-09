"use strict";
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

// ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ. SPREAD ОПЕРАТОР

// let a = 5,
//   b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; // ссылка на существующий объект

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
// newArray[1] = "myp";
// // console.log(newArray);
// // console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "facebook"];
// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];
// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q };

// ОСНОВЫ ООП, ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЕ
// ООП- ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log('hello');
//   }
// };

// // const john = {
// //   health: 100
// // };

// // // Устаревший формат(1 способ)
// // // john.__proto__ = soldier;

// // // console.log(john.armor);

// // Object.setPrototypeOf(john, soldier);

// // еще способ(современнее)
// const john = Object.create(soldier);

// john.sayHello();

// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

// to string // любой тип данных в строку
// // 1)
// // console.log(typeof (String(null)));
// // 2)
// console.log(typeof (5 + '')); //конкатенация-сложение строки с другим типом данных
// const num = 5;
// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// // to Number // превратить любой тип данных в число

// // 1)
// console.log(typeof (Number('3')));
// // 2)
// console.log(typeof (+'5'));
// // 3)
// console.log(typeof (parseInt('15px', 10)));

// // to Boolean // превращение в логический тип данных
// // 1)
// let switcher = null;

// if (switcher) {
//   console.log('working...');
// }
// switcher = 1;
// if (switcher) {
//   console.log('working...');
// }

// // 2)
// console.log(typeof (Boolean('3')));

// // 3)

// console.log(!!'fdgdg');

// вопросы с собеседования
// 1)
// let x = 5;
// alert(x++); // верно

// 2)
// console.log([] + false - null + true); // решила

// 3)
// let y = 1,
//   x = y;
// y = 2;
// alert(x); // верно решила сама

// 4)

// console.log([] + 1 + 2); // верно решила

// 5)

// alert('1' [0]); // верно решила

// 6)

// console.log(2 && 1 && null && 0 && undefined);
//  решила сама неправильно
// ПРАВИЛО: "И" ЗАПИНАЕТСЯ НА ЛЖИ, ТАК КАК NULL, 0, UNDEFINED- ЭТО НИЧЕГО, А ПЕРВЫМ "НИЧЕГО" ЯВЛЯЕТСЯ NULL, ТО В КОНСОЛЬ ВОЗВРАЩАЕТСЯ NULL
// ИЛИ - ЗАПИНАЕТСЯ НА ПРАВДЕ
// 7)

// console.log(!!(1 && 2));
// console.log(1 && 2); // частично решила правильно
// (!!)- 2 восклицательных знака превращают типы данных в булиновые(логические)

// 8)

// alert(null || 2 && 3 || 4); // РЕШИЛА НЕПРАВИЛЬНО

// 9)
// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b); // решила, но думала что равны(устно), потом поняла, что не равны при помощи решения.

// 10)

// alert(+'Infinity'); // решила

// 11

// let a = 'Ежик';
// let b = 'яблоко';
// console.log("Ёжик" > "яблоко"); // решила

// 12)
// 0 || "" || 2 || undefined || true || falsе
// console.log(0 || "" || 2 || undefined || true || false); // решила правильно сама

// ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ
// DOM-DOCUMENT OBJECT MODULE

// const box = document.getElementById('box');

// console.log(box);

// const buttons = document.getElementsByTagName('button');
// console.log(buttons[1]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles[1]);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ

// const box = document.getElementById("box"),
//   buttons = document.getElementsByTagName("button"),
//   circles = document.getElementsByClassName("circle"),
//   hearts = document.querySelectorAll(".heart"),
//   oneHeart = document.querySelector(".heart"),
//   wrapper = document.querySelector(".wrapper");
// box.style.backgroundColor = "blue";
// // box.style.width = "415px";
// box.style.cssText = "background-color: blue; width: 500px;";

// buttons[1].style.borderRadius = "100%";
// circles[0].style.backgroundColor = "red";

// // for (let i = 0; i < hearts.length; i++) {
// //   hearts[i].style.backgroundColor = "blue";
// // }

// hearts.forEach((item) => {
//   item.style.backgroundColor = "blue";
// });

// const div = document.createElement("div");
// // const text = document.createTextNode("Тут был я"); // используется редко

// div.classList.add("black");

// wrapper.append(div);
// wrapper.appendChild(div);

// // wrapper.prepend(div);

// // hearts[0].before(div);
// // circles[1].after(div);
// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(buttons[1], hearts[1]);

// div.innerHTML = "<h1>hello world</h1>";

// // div.textContent = "hello";

// div.insertAdjacentHTML("afterend", "<h2>hello, Andrey</h2>");