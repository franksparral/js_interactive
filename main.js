"use strict";

const categories = ["Юмор", "Хоррор", "Фантастика", "Драма", "Триллер"];
const films = [];

class Comment {
    constructor(text, author, stars) {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = categories[cat];
        this.budget = 0;
        this.expertStars = 3;
        this.comments = []
    }
    addComment(text, author, stars) {
        this.comments.push(new Comment(text, author, stars));
    }
    getAverageStars() {
        let sumStars = 0;
        this.comments.forEach(comment => sumStars += comment.stars);
        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

films.push(new Film("Титаник", 0));
films[0].addComment("очень милый фильм", "user", 4);
films[0].addComment("фильм не очень", "user", 1);
films.push(new Film("Один дома", 0));
films[1].addComment("очень смешной фильм", "user", 5);

films.push(new Film("Ужас", 1));
films.push(new Film("Гарри Поттер", 2));
films.push(new Film("Грустный фильм 1", 3));
films.push(new Film("Грустный фильм 2", 3));
films.push(new Film("Стрелялка", 4))

console.log(films[0].getAverageStars());

function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films) {
        if (film.category === cat) {
            newFilms.push(film);
        }
    }
    return newFilms;
}

document.addEventListener("DOMContentLoaded", function() {
    const films = getFilmsByCategory("Юмор");
    for (let film of films) {
        const newEl = document.createElement("div");
        newEl.classList.add("film");
        newEl.innerText = film.name;
        document.querySelector(".films").appendChild(newEl); /* Пишет здесь ошибку */
    }
})