export default class Card {
  constructor(
    data,
    cardSelector,
    myId,
    openCardImage,
    openPopupConfirm,
    likeHandler
  ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._owner = data.owner;
    this._openCardImage = openCardImage;
    this._likeHandler = likeHandler;
    this._openPopupConfirm = openPopupConfirm;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _setEventListeners(cardImage) {
    this._card
      .querySelector(".element__like-button")
      .addEventListener("click", (evt) => {
        this._likeHandler(this._cardId, evt);
      });
    cardImage.addEventListener("click", () =>
      this._openCardImage(this._name, this._link)
    );
  }

  generateCard() {
    this._card = this._getTemplate();
    const elemImage = this._card.querySelector(".element__item");
    const elemName = this._card.querySelector(".element__title");
    const sumLikes = this._card.querySelector(".element__like-counter");

    elemImage.src = this._link;
    elemImage.alt = this._name;
    elemName.textContent = this._name;
    sumLikes.textContent = this._likes.length;
    if (this._likes.some((like) => like._id === this._myId)) {
      this._card
        .querySelector(".element__like-button")
        .classList.add("element__like-button_active");
    }

    if (this._myId === this._owner._id) {
      this._card
        .querySelector(".element__delete-button")
        .addEventListener("click", (evt) => {
          this._openPopupConfirm(this._cardId, evt);
        });
    } else {
      this._card.querySelector(".element__delete-button").remove();
    }
    this._setEventListeners(elemImage);
    return this._card;
  }
}