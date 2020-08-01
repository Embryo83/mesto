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

function createCard(data) {
  const cloneTemp = temp.cloneNode(true);
  const cloneCard = cloneTemp.querySelector(".element__item");
  const cardTitle = cloneTemp.querySelector(".element__title");
  cloneCard.src = data.link;
  cloneCard.alt = data.name;
  cardTitle.textContent = data.name;
  return cloneTemp;
}

function addCard(data) {
  elementsContainer.append(createCard(data));
}

function addUserCard(data) {
  elementsContainer.prepend(createCard(data));
}

initialCards.forEach(addCard);

function openPopup(popupElement) {
  popupElement.classList.add("popup_is-open");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-open");
  document.removeEventListener("keydown", closeByEsc);
}

document.addEventListener("click", function (evt) {
  const openedPopup = document.querySelector(".popup_is-open");
  if (evt.target.classList.contains("popup")) {
    closePopup(openedPopup);
  }
});

function closeByEsc(evt) {
  const openedPopup = document.querySelector(".popup_is-open");
  if (evt.keyCode === 27) {
    closePopup(openedPopup);
  }
}

openPopupEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

openPopupAdd.addEventListener("click", function () {
  openPopup(popupAdd);
  title.textContent = "Новое место";
});

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

submitPopupEdit.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
});

placeInput.addEventListener("input", function () {
  placeInput.value = placeInput.value.replace(/[^0-9а-яА-ЯёЁ\s\.\,\?\!]/, "");
  if (!placeInput.value) {
    alert("Пишите название на кириллице");
  }
});

submitPopupAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  const cardData = {
    link: linkInput.value,
    name: placeInput.value,
  };
  addUserCard(cardData);
  linkInput.value = "";
  placeInput.value = "";
  closePopup(popupAdd);
});

elementsContainer.addEventListener("click", function (evt) {
  const click = evt.target;
  if (click.classList.contains("element__like-button")) {
    click.classList.toggle("element__like-button_active");
  }
  if (click.classList.contains("element__delete-button")) {
    click.closest(".element").remove();
  }
  if (click.className !== "element__item") {
    return;
  } else {
    openPopup(popupPhotoContainer);
    const container = click.closest("li");
    const caption = container.querySelector(".element__title");
    const pic = container.querySelector(".element__item");
    const link = pic.src;
    const popupImage = popupPhotoContainer.querySelector(".popup__photo");
    popupPhotoContainer.querySelector(".popup__caption").textContent =
      caption.textContent;
    popupImage.src = link;
    popupImage.alt = caption.textContent;
  }
});