import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._submitBtn = this._popupSelector.querySelector(
      ".popup__submit-button"
    );
    this._formSubmitHandler = formSubmitHandler;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._formSubmit = this._formSubmit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((item) => {
      this._formValues[item.name] = item.value;
    });
    return this._formValues;
  }

  _formSubmit(evt) {
    evt.preventDefault();
    this._inputValues = this._getInputValues();
    this._formSubmitHandler(this._inputValues);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._formSubmit);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}