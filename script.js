const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.form');

let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

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
