/* Задания на урок: 030

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок: 033

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
    

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
    const advertising = document.querySelector(".promo__adv");
    const btn = document.querySelector(".enter__data");
    const input = document.querySelector(".adding__input");
    const checkbox = document.querySelector(".checkbox");



    //1 030
    advertising.remove();

    //2 030
    genre.textContent = "Драма";

    //3 030
    promoBg.style.backgroundImage = "url('img/bg.jpg')"; //заменить картинку фона
    // promoBg.style.background = "url('ing/bg.jpg')"; //так тоже сработает

    //04 030
    function outListFilms() {
        list.innerHTML = "";
        movieDB.movies.forEach((item, i, arr) => { //05 033
            arr.splice(i, 1, item.toLowerCase());
        });
        movieDB.movies.sort();
        movieDB.movies.forEach((item, i) => {
            list.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${item}
                    <div class="delete"></div>
                </li>`;
        });
        console.log("outListFilms");
        deleteElements();
    }

    outListFilms();

    //01 033
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        cutTo21();
        if (input.value) {
            movieDB.movies.push(input.value);
            input.value = "";
            outListFilms();
            if (checkbox.checked) { //04 033
                console.log('Любимый фильм');
            }
        }
        
    }); 

    //02 033
    function cutTo21() {
        if (input.value.length > 21) {
            input.value = `${input.value.slice(0, 21)}...`;
        }
    }

    //03 033
    function deleteElements() {
        const elementsToBeRemoved = document.querySelectorAll(".delete");

        elementsToBeRemoved.forEach((item, i) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                movieDB.movies.splice(i, 1);
                outListFilms();
            });
        });
        console.log("deleteElements");
    }
}); //код внутри будет выполняться только тогда, когда ДОМ структура будет загружена
