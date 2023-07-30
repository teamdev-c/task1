"use strict";

const ids = [
    "js-greeting-recursion",
    "js-greeting-red",
    "js-greeting-blue",
    "js-greeting-green"
];

ids.forEach(id => {
    const greeting = document.getElementById(id);
    greeting.addEventListener("click", () => {
        console.log(greeting.innerHTML);
    })
});

