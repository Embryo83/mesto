import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._confirmBtn = this._popupSelector.querySelector(
      ".popup__submit-button_type_confirm"
    );
    this._handleSubmit = handleSubmit;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    this._confirmBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._card);
    });
    super.setEventListeners();
  }
}

