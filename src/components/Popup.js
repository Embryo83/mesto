export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handlerEscClose = this._handlerEscClose.bind(this);
    this._closeByOverlay = this._closeByOverlay.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_is-open");
    document.addEventListener("keydown", this._handlerEscClose);
    this._popupSelector.addEventListener("click", this._closeByOverlay);
  }

  close() {
    this._popupSelector.classList.remove("popup_is-open");
    document.removeEventListener("keydown", this._handlerEscClose);
    this._popupSelector.removeEventListener("click", this._closeByOverlay);
  }

  _handlerEscClose(evt) {
    if (evt.keyCode === 27) {
      this.close();
    }
  }

  _closeByOverlay(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
