import '../style.scss'

import { addHamburgerClickHandler } from "@/js/Burger";
import { addModalClickHandler } from "@/js/Modal";
import { addSliderBlock } from "@/js/components/slider/Slider";

// const SCREEN_RES = {
//     desktop: window.matchMedia( '(max-width: 1279px)' ),
//     desktab: window.matchMedia( '(max-width: 1175px)' ),
//     tablet: window.matchMedia( '(max-width: 767px)' ),
//     mobile: window.matchMedia( '(max-width: 640px)' ),
// }
// export { SCREEN_RES }

window.onload = function () {
    console.log('Hello Rolling Scopes!')

    // BURGER & MENU
    addHamburgerClickHandler();

    // SLIDER
    addSliderBlock();

    // MODAL WINDOW
    addModalClickHandler();
}






