import './index.css';
import Card from '../components/Card.js';
import {initialCards} from '../scripts/initial-cards.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const object = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  errorLine: "popup__error"
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

// определение карточки
function getCard(link, name) {
  const card = new Card(link, name, temp, handlerCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

// добавление начальных карточек
const cards = new Section({
  items: initialCards,
  renderer: (item) => {
    cards.addItem(getCard(item.link, item.name));
  }
}, elementsContainer)

cards.renderItems();

// открытие попапа фото
const openPopupImage = new PopupWithImage(popupPhotoContainer);
openPopupImage.setEventListeners();

function handlerCardClick (link, name) {
  openPopupImage.open(link, name);
}

const user = new UserInfo({
  name: profileName,
  job: profileJob
});

// открытие попапа редактирование профиля
const openEditProfile = new PopupWithForm(popupEdit, () => {
  user.setUserInfo(nameInput, jobInput);
  openEditProfile.close();
});

// открытие попапа добавления карточки
const openAddCard = new PopupWithForm(popupAdd, (link, name) => {
  cards.addItem(getCard(linkInput.value, placeInput.value));
  openAddCard.close();
});

openEditProfile.setEventListeners();
openAddCard.setEventListeners();

openPopupEdit.addEventListener('click', function () {
  openEditProfile.open();
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
  validationEditInput.resetValidation();
});

openPopupAdd.addEventListener('click', function () {
  openAddCard.open();
  validationAddInput.resetValidation();
});