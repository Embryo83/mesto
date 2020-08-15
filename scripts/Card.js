import {openPopupImage} from './script.js';

export default class Card {
    constructor(link, name, cardSelector) {
      this._link = link;
      this._name = name;
      this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
      const cloneCard = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
      return cloneCard;
    }

    _likeToggle(evt) {
      evt.target.classList.toggle('element__like-button_active');
    }

    _deleteCard(evt) {
      evt.target.parentElement.remove();
    };

    _cardEventListeners() {
      this._card.querySelector('.element__like-button')
      .addEventListener('click',this._likeToggle);
      this._card.querySelector('.element__delete-button')
      .addEventListener('click', this._deleteCard);
    }

    generateCard() {
      this._card = this._getTemplate();
      const elemImage = this._card.querySelector('.element__item');
      elemImage.src = this._link;
      elemImage.alt = this._name;
      this._card.querySelector('.element__title').textContent = this._name;
      elemImage.addEventListener('click', () => {
        openPopupImage(this._link, this._name);
      });
      this._cardEventListeners();
      return this._card;
    }
  }