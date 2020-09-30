// const JS = "Я JavaScript";
// // alert(JS);
// // выведет я JavaScript
// let admin;
// let Name = "John";
// admin = Name;
// // alert(admin)
// // выведет John
// let earth;
// let storageUser;

// Name = "Andrew";
// alert(`hello ${1}`)
// выведет hello 1
// alert(`hello ${'name'}`)
// выведет hello name
// alert(`hello, ${Name}`)
// выведет "Hello, Andrew"
// const nameUser = prompt("Как тебя зовут?", "");
// alert(nameUser);

// Постфиксная и префиксные формы

// let a = 1,
//   b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// console.log(c, d);

// // Результат присваивания
// let A = 2;

// let x = 1 + (A *= 2);
// // A = 4
// // x = 5
// console.log(A, x);

//  Преобразование типов
// const q = "" + 1 + 0; // 10
// const w = "" - 1 + 0; // -1
// const e = true + false; // 1
// const r = 6 / "3"; // 2
// const t = "2" * "3"; //6
// const y = 4 + 5 + "px"; //'9px'
// const u = "$" + 4 + 5; //$9
// const i = "4" - 2; // 2
// const o = "4px" - 2; // NaN
// const p = 7 / 0; // infinity
// const s = "  -9  " + 5; // -4
// const g = "  -9  " - 5; // -14
// const f = null + 1; // 1
// const h = undefined + 1; // NaN
// const j = " \t \n" - 2; // NAN

// console.log(q, w, e, r, t, y, u, i, o, p, s, g, f, h, j);

// Исправьте сложение
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 3
// или
// alert(Number(a) + Number(b));
// или
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b);

// // Операторы сравнения

// const c = 5 > 4 // +

// const d = "ананас" > "яблоко" // -

// const f = "2" > "12" // +

// const j = undefined == null // +

// const k = undefined === null // -

// const i = null == "\n0\n" // -

// const y = null === +"\n0\n" // -

// Задачи с if

// if ("0") {
//     alert('Привет');
// } // выведется

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// const question = prompt('Какое «официальное» название JavaScript?', '')
// if (question == 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Не знаете? ECMAScript!')
// }

// задача 3
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// const user = prompt('Как ваше настроение? >1-хорошее. 0-нормальное, <1- плохое', '')

// if (user > 0) {
//     alert('1')
// } else if (user < 0) {
//     alert('-1')
// } else {
//     alert('0')
// }

// Перепишите 'if' в '?'
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let result;
// let a = 3
// let b = 2
// a + b < 4 ?
//     result = 'Мало':
//     result = 'Много'
// console.log(result)

// Перепишите 'if..else' в '?'
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.
// let message;
// const login = prompt('Кто вы? - Сотрудник -Директор -кто-то другой', '')
// login == 'Сотрудник' ? message = 'Привет' :
//     login == 'Директор' ? message = 'Здравствуйте' :
//     login == '13' ? message = 'Введите логин' :
//     message = 'Введите логин';
// alert(message)

let avatar = document.querySelector('.avatar'),
    pers = document.querySelectorAll('.block')

pers.forEach((chemp) => {
    chemp.addEventListener('click', () => {
        pers.forEach(chemp => {
            chemp.addEventListener('click', () => {
                for (const item of pers) {
                    item.classList.remove('click')
                }
                chemp.classList.add('click')
                avatar.classList.add('click')
            })

        })
    })

})
// if (chemp.contains != 'click') {
//     chemp.classList.add('click')
// } else {
//     chemp.classList.remove('click')
// }