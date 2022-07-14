"use strict"

const image = document.querySelector(".main-gallery");
const button = document.querySelector(".main-cta");
let height = image.clientHeight;
image.style.top = `calc(100vh - ${height}px)`;

window.addEventListener("resize", ()=>{
    height = image.clientHeight;
    image.style.top = `calc(100vh - ${height}px)`;
   })

button.addEventListener("click", ()=>{
    window.location.href = "https://ioslar.github.io/Ioslar-Tech-Web/Portfolio%20Page/portfolio.html";
})


