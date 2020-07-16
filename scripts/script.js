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

const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');
const title = popup.querySelector('.popup__title');
const submit = popup.querySelector('.popup__submit-button');

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
        cloneTemp.querySelector('.elements__like-button').addEventListener ('click', function (evt) {
            evt.target.classList.toggle('elements__like-button_active');
        })
        elementsContainer.append(cloneTemp);
    }
    const deleteButton = elementsContainer.querySelector('.elements__delete-button');
    elementsContainer.addEventListener ('click', function (evt) {
        if (event.target.className !== 'elements__delete-button') return;
        evt.target.closest('.elements__list-element').remove();
    });
}

createInitialElements();

function popupEditIsOpen() {
    popup.classList.add('popup_is-open');
    title.textContent = 'Редактировать профиль';
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function popupAddIsOpen() {
    popup.classList.add('popup_is-open');
    title.textContent = 'Новое место';
    nameInput.value = 'Название';
    jobInput.value = 'Ссылка на картинку';
    formElement.classList.add('popup__form_type_add-element');
}

function popupIsClosed() {
    popup.classList.remove('popup_is-open');
    formElement.classList.remove('popup__form_type_add-element');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    const formAddElement = popup.querySelector('.popup__form_type_add-element');
    if (formAddElement) {
    const cloneTemp = temp.cloneNode(true);
    cloneTemp.querySelector('.elements__item').style.backgroundImage = 'url(' + jobInput.value + ')';
    cloneTemp.querySelector('.elements__title').textContent = nameInput.value;
    cloneTemp.querySelector('.elements__like-button').addEventListener ('click', function (evt) {
        evt.target.classList.toggle('elements__like-button_active');
    })
    elementsContainer.prepend(cloneTemp);
    } else {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    }
    popupIsClosed();
}

openPopupEdit.addEventListener ('click', popupEditIsOpen);
openPopupAdd.addEventListener ('click', popupAddIsOpen);
closePopup.addEventListener ('click', popupIsClosed);
formElement.addEventListener ('submit', formSubmitHandler);