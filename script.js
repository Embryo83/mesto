const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.form');

let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function togglePopup() {
    popup.classList.toggle('popup_is-open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

openPopup.addEventListener ('click', togglePopup);
closePopup.addEventListener ('click', togglePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_is-open');
}

formElement.addEventListener ('submit', formSubmitHandler);
