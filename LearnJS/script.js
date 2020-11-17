
// TO DO LIST

// const data = [
//   {task: 'Сгенерировать проект', status: true, createDate: '16.10.2020'},
//   {task: 'Создать компоненты', status: true, createDate: '16.10.2020'},
//   {task: 'Описать роутинг', status: true, createDate: '16.10.2020'},
//   {task: 'Завершить приложение', status: false, createDate: '16.10.2020'},
// ]

// const input = document.querySelector('#input')
// const ul = document.querySelector('ul')
// const btn = document.querySelector('button')
// const checkbox = document.querySelector('#checkbox')
// let strData

// render()

// btn.addEventListener('click', add)

//   function render() {
//     strData = ''
//     data.forEach((x, i) => {
//       strData += `<li >
//             <div ${x.status ? 
//               'style="text-decoration: line-through"': 
//               'style="text-decoration: none'}">${x.task}</div>
//             <div>${x.createDate}</div>
//             <input type="checkbox" ${x.status ? 'checked="true"': ''}">
//             <button data-btn="${i}">Х</button>
//          </li>
        
//       `
//     })
//   ul.innerHTML = strData
//   }

// function add() {
//   if (input.value.trim()) {
//     const todo = {
//       task: input.value,
//       status: false,
//       createDate: new Date().toLocaleDateString()
//     }
//     data.push(todo)
//     render()
//   }  
//   input.value = ''
// }

// ul.addEventListener('click', event => {
//   if (event.target.dataset.btn) {
//     data.splice(event.target.dataset.btn, 1)
//     render()
//   }
// })




// ПРАКТИКА. ЧАСТЬ 1, ЧАСТЬ 2

// let numberOfFilm;
// start()

// const personalMovieDB = {
//   count: numberOfFilm,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// }


// rememberMyFilms()
// showMyDB()
// detectPersonalLevel ()
// writeYourGenres()


//     function start () {
//       while(numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
//       numberOfFilm = +prompt('Сколько фильмов Вы уже посмотрели?')
//       }
//     }

// function rememberMyFilms () {
//   for (let i = 0; i < 2; i++ ) {
//     const l  = prompt('Один из последних просмотренных фильмов?', ''),
//           r  = +prompt('На сколько оцените его?', '');
  
//     if (l != '' && l != null && l.length < 50 && r != '' && r != null) {
//     personalMovieDB.movies[l] = r
//     } else {
//     i--
//     }
//   }
// }


// function detectPersonalLevel () {
//   switch (true) {
//     case numberOfFilm >= 0 && numberOfFilm < 10:
//       alert('просмотрено довольно мало фильмов')
//       break;
//     case numberOfFilm >= 10 && numberOfFilm <= 30:
//       alert('вы классический зритель')
//       break;
//     case numberOfFilm > 30:
//       alert('вы киноман')
//       break;
//     default:
//       alert('произошла ошибка')
  
//   }
// }

// // console.log(personalMovieDB.count)

// function showMyDB () {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB)
//   }
// }


// function writeYourGenres () {
//   for (let i = 0; i < 3; i++) {
//     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`)
//   }
// }





// to do list

const data = [
  {task: 'Сгенерировать проект', status: true, createDate: '16.10.2020'},
  {task: 'Создать компоненты', status: true, createDate: '16.10.2020'},
  {task: 'Описать роутинг', status: true, createDate: '16.10.2020'},
  {task: 'Завершить приложение', status: false, createDate: '16.10.2020'},
]

const input = document.querySelector('#input')
const ul = document.querySelector('ul')
const btn = document.querySelector('button')
const checkbox = document.querySelector('#checkbox')
let strData = ''


function render(arr) {
  let strData = ''
  arr.forEach((task, i) => {
    strData += `
    <li>
        <div>${task.task}</div>
        <div>${task.createDate}</div>
        <button data-del="${i}">del</button>
    </li>
    `
  }) 
  ul.innerHTML = strData
}
render(data)

function addTask() {
  if(input.value.trim()){
  strData = ''
  const toDo = {
    task: input.value,
    status: false,
    createDate: new Date().toLocaleDateString()
  }
  data.push(toDo)
  ul.insertAdjacentHTML('afterbegin', toDo)
  render(data)
  console.log(data)
  }
  input.value = ''
}

btn.addEventListener('click', addTask)

function delTask(e) {
  if(e.target.dataset.del) {
   console.log(e.target)
   data.splice(e.target.dataset.del, 1)
   render(data)
  }
}

ul.addEventListener('click', delTask)


// callback-fanction

// function learnJS(lang, callback) {
//   console.log(`i learn ${lang}`)
//   callback()
// }

// learnJS('JS', function() {
//   console.log(1)
// })

// Деструктуризация объекта

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   color: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('test')
//   }
// }
// options.makeTest()

// const {border, bg} = options.color
// console.log(border)
// // let counter = 0
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//     console.log(`свойство ${i} имеет значение ${options[key][i]}`)
//     counter++
//     }
//   } else {
//   console.log(`свойство ${key} имеет значение ${options[key]}`)
//   counter++
//   }
// }

// массивы и псевдомассивы

// const arr = [1, 23, 3, 64, 8]
// arr.sort(compareNum)
// console.log(arr)
// function compareNum (a, b) {
//   return a - b
// }
// arr.forEach((item, i) => console.log(`${i}: ${item} внутри массива ${arr}`))
// методы работающие с концом массива

// arr.pop() // удаляет последний элемент
// arr.push(10)
// console.log(arr)
//  перебор массива
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for (let value of arr) {
//   console.log(value)
// }

// ОТЛИЧИЕ FOR OF ОТ FOREACH - В ФОР ОФ РАБОТАЮТ BREAK AND CONTINUE, А В ФОР ИЧ НЕТ

// const str = prompt('', '')
// const products = str.split(', ')
// products.sort()
// console.log(products.join('; '))

// передача по ссылке или по значению

// let a = 5,
//     b = a
// b = b + 5
// console.log(b)
// console.log(a)

// const obj = {
//   a: 5,
//   b: 1
// }
// const copyObj = obj

// copyObj.a = 10
// console.log(copyObj)
// console.log(obj)

// function copy(mainObj) {
//   let objCopy = {}
//   let key
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key]
//   }
//   return objCopy
// }
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// }

// const newNumbers = copy(numbers)

// newNumbers.a = 10
// console.log(newNumbers)
// console.log(numbers)

// const add = {
//   d: 17,
//   e: 20
// }

// const clone = Object.assign({}, add)
// clone.d = 20
// console.log(clone)
// console.log(add)

// const oldArray = ['a', 'b', 'c'],
//       newArray = oldArray.slice()

// newArray[1] = 'f' 
// console.log(newArray)
// console.log(oldArray)

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//    internet = [...video, ...blogs, 'vk', 'facebook']

// console.log(internet)

// function log (a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// const num = [2, 5, 7]

// log(...num)

// const array = ['a', 'b']
// const newArr = [...array]

// const q = {
//   one: 1,
//   two: 2
// }
// const newObj = {...q}

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('hello')
  }
}
const john = Object.create(soldier)

john.sayHello()
