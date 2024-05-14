import { navbarComponent } from "./navbar.js"
import { footerComponent } from "./footer.js"
import { cardComponent } from "./card.js"

let navContainer = document.querySelector('header')
let footerContainer = document.querySelector('footer')
let cardContainer = document.querySelector('#card')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navbarComponent
})

window.addEventListener('load', ()=>{
    footerContainer.innerHTML = footerComponent
})

window.addEventListener('load', ()=>{
    cardContainer.innerHTML = cardComponent
})

let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', ()=>{
    title.textContent = `${pageName}`
    document.title = pageName
})