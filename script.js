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
    window.location.href = "file:///C:/Users/HP%20Prodesk%20600%20g2/Desktop/Desarrollo%20Web/Portafolio%20Desarrollo%20Web/3-Portafolio%20Ioslar%20Dev/Portfolio%20Page/portfolio.html";
})


