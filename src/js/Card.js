// let response = await fetch( '../../assets/data/pets.json' );
// const PETS_DATA = await response.json();
//
//
// const createCardPetTemplate = (data_card) => {
//     let cardPet = document.createElement('article');
//     cardPet.className = 'friend__card';
//     cardPet.innerHTML = `
//       <img class="card-pet__img" src="${PETS_DATA[data_card].img}" alt="${PETS_DATA[data_card].name}">
//       <span class="card-pet__name">${PETS_DATA[data_card].name}</span>
//       <a class="card-pet__btn-link"><div class="btn btn_card">Learn more</div></a>
//     `;
//     return cardPet;
// }
//
// export { PETS_DATA, createCardPetTemplate };