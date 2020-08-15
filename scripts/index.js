import Card from './Card.js';
import {initialCards} from './initial-cards.js';
import FormValidator from './FormValidator.js';

const object = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const elementsContainer = document.querySelector(".elements__list");
// кнопки открытия попап
const openPopupEdit = document.querySelector(".profile__edit-button");
const openPopupAdd = document.querySelector(".profile__add-button");

const popup = document.querySelector(".popup");
// модальные окна
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupPhotoContainer = document.querySelector(".popup_type_photo");

// кнопки закрытия модальных окон
const closePopupEditBtn = popupEdit.querySelector(".popup__close-button");
const closePopupAddBtn = popupAdd.querySelector(".popup__close-button");
const closePopupPhotoBtn = popupPhotoContainer.querySelector(
  ".popup__close-button"
);
// кнопки submit модальных окон
const submitPopupEdit = popupEdit.querySelector(".popup__submit-button");
const submitPopupAdd = popupAdd.querySelector(".popup__submit-button");

const title = popup.querySelector(".popup__title");

const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_job");
const placeInput = popupAdd.querySelector(".popup__input_type_place");
const linkInput = popupAdd.querySelector(".popup__input_type_link");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const temp = document.querySelector("#elements-template").content;

const cardImage = temp.querySelector('.element__item');
const cardCaption = temp.querySelector('.element__title');

const validationEditInput = new FormValidator(popupEdit, object);
const validationAddInput = new FormValidator(popupAdd, object);

validationEditInput.enableValidation();
validationAddInput.enableValidation();
 
function addUserCard(data) { 
  elementsContainer.prepend(data); 
}

// добавление начальных карточек
function addInitialCards() {
  initialCards.forEach((item) => {
    const card = new Card(item.link, item.name, '#elements-template');
    const cardElement = card.generateCard();
    elementsContainer.append(cardElement);
  });
}

// открытые попапов
function openPopup(popupElement) { 
  popupElement.classList.add("popup_is-open"); 
  document.addEventListener("keydown", closeByEsc); 
} 

// открытие попапа фото
function openPopupImage(link, name) {
  document.querySelector('.popup__photo').src = link;
  document.querySelector('.popup__caption').textContent = name;
  openPopup(popupPhotoContainer);
}


// закрытие попапов 
function closePopup(popupElement) { 
  popupElement.classList.remove("popup_is-open"); 
  document.removeEventListener("keydown", closeByEsc); 
  submitPopupEdit.disabled = true; 
  submitPopupAdd.disabled = true; 
}
 
// закрытие по Escape
function closeByEsc(evt) { 
  const openedPopup = document.querySelector(".popup_is-open"); 
  if (evt.keyCode === 27) { 
    closePopup(openedPopup); 
  } 
} 

// закрытие по overlay
function closeByOverlay(evt) {
  const openedPopup = document.querySelector(".popup_is-open"); 
  if (evt.target.classList.contains('popup_is-open')) {
    closePopup(openedPopup); 
  }
}

// открытие попапа редактирование профиля
function openEditProfile() {
  openPopup(popupEdit); 
  nameInput.value = profileName.textContent; 
  jobInput.value = profileJob.textContent; 
}

// открытие попапа добавления карточки
function openAddCard() {
  openPopup(popupAdd); 
  title.textContent = "Новое место"; 
}
 
closePopupEditBtn.addEventListener("click", function () { 
  closePopup(popupEdit); 
}); 
 
closePopupAddBtn.addEventListener("click", function () { 
  closePopup(popupAdd); 
  linkInput.value = ""; 
  placeInput.value = ""; 
}); 
 
closePopupPhotoBtn.addEventListener("click", function () { 
  closePopup(popupPhotoContainer); 
}); 

// сабмит изменения данных профиля
function submitEditProfile(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value; 
  closePopup(popupEdit); 
}
 
placeInput.addEventListener("input", function () { 
  placeInput.value = placeInput.value.replace(/[^0-9а-яА-ЯёЁ\s\.\,\?\!]/, ""); 
  if (!placeInput.value) { 
    alert("Пишите название на кириллице"); 
  } 
});

// сабмит добавления новой карточки
function submitAddCard(evt) {
  evt.preventDefault(); 
  const card = new Card(linkInput.value, placeInput.value, '#elements-template');
  const cardElement = card.generateCard();
  addUserCard(cardElement);
  linkInput.value = ""; 
  placeInput.value = ""; 
  closePopup(popupAdd); 
}

popupEdit.addEventListener('click', closeByOverlay);
popupAdd.addEventListener('click', closeByOverlay);
popupPhotoContainer.addEventListener('click', closeByOverlay);

openPopupEdit.addEventListener('click', openEditProfile);
submitPopupEdit.addEventListener('click', submitEditProfile);
openPopupAdd.addEventListener('click', openAddCard);
submitPopupAdd.addEventListener('click', submitAddCard);

addInitialCards();

export {openPopupImage};