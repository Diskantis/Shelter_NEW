// BURGER & MENU

const BURGER_MENU = {
    burgerBtn: document.querySelector('.burger_btn'),
    burgerMenu: document.querySelector('.burger-menu'),
    burgerMenuBg: document.querySelector('.burger-menu_bg'),
    body: document.querySelector('body')
}

function addHamburgerClickHandler() {
    document.addEventListener('click', event => {
        if (event.target.closest('.burger_btn') ||
            event.target.closest('.burger-menu') ||
            event.target.closest('.burger-menu_bg')) {
            toggleBurgerMenu();
        }
    })
}

function toggleBurgerMenu() {
    BURGER_MENU.burgerBtn.classList.toggle('active');
    BURGER_MENU.burgerMenu.classList.toggle('active');
    BURGER_MENU.burgerMenuBg.classList.toggle('active');
    BURGER_MENU.body.classList.toggle('fix');
}

export { addHamburgerClickHandler };