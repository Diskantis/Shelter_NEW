// SLIDER
// import '../../pages/style.css'
import './slider.css'

import { petsJSON } from "../../../assets/data/Pets.js"
// import { PETS_DATA, createCardPetTemplate } from "../Card.js";

const CssClasses = {
    SLIDER: 'slider-block',
    WRAPPER: 'slider__wrapper',
    CARD_CONTAINER: 'card__container',
    CARD_GROUP: 'card__group',
    ANIMATE_LEFT: 'animate__left',
    ANIMATE_RIGHT: 'animate__right',
    NO_TRANSITION: 'container__no-transition',
}

function addSliderBlock() {
    const slider = createComponent(petsJSON);
    const ourFriendsBlock = document.querySelector('.our-friends__title');
    // const ourFriendsBlock = document.querySelector('.our-friends-block');
    // ourFriendsBlock.innerHTML = '';
    ourFriendsBlock.after(slider)
}

function createComponent(petsJSON) {
    if(!Array.isArray(petsJSON)) {
        throw TypeError(`Slider error. Pets array is invalid.`);
    }

    const component = document.createElement('section')
    component.classList.add(CssClasses.SLIDER)



    return component;
}

export { addSliderBlock };