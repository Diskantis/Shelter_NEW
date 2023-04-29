// MODAL WINDOW

import { PETS_DATA } from "./Card.js";


const MODAL_ATTRIBUTE = {
    modalPetsCard: document.querySelector('.card-pet'),
    modalCover: document.querySelector('.cover-modal'),
    modalCoverBg: document.querySelector('.cover__modal-bg'),
    body: document.querySelector('body')
}


function addModalClickHandler() {
    document.addEventListener( 'click', ( event => {
        if (event.target.closest('.card-pet')) {
            toggleModal()
        }
    }))
}

function toggleModal() {
    MODAL_ATTRIBUTE.modalCoverBg.classList.toggle('active');
    MODAL_ATTRIBUTE.body.classList.toggle('fix');

}

export { addModalClickHandler }


function createModalPetsTemplate() {
    let modal = document.createElement( "div" );
    modal.classList.add( "modal-window" );
    modal.innerHTML = `
      <div class="modal-window__close">&#10006</div>
      <div class="modal-window__container">
        <img class="card-pet__img" src="${PETS_DATA.img}" alt="${PETS_DATA.name}">
        <div class="pets-description">
          <h3 class="pets-description__name">${PETS_DATA.name}</h3>
          <h4 class="pets-description__breed">${PETS_DATA.type} - ${PETS_DATA.breed}</h4>
          <p class="paragraph-modal pets-description__resume">${PETS_DATA.description}</p>
          <ul class="pets-specifications">
            <li>Age:<span> ${PETS_DATA.age}</span></li>
            <li>Inoculations:<span> ${PETS_DATA.inoculations}</span></li>
            <li>Diseases:<span> ${PETS_DATA.diseases}</span></li>
            <li>Parasites:<span> ${PETS_DATA.parasites}</span></li>
          </ul>
        </div>
      </div>
      `;
    MODAL_ATTRIBUTE.modalCover.append( modal );
}


// import { DATA_PETS } from "./general.js";
const cover = document.querySelector( '.cover-modal' );

const currPet = {
    name: "",
    img: "",
    type: "",
    breed: "",
    description: "",
    age: "",
    inoculations: [],
    diseases: [],
    parasites: [],
};

const MODAL_PETS = {
    lock: false,
    timeout: 900,

    activeModalPets() {
        this.lock = true;
        document.body.classList.add( 'noscroll' );
        createModalPetsTemplate();
        cover.classList.add( 'cover-modal_activ' );
        const modalWindow = document.querySelector( '.modal-window' );

        setTimeout( function () {
            modalWindow.classList.add( 'modal-window_activ' );
        }, 100 );

        setTimeout( function () {
            MODAL_PETS.lock = false;
        }, MODAL_PETS.timeout );
    },

    deactivateModalPets() {
        this.lock = true;
        let windowClose = document.querySelector( '.modal-window_activ' );
        windowClose.style.transform = 'rotate3d(1, 1, 1, -120deg) scale(0)';
        setTimeout( function () {
            cover.classList.remove( 'cover-modal_activ' );
            cover.innerHTML = "";
            MODAL_PETS.lock = false;
            document.body.classList.remove( 'noscroll' );
        }, MODAL_PETS.timeout );
    },
}

// const createModalPetsTemplate = () => {
//     let modal = document.createElement( "div" );
//     modal.classList.add( "modal-window" );
//     modal.innerHTML = `
//       <div class="modal-window__close">&#10006</div>
//       <div class="modal-window__container">
//         <div class="pets-img">
//           <picture>
//             <img src="${currPet.img}" alt="${currPet.name}">
//           </picture>
//         </div>
//         <div class="pets-description">
//           <h3 class="pets-description__name">${currPet.name}</h3>
//           <h4 class="pets-description__breed">${currPet.type} - ${currPet.breed}</h4>
//           <p class="paragraph-modal pets-description__resume">${currPet.description}</p>
//           <ul class="pets-specifications">
//             <li>Age:<span> ${currPet.age}</span></li>
//             <li>Inoculations:<span> ${currPet.inoculations}</span></li>
//             <li>Diseases:<span> ${currPet.diseases}</span></li>
//             <li>Parasites:<span> ${currPet.parasites}</span></li>
//           </ul>
//         </div>
//       </div>
//       `;
//     cover.append( modal );
// }

document.addEventListener( 'click', ( event => {
    if ( ( event.target.closest( '.slider__card' ) && MODAL_PETS.lock == false ) ) {
        let currCard = event.target.closest('.slider__card');
        let namePet = currCard.children[1].innerText;
        let Pet =  DATA_PETS.filter(x => x.name === namePet)[0];

        for (let i in Pet) {
            currPet[i] = Pet[i];
        }
        MODAL_PETS.activeModalPets();
    }
    if ( ( ( event.target.classList.contains( 'cover-modal_activ' ) || event.target.classList.contains( 'modal-window__close' ) ) && MODAL_PETS.lock == false ) ) {
        MODAL_PETS.deactivateModalPets();
    }
} ) );

export { MODAL_PETS };