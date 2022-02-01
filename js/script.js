/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Ы",
        "Азбука",
    ]
};
const promoBg = document.querySelector(".promo__bg");
const genre = document.querySelector(".promo__genre");
const list = document.querySelector(".promo__interactive-list");

//1 030
const advertising = document.querySelector(".promo__adv");
advertising.remove();
console.log(advertising);

//2 030
genre.textContent = "Драма";

//3 030
promoBg.style.backgroundImage = "url('img/bg.jpg')"; //заменить картинку фона
// promoBg.style.background = "url('ing/bg.jpg')"; //так тоже сработает

//04 030
list.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    list.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
        </li>`;
});

console.log(promoBg.innerHTML); //можно получить html код любого элемента
