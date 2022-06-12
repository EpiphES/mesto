import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  validatorConfig,
  cardsContainerSelector,
  cardTemplateSelector,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  profileEditButtonSelector,
  cardAddButtonSelector,
  profileEditPopupSelector,
  cardAddPopupSelector,
  imagePopupSelector,
  confirmPopupSelector,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-43/",
  headers: {
    authorization: "1bffef03-9768-4f1e-8e85-138575e6daba",
    "Content-Type": "application/json",
  },
});

const cardsList = new Section(addNewCard, cardsContainerSelector);

const userInfo = new UserInfo({
  userNameSelector: profileNameSelector,
  userAboutSelector: profileAboutSelector,
  userAvatarSelector: profileAvatarSelector,
});

const profileEditPopup = new PopupWithForm(
  handleSubmitProfile,
  profileEditPopupSelector
);
profileEditPopup.setEventListeners();

const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);
cardAddPopup.setEventListeners();

const showCardPopup = new PopupWithImage(imagePopupSelector);
showCardPopup.setEventListeners();

const confirmPopup = new PopupWithConfirmation(
  handleConfirmDelete,
  confirmPopupSelector
);
confirmPopup.setEventListeners();

const cardFormValidator = new FormValidator(validatorConfig, cardAddPopup.form);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(
  validatorConfig,
  profileEditPopup.form
);
profileFormValidator.enableValidation();

function setProfileInfo() {
  api
    .getProfileInfo()
    .then((profileInfo) => {
      userInfo.setProfile(profileInfo);
    })
    .catch((err) => console.log(err));
}

function setInitialCards() {
  api
    .getInitialCards()
    .then((cards) => {
      cardsList.renderItems(cards.reverse());
    })
    .catch((err) => console.log(err));
}

function addNewCard(cardInfo) {
  const cardElement = new Card({
    cardInfo,
    templateSelector: cardTemplateSelector,
    handleCardClick: function () {
      showCardPopup.open({ title: this._card.name, link: this._card.link });
    },
    handleDeleteClick: function () {
      confirmPopup.open(this);
    },
    userId: userInfo.getId(),
  }).generateCard();

  cardsList.addItem(cardElement);
}

function handleOpenProfile() {
  profileEditPopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.cleanError();
  profileEditPopup.open();
}

function handleSubmitProfile(formValues) {
  fetch("https://mesto.nomoreparties.co/v1/cohort-43/users/me", {
    method: "PATCH",
    headers: {
      authorization: "1bffef03-9768-4f1e-8e85-138575e6daba",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  })
    .then((data) => {
      console.log(data);
      userInfo.setUserInfo(formValues);
    })
    .catch((err) => console.log(err));
}

function handleOpenCardAddPopup() {
  cardFormValidator.cleanError();
  cardAddPopup.open();
}

function handleSubmitCard(formValues) {
  addNewCard({ name: formValues.title, link: formValues.link, likes: [] });

  fetch("https://mesto.nomoreparties.co/v1/cohort-43/cards", {
    method: "POST",
    headers: {
      authorization: "1bffef03-9768-4f1e-8e85-138575e6daba",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: formValues.title, link: formValues.link }),
  });
}

function handleConfirmDelete() {
  console.log(this.targetCard);
  api
    .deleteCard(this.targetCard.getCardId())
    .then(() => {
      this.targetCard.handleDeleteCard();
      this.close();
    })
    .catch((err) => console.log(err));
}

document
  .querySelector(profileEditButtonSelector)
  .addEventListener("click", handleOpenProfile);

document
  .querySelector(cardAddButtonSelector)
  .addEventListener("click", handleOpenCardAddPopup);

setProfileInfo();
setInitialCards();
