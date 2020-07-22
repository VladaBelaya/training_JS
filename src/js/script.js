// 1 практика
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
//     a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {},
//     genres: [],
//     privat: false
// };
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);


//  2 ПРАКТИКА
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// a = prompt('Один из последних просмотренных фильмов?', ''),
// b = prompt('На сколько оцените его?', ''),
// c = prompt('Один из последних просмотренных фильмов?', ''),
// d = prompt('На сколько оцените его?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');

    } else {
        console.log('error');
        i--;
    }

}



personalMovieDB.count = numberOfFilms;
switch (true) {
    case personalMovieDB.count > 0 && personalMovieDB.count < 10:
        console.log('Просмотрено довольно мало фильмов');
        break;
    case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
        console.log('Вы классический зритель');
        break;
    case personalMovieDB.count > 30:
        console.log('Вы киноман');
        break;
    default:
        console.log('Произошла ошибка');




}
console.log(personalMovieDB);