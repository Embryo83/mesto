import "./index.css";
import Card from "../components/Card.js";
import { initialCards } from "../scripts/initial-cards.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupConfirm from "../components/PopupConfirm.js";

const object = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  errorLine: "popup__error",
};

// кнопки открытия попап
const openPopupEdit = document.querySelector(".profile__edit-button");
const openPopupAdd = document.querySelector(".profile__add-button");
const openPopupAvatarEdit = document.querySelector(".profile__avatar-button");

// модальные окна
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupAvatar = document.querySelector(".popup_type_avatar");

const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_job");
const placeInput = popupAdd.querySelector(".popup__input_type_place");
const linkInput = popupAdd.querySelector(".popup__input_type_link");
const profileAvatar = document.querySelector(".profile__avatar");

// let userId = '5955e23ed94608a68dcb0e03';

const apiConfig = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-15",
  token: "f1c23b59-12ef-41ca-b659-2fe3930a6862",
};

const userConfig = {
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
};
const user = new UserInfo(userConfig);
const openPopupImage = new PopupWithImage(".popup_type_photo");
const popupEditProfile = new PopupWithForm(
  ".popup_type_edit",
  editSubmitHandler
);
const popupAddCard = new PopupWithForm(".popup_type_add", addCardSubmitHandler);
const popupConfirmDelete = new PopupConfirm(
  ".popup_type_delete",
  confirmSubmitHandler
);
const popupChangeAvatar = new PopupWithForm(
  ".popup_type_avatar",
  avatarSubmitHandler
);
const api = new Api(apiConfig);
let userData = {};
let cardsGrid = {};
const getUserData = api.getUserInfo();
const getCards = api.getInitialCards();

const getData = [getUserData, getCards];
Promise.all(getData)
  .then((data) => {
    userData = data[0];
    const cardsData = data[1];
    user.setUserInfo({ name: userData.name, job: userData.about });
    profileAvatar.src = userData.avatar;
    cardsGrid = new Section(
      {
        items: cardsData,
        renderer: (item) => {
          const card = new Card(
            item,
            "#elements-template",
            userData._id,
            openCardImage,
            openPopupConfirm,
            likeHandler
          );
          const cardElement = card.generateCard();
          cardsGrid.addItem(cardElement);
        },
      },
      ".elements__list"
    );
    cardsGrid.renderItems();

    // слушатели попапов
    popupChangeAvatar.setEventListeners();
    popupConfirmDelete.setEventListeners();
    popupEditProfile.setEventListeners();
    popupAddCard.setEventListeners();
    openPopupImage.setEventListeners();

    // валидаторы форм
    const validationEditInput = new FormValidator(popupEdit, object);
    validationEditInput.enableValidation();
    const validationAddInput = new FormValidator(popupAdd, object);
    validationAddInput.enableValidation();
    const validationAvatarInput = new FormValidator(popupAvatar, object);
    validationAvatarInput.enableValidation();

    openPopupEdit.addEventListener("click", function () {
      popupEditProfile.open();
      const userInfo = user.getUserInfo();
      nameInput.value = userInfo.name;
      jobInput.value = userInfo.job;
      validationEditInput.resetValidation();
    });

    openPopupAdd.addEventListener("click", function () {
      popupAddCard.open();
      validationAddInput.resetValidation();
    });

    openPopupAvatarEdit.addEventListener("click", function () {
      popupChangeAvatar.open();
      validationAvatarInput.resetValidation();
    });
  })
  .catch((err) => {
    console.log(err);
  });

// функция открытия попапа подтверждения удаления карточки
function openPopupConfirm(id, evt) {
  popupConfirmDelete.cardId = id;
  popupConfirmDelete.elem = evt.target.parentElement;
  popupConfirmDelete.open();
}

// функция удаления карточки
function confirmSubmitHandler() {
  popupConfirmDelete._confirmBtn.textContent = "Удаление...";
  api
    .deleteCard(popupConfirmDelete.cardId)
    .then((_) => {
      popupConfirmDelete.elem.remove();
      popupConfirmDelete.elem = null;
      popupConfirmDelete.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupConfirmDelete._confirmBtn.textContent = "Да";
    });
}

// функция обновления аватара
function avatarSubmitHandler(data) {
  popupChangeAvatar._submitBtn.textContent = "Сохранение...";
  api
    .editAvatar(data)
    .then((res) => {
      profileAvatar.src = res.avatar;
      this.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupChangeAvatar._submitBtn.textContent = "Сохранить";
    });
}

// функция лайков
function likeHandler(id, evt) {
  if (evt.target.classList.contains("element__like-button_active")) {
    api
      .deleteLike(id)
      .then((res) => {
        evt.target.nextElementSibling.textContent = res.likes.length;
        evt.target.classList.remove("element__like-button_active");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .addLike(id)
      .then((res) => {
        evt.target.nextElementSibling.textContent = res.likes.length;
        evt.target.classList.add("element__like-button_active");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// функция открытия изображения карточки
function openCardImage(name, link) {
  openPopupImage.open(name, link);
}

// функция нажатия на сабмит профиля
function editSubmitHandler(data) {
  popupEditProfile._submitBtn.textContent = "Сохранение...";
  api
    .editProfile(data.name, data.job)
    .then((res) => {
      user.setUserInfo({ name: res.name, job: res.about });
      this.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile._submitBtn.textContent = "Сохранить";
    });
}

// функция добавления новой карточки
function addCardSubmitHandler(data) {
  popupAddCard._submitBtn.textContent = "Сохранение...";
  api
    .addNewCard(data.place, data.link)
    .then((res) => {
      const card = new Card(
        {
          name: res.name,
          link: res.link,
          likes: res.likes,
          owner: res.owner,
          _id: res._id,
        },
        "#elements-template",
        userData._id,
        openCardImage,
        openPopupConfirm,
        likeHandler
      );
      const cardElement = card.generateCard();
      cardsGrid.addNewItem(cardElement);
      this.close();
      placeInput.value = "";
      linkInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard._submitBtn.textContent = "Сохранить";
    });
}