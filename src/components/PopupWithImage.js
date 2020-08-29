import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._image = document.querySelector('.popup__photo');
    this._caption = document.querySelector('.popup__caption'); 
  }

  open(link, name) {
    this._image.src = link;
    this._caption.alt = name;
    this._caption.textContent = name;
    super.open();
  }
}