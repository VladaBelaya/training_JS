' use strict ';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    inter = document.querySelector('.promo__interactive-list');
// adv[0].remove();
// adv[1].remove();
// adv[2].remove();
adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("./img/bg.jpg")';



inter.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    inter.innerHTML += `
    <li class="promo__interactive-item">${i+1}. 
                ${film}
                <div class="delete"></div>
              </li>
    `;
});


// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: &{item} внутри массива ${arr}`);
// });