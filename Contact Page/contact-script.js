"use strict"

const whatsapp = document.querySelector(".whatsapp");
const instagram = document.querySelector(".instagram");
const youtube = document.querySelector(".youtube");
const email = document.querySelector(".email");

whatsapp.addEventListener("click", ()=>{
    window.location.href = "https://api.whatsapp.com/send?phone=59893513457&text=Hi!%20I%20come%20from%20the%20website,%20I%20want%20to%20make%20a%20site!"
})
instagram.addEventListener("click", ()=>{
    window.location.href = "https://www.instagram.com/ioslar_tech_desarrolloweb/"
})
youtube.addEventListener("click", ()=>{
    window.location.href = "https://www.youtube.com/c/IOSLARTECH?sub_confirmation=1"
})
email.addEventListener("click", ()=>{
    window.location.href = "mailto:ioslartech@gmail.com?Subject=I%C2%B4m%20coming%20from%20the%20website!%20"
})


