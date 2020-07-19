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
// кнопки открытия попап
const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');
const openPopupPhoto = document.querySelector('.elements__item');

const popup = document.querySelector('.popup');
// модальные окна
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupPhoto = document.querySelector('.popup_type_photo');
// кнопки закрытия модальных окон
const closePopupEditBtn = popupEdit.querySelector('.popup__close-button');
const closePopupAddBtn = popupAdd.querySelector('.popup__close-button');
const closePopupPhotoBtn = popupPhoto.querySelector('.popup__close-button');
// кнопки submit модальных окон
const submitPopupEdit = popupEdit.querySelector('.popup__submit-button');
const submitPopupAdd = popupAdd.querySelector('.popup__submit-button');

const formElement = popup.querySelector('.popup__form');
const title = popup.querySelector('.popup__title');
const submit = popup.querySelector('.popup__submit-button');

let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let placeInput = document.querySelector('.popup__input_type_place');
let linkInput = document.querySelector('.popup__input_type_link');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

const temp = document.querySelector('#elements-template').content;

function createInitialElements() {
    for (let i = 0; i < initialCards.length; i ++) {
        const cloneTemp = temp.cloneNode(true);
        cloneTemp.querySelector('.elements__item').src = initialCards[i].link;
        cloneTemp.querySelector('.elements__title').textContent = initialCards[i].name;
        elementsContainer.append(cloneTemp);
    }
}

createInitialElements();

function openPopup(popupElement) {
    popupElement.classList.add('popup_is-open');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-open');
}

openPopupEdit.addEventListener ('click', function () {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

openPopupAdd.addEventListener ('click', function () {
    openPopup(popupAdd);
    title.textContent = 'Новое место';
});

closePopupEditBtn.addEventListener ('click', function () {
    closePopup(popupEdit);
})

closePopupAddBtn.addEventListener ('click', function() {
    closePopup(popupAdd);
})

closePopupPhotoBtn.addEventListener ('click', function () {
    closePopup(popupPhoto);
})

elementsContainer.addEventListener ('click', function (evt) {
    if (evt.target.className !== 'elements__delete-button') return;
    evt.target.closest('.elements__list-element').remove();
});

elementsContainer.addEventListener ('click', function (evt) {
    if (evt.target.className !== 'elements__like-button') return;
    evt.target.classList.toggle('elements__like-button_active');
});

submitPopupEdit.addEventListener ('click', function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
})

submitPopupAdd.addEventListener ('click', function (evt) {
    evt.preventDefault();
    const cloneTemp = temp.cloneNode(true);
    const pic = cloneTemp.querySelector('.elements__item');
    pic.src = linkInput.value;
    cloneTemp.querySelector('.elements__title').textContent = placeInput.value;
    elementsContainer.prepend(cloneTemp);
    closePopup(popupAdd);
})

elementsContainer.addEventListener ('click', function (evt) {
    const click = evt.target;
    if (click.className !== 'elements__item') return;
    openPopup(popupPhoto);
    const container = click.closest('li');
    const caption = container.querySelector('.elements__title');
    const pic = container.querySelector('.elements__item');
    const link = pic.src;
    popupPhoto.querySelector('.popup__caption').textContent = caption.textContent;
    popupPhoto.querySelector('.popup__photo').src = link;
    popupPhoto.querySelector('.popup__photo').alt = caption.textContent
})