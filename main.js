/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scripts_initial_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _components_PopupConfirm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);










var object = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  errorLine: "popup__error"
}; // кнопки открытия попап

var openPopupEdit = document.querySelector(".profile__edit-button");
var openPopupAdd = document.querySelector(".profile__add-button");
var openPopupAvatarEdit = document.querySelector(".profile__avatar-button"); // модальные окна

var popupEdit = document.querySelector(".popup_type_edit");
var popupAdd = document.querySelector(".popup_type_add");
var popupAvatar = document.querySelector(".popup_type_avatar");
var nameInput = popupEdit.querySelector(".popup__input_type_name");
var jobInput = popupEdit.querySelector(".popup__input_type_job");
var placeInput = popupAdd.querySelector(".popup__input_type_place");
var linkInput = popupAdd.querySelector(".popup__input_type_link");
var profileAvatar = document.querySelector(".profile__avatar"); // let userId = '5955e23ed94608a68dcb0e03';

var apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
  token: 'f1c23b59-12ef-41ca-b659-2fe3930a6862'
};
var userConfig = {
  profileName: '.profile__title',
  profileJob: '.profile__subtitle'
};
var user = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"](userConfig);
var openPopupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_type_photo');
var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_edit', editSubmitHandler);
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_add', addCardSubmitHandler);
var popupConfirmDelete = new _components_PopupConfirm_js__WEBPACK_IMPORTED_MODULE_9__["default"]('.popup_type_delete', confirmSubmitHandler);
var popupChangeAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_avatar', avatarSubmitHandler);
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"](apiConfig);
var userData = {};
var cardsGrid = {};
var getUserData = api.getUserInfo();
var getCards = api.getInitialCards();
var getData = [getUserData, getCards];
Promise.all(getData).then(function (data) {
  userData = data[0];
  var cardsData = data[1];
  user.setUserInfo({
    "name": userData.name,
    "job": userData.about
  });
  profileAvatar.src = userData.avatar;
  cardsGrid = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    items: cardsData,
    renderer: function renderer(item) {
      var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](item, '#elements-template', userData._id, openCardImage, openPopupConfirm, likeHandler);
      var cardElement = card.generateCard();
      cardsGrid.addItem(cardElement);
    }
  }, '.elements__list');
  cardsGrid.renderItems(); // слушатели попапов

  popupChangeAvatar.setEventListeners();
  popupConfirmDelete.setEventListeners();
  popupEditProfile.setEventListeners();
  popupAddCard.setEventListeners();
  openPopupImage.setEventListeners(); // валидаторы форм

  var validationEditInput = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupEdit, object);
  validationEditInput.enableValidation();
  var validationAddInput = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupAdd, object);
  validationAddInput.enableValidation();
  var validationAvatarInput = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupAvatar, object);
  validationAvatarInput.enableValidation();
  openPopupEdit.addEventListener('click', function () {
    popupEditProfile.open();
    var userInfo = user.getUserInfo();
    nameInput.value = userInfo.name;
    jobInput.value = userInfo.job;
    validationEditInput.resetValidation();
  });
  openPopupAdd.addEventListener('click', function () {
    popupAddCard.open();
    validationAddInput.resetValidation();
  });
  openPopupAvatarEdit.addEventListener('click', function () {
    popupChangeAvatar.open();
    validationAvatarInput.resetValidation();
  });
}).catch(function (err) {
  console.log(err);
}); // функция открытия попапа подтверждения удаления карточки

function openPopupConfirm(id, evt) {
  popupConfirmDelete.cardId = id;
  popupConfirmDelete.elem = evt.target.parentElement;
  popupConfirmDelete.open();
} // функция удаления карточки


function confirmSubmitHandler() {
  popupConfirmDelete._confirmBtn.textContent = 'Удаление...';
  api.deleteCard(popupConfirmDelete.cardId).then(function (_) {
    popupConfirmDelete.elem.remove();
    popupConfirmDelete.elem = null;
    popupConfirmDelete.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupConfirmDelete._confirmBtn.textContent = 'Да';
  });
} // функция обновления аватара


function avatarSubmitHandler(data) {
  var _this = this;

  popupChangeAvatar._submitBtn.textContent = 'Сохранение...';
  api.editAvatar(data).then(function (res) {
    profileAvatar.src = res.avatar;

    _this.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupChangeAvatar._submitBtn.textContent = 'Сохранить';
  });
} // функция лайков


function likeHandler(id, evt) {
  if (evt.target.classList.contains('element__like-button_active')) {
    api.deleteLike(id).then(function (res) {
      evt.target.nextElementSibling.textContent = res.likes.length;
      evt.target.classList.remove('element__like-button_active');
    }).catch(function (err) {
      console.log(err);
    });
  } else {
    api.addLike(id).then(function (res) {
      evt.target.nextElementSibling.textContent = res.likes.length;
      evt.target.classList.add('element__like-button_active');
    }).catch(function (err) {
      console.log(err);
    });
  }
} // функция открытия изображения карточки


function openCardImage(name, link) {
  openPopupImage.open(name, link);
} // функция нажатия на сабмит профиля


function editSubmitHandler(data) {
  var _this2 = this;

  popupEditProfile._submitBtn.textContent = "Сохранение...";
  api.editProfile(data.name, data.job).then(function (res) {
    user.setUserInfo({
      name: res.name,
      job: res.about
    });

    _this2.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupEditProfile._submitBtn.textContent = 'Сохранить';
  });
} // функция добавления новой карточки


function addCardSubmitHandler(data) {
  var _this3 = this;

  popupAddCard._submitBtn.textContent = 'Сохранение...';
  api.addNewCard(data.place, data.link).then(function (res) {
    var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      name: res.name,
      link: res.link,
      likes: res.likes,
      owner: res.owner,
      _id: res._id
    }, '#elements-template', userData._id, openCardImage, openPopupConfirm, likeHandler);
    var cardElement = card.generateCard();
    cardsGrid.addNewItem(cardElement);

    _this3.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupAddCard._submitBtn.textContent = 'Сохранить';
  });
  placeInput.value = '';
  linkInput.value = '';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(data, cardSelector, myId, openCardImage, openPopupConfirm, likeHandler) {
    _classCallCheck(this, Card);

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

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(cardImage) {
      var _this = this;

      this._card.querySelector('.element__like-button').addEventListener('click', function (evt) {
        _this._likeHandler(_this._cardId, evt);
      });

      cardImage.addEventListener('click', function () {
        return _this._openCardImage(_this._name, _this._link);
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var _this2 = this;

      this._card = this._getTemplate();

      var elemImage = this._card.querySelector('.element__item');

      var elemName = this._card.querySelector('.element__title');

      var sumLikes = this._card.querySelector('.element__like-counter');

      elemImage.src = this._link;
      elemImage.alt = this._name;
      elemName.textContent = this._name;
      sumLikes.textContent = this._likes.length;

      if (this._likes.some(function (like) {
        return like._id === _this2._myId;
      })) {
        this._card.querySelector('.element__like-button').classList.add('element__like-button_active');
      }

      if (this._myId === this._owner._id) {
        this._card.querySelector('.element__delete-button').addEventListener("click", function (evt) {
          _this2._openPopupConfirm(_this2._cardId, evt);
        });
      } else {
        this._card.querySelector('.element__delete-button').remove();
      }

      this._setEventListeners(elemImage);

      return this._card;
    }
  }]);

  return Card;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCards", function() { return initialCards; });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(formElement, settings) {
    _classCallCheck(this, FormValidator);

    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._errorLine = settings.errorLine;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

      this._toggleButtonState(this._inputList);

      this.resetValidation();

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState(_this._inputList);
        });
      });
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      var buttonElement = this._formElement.querySelector(this._submitButtonSelector);

      if (this._hasInvalidInput(this._inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      this._toggleButtonState();

      var inputData = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      inputData.forEach(function (input) {
        input.classList.remove(_this2._inputErrorClass);
      });
      var errorData = Array.from(this._formElement.querySelectorAll('.popup__error'));
      errorData.forEach(function (error) {
        error.classList.remove(_this2._errorClass);
        error.textContent = "";
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      var formList = Array.from(document.querySelectorAll(this._formSelector));
      formList.forEach(function (formElement) {
        formElement.addEventListener("submit", function (evt) {
          evt.preventDefault();
        });
      });

      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._items.forEach(function (items) {
        _this._renderer(items);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(elem) {
      this._containerSelector.append(elem);
    }
  }, {
    key: "addNewItem",
    value: function addNewItem(elem) {
      this._containerSelector.prepend(elem);
    }
  }]);

  return Section;
}();



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithImage; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._image = document.querySelector('.popup__photo');
    _this._caption = document.querySelector('.popup__caption');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._image.src = link;
      this._caption.alt = name;
      this._caption.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupSelector = document.querySelector(popupSelector);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupSelector.classList.add('popup_is-open');

      document.addEventListener('keydown', this._handlerEscClose.bind(this));

      this._popupSelector.addEventListener('click', this._closeByOverlay.bind(this));
    }
  }, {
    key: "close",
    value: function close() {
      this._popupSelector.classList.remove("popup_is-open");

      document.removeEventListener('keydown', this._handlerEscClose.bind(this));

      this._popupSelector.removeEventListener('click', this._closeByOverlay.bind(this));
    }
  }, {
    key: "_handlerEscClose",
    value: function _handlerEscClose(evt) {
      if (evt.keyCode === 27) {
        this.close();
      }
    }
  }, {
    key: "_closeByOverlay",
    value: function _closeByOverlay(evt) {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._closeButton = this._popupSelector.querySelector('.popup__close-button');

      this._closeButton.addEventListener('click', function () {
        _this.close();
      });
    }
  }]);

  return Popup;
}();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithForm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, formSubmitHandler) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitBtn = _this._popupSelector.querySelector('.popup__submit-button');
    _this._formSubmitHandler = formSubmitHandler;
    _this._popupForm = _this._popupSelector.querySelector('.popup__form');
    _this._formSubmit = _this._formSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputList = this._popupForm.querySelectorAll('.popup__input');
      this._formValues = {};

      this._inputList.forEach(function (item) {
        _this2._formValues[item.name] = item.value;
      });

      return this._formValues;
    }
  }, {
    key: "_formSubmit",
    value: function _formSubmit(evt) {
      evt.preventDefault();
      this._inputValues = this._getInputValues();

      this._formSubmitHandler(this._inputValues);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupForm.addEventListener('submit', this._formSubmit);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._popupForm.reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileName = _ref.profileName,
        profileJob = _ref.profileJob;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userData = {};
      userData.name = this._name.textContent;
      userData.job = this._job.textContent;
      return userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          job = _ref2.job;
      this._name.textContent = name;
      this._job.textContent = job;
    }
  }]);

  return UserInfo;
}();



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        token = _ref.token;

    _classCallCheck(this, Api);

    this._baseUrl = baseUrl;
    this._token = token;
  }

  _createClass(Api, [{
    key: "checkRes",
    value: function checkRes(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      }
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      }).then(this.checkRes);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: "GET",
        headers: {
          authorization: this._token
        }
      }).then(this.checkRes);
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(name, link) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this.checkRes);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(this.checkRes);
    }
  }, {
    key: "addLike",
    value: function addLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(id), {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      }).then(this.checkRes);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(this.checkRes);
    }
  }, {
    key: "editProfile",
    value: function editProfile(name, about) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this.checkRes);
    }
  }, {
    key: "editAvatar",
    value: function editAvatar(url) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: url.link
        })
      }).then(this.checkRes);
    }
  }]);

  return Api;
}();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupConfirm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupConfirm, _Popup);

  var _super = _createSuper(PopupConfirm);

  function PopupConfirm(popupSelector, handleSubmit) {
    var _this;

    _classCallCheck(this, PopupConfirm);

    _this = _super.call(this, popupSelector);
    _this._confirmBtn = _this._popupSelector.querySelector('.popup__submit-button_type_confirm');
    _this._handleSubmit = handleSubmit;
    return _this;
  }

  _createClass(PopupConfirm, [{
    key: "open",
    value: function open(card) {
      _get(_getPrototypeOf(PopupConfirm.prototype), "open", this).call(this);

      this._card = card;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._confirmBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this2._handleSubmit(_this2._card);

        _this2.close();
      });

      _get(_getPrototypeOf(PopupConfirm.prototype), "setEventListeners", this).call(this);
    }
  }]);

  return PopupConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })
/******/ ]);