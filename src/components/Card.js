export default class Card {
    constructor(link, name, cardSelector, handlerCardClick) {
      this._link = link;
      this._name = name;
      this._cardSelector = cardSelector;
      this._handlerCardClick = handlerCardClick;
    }
  
    _getTemplate() {
      return this._cardSelector.cloneNode(true);
    }

    _likeToggle(evt) {
      evt.target.classList.toggle('element__like-button_active');
    }

    _deleteCard(evt) {
      evt.target.parentElement.remove();
      this._cardSelector = null;
    };

    _setEventListeners() {
      this._card.querySelector('.element__like-button')
      .addEventListener('click',this._likeToggle);
      this._card.querySelector('.element__delete-button')
      .addEventListener('click', this._deleteCard);
      this._card.querySelector('.element__item')
      .addEventListener('click', () => {
         this._handlerCardClick(this._link, this._name);
      });
    }

    generateCard() {
      this._card = this._getTemplate();
      const elemImage = this._card.querySelector('.element__item');
      const elemName = this._card.querySelector('.element__title');
      elemImage.src = this._link;
      elemImage.alt = this._name;
      elemName.textContent = this._name;
      this._setEventListeners();
      return this._card;
    }
  }