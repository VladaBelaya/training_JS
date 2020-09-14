const inputRub = document.querySelector('#rus'),
    inputUsd = document.querySelector('#usd')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'test.json')

    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send()
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)

        } else {
            inputUsd.value = 'Что-то пошло не так'
        }
    })
})