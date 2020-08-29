export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector('.popup__close-button');
  }

  open() {
    this._popupSelector.classList.add('popup_is-open');
    this._popupSelector.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_is-open");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handlerEscClose(evt) {
    if (evt.keyCode === 27) { 
        this.close(); 
      } 
  }

  _closeByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        this.close();
    }
}

  setEventListeners() {
    document.addEventListener('keydown', this._handlerEscClose.bind(this));
    document.addEventListener('click', this._closeByOverlay.bind(this));
    this._closeButton.addEventListener('click', () => {
        this.close();
    });
  }

}