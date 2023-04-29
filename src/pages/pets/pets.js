import '../style.scss'

// import { PETS_DATA, createCardPetTemplate } from "../../js/Card.js";
// import { addHamburgerClickHandler } from "../../js/Burger.js";


// window.onload = function () {
//     console.log('Hello Rolling Scopes!')
//
//     // BURGER & MENU
//     addHamburgerClickHandler();
// }


// import { Card } from "../../js/Card.js";
// import { data } from "../../js/Pets.js";
//
// const elementsPets = {
//     hamburgerNav: document.querySelector('.burger_btn'),
//     menu: document.querySelector('.burger-menu'),
//     bgMenu: document.querySelector('.bg_dark'),
//     body: document.querySelector('body')
// }
//
// window.onload = function () {
//     console.log('Hello Rolling Scopes!')
//
//     // HAMBURGER & MENU
//     addHamburgerClickHandler();
//
//     // POP-UP
//     renderArticlesToDom();
// }
//
// // HAMBURGER & MENU
//
// const addHamburgerClickHandler = () => {
//     elementsPets.hamburgerNav.addEventListener('click', e => {
//         e.stopPropagation();
//         toggleMenu();
//     });
//
//     document.addEventListener('click', e => {
//         let target = e.target;
//         let its_hamburger = target === elementsPets.hamburgerNav;
//         let menu_is_active = elementsPets.menu.classList.contains('active');
//
//         if (!its_hamburger && menu_is_active) {
//             e.stopPropagation();
//             toggleMenu();
//         }
//     })
// }
//
// const toggleMenu = () => {
//     elementsPets.hamburgerNav.classList.toggle('active');
//     elementsPets.menu.classList.toggle('active');
//     elementsPets.bgMenu.classList.toggle('active');
//     elementsPets.body.classList.toggle('fix');
// }
//
//
// // POP-UP
// const renderArticlesToDom = () => {
//     const friendsSlider = getFriendsSlider();
//     generateArrCards(data).forEach(card => {
//         friendsSlider.append(card.generateCard())
//     })
// }
//
// const getFriendsSlider = () => {
//     const friendsSliderContainer = document.querySelector('.friends__slider');
//     friendsSliderContainer.innerHTML = '';
//     return friendsSliderContainer;
// }
//
// const generateArrCards = (data) => {
//     let arrCards = [];
//     data.forEach(card => {
//         arrCards.push(new Card(card))
//     })
//     return arrCards;
// }