const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block')
// console.log(btns[0].classList.length)
// console.log(btns[0].classList.add('red'))
// console.log(btns[0].classList.remove('blue'))
// console.log(btns[0].classList.toggle('blue'))
btns[0].addEventListener('click', () => {
    btns[0].classList.toggle('blue_active')
})
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('hello')
    }
})