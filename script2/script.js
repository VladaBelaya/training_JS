const now = new Date('2020-05-01');
// new Date.parse('2020-05-01')
// SET
console.log(now.setHours(18))
console.log(now)
// GET
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getUTCHours())

let start = new Date()

for (let i = 0; i < 100000; i++) {
    let some = i ** 3
}

let end = new Date()

alert(`цикл отработал за ${end - start} миллисекунд`)