const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elementsContainer = document.querySelector('.elements__list');

const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');

let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

const temp = document.querySelector('#elements-template').content;

function createInitialElements() {
    for (let i = 0; i < initialCards.length; i ++) {
        const cloneTemp = temp.cloneNode(true);
        cloneTemp.querySelector('.elements__item').style.backgroundImage = 'url(' + initialCards[i].link + ')';
        cloneTemp.querySelector('.elements__title').textContent = initialCards[i].name;
        elementsContainer.append(cloneTemp);
        console.log(cloneTemp);
    }
}

createInitialElements();

function popupIsOpen() {
    popup.classList.add('popup_is-open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function popupIsClosed() {
    popup.classList.remove('popup_is-open');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupIsClosed();
}

openPopup.addEventListener ('click', popupIsOpen);
closePopup.addEventListener ('click', popupIsClosed);
formElement.addEventListener ('submit', formSubmitHandler);
