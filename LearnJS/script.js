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
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b);
