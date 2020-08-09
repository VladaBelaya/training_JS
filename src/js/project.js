' use strict ';

document.addEventListener('DOMContentLoaded', () => {
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
        inter = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type ="checkbox"]');
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, inter);
        }
        e.target.reset();
        if (favorite) {
            console.log('Добавляем любимый фильм');
        }




    });
    // adv[0].remove();
    // adv[1].remove();
    // adv[2].remove();
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };



    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("./img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };



    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i+1} 
                    ${film}
                    <div class="delete"></div>
                  </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);

            });
        });

    }
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, inter);


});


// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: &{item} внутри массива ${arr}`);
// });