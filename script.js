const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let filmTitle = prompt('Один из последних просмотренных фильмов?');
let filmRating = prompt('На сколько оцените его?');

personalMovieDB.movies[filmTitle] = filmRating;
console.log(personalMovieDB.movies);

filmTitle = prompt('Один из последних просмотренных фильмов?');
filmRating = prompt('На сколько оцените его?');

personalMovieDB.movies[filmTitle] = filmRating ;
console.log(personalMovieDB.movies);
