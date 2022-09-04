const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');



const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов.')
} else if (10 < personalMovieDB.count && personalMovieDB.count < 30) {
    console.log('Вы классический зритель.')
} else if (personalMovieDB.count > 30){
    console.log('Вы киноман.')
} else console.log('Произошла ошибка.')

let filmTitle, filmRating;

let count = 2;

while (count>0){
    filmTitle = prompt('Один из последних просмотренных фильмов?','');
    filmRating = prompt('На сколько оцените его?','');
    if(filmTitle.length < 50 || filmTitle !== ''){
        personalMovieDB.movies[filmTitle] = filmRating;
        count--;
    }
}

console.log(personalMovieDB);
