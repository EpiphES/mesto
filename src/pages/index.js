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
  avatarPopupSelector,
} from "../utils/constants.js";

//page rendering

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

//popups

const profileEditPopup = new PopupWithForm(
  handleSubmitProfile,
  profileEditPopupSelector
);
const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);
const showCardPopup = new PopupWithImage(imagePopupSelector);
const confirmPopup = new PopupWithConfirmation(
  handleConfirmDelete,
  confirmPopupSelector
);
const avatarPopup = new PopupWithForm(handleSubmitAvatar, avatarPopupSelector);

//validators

const cardFormValidator = new FormValidator(validatorConfig, cardAddPopup.form);
const profileFormValidator = new FormValidator(
  validatorConfig,
  profileEditPopup.form
);
const avatarFormValidator = new FormValidator(
  validatorConfig,
  avatarPopup.form
);

//set popup event listeners

profileEditPopup.setEventListeners();
cardAddPopup.setEventListeners();
showCardPopup.setEventListeners();
confirmPopup.setEventListeners();
avatarPopup.setEventListeners();

//enable validation

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//page render functions

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
    handleLikeClick: function () {
      if (this.isLiked()) {
        api
          .deleteLike(this.getCardId())
          .then((res) => {
            this.setLikeState(res);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .addLike(this.getCardId())
          .then((res) => {
            this.setLikeState(res);
          })
          .catch((err) => console.log(err));
      }
    },
    userId: userInfo.getUserId(),
  }).generateCard();

  cardsList.addItem(cardElement);
}

//popup openers

function handleOpenProfile() {
  profileEditPopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.cleanError();
  profileEditPopup.open();
}
function handleOpenCardAddPopup() {
  cardFormValidator.cleanError();
  cardAddPopup.open();
}
function handleOpenAvatarPopup() {
  cardFormValidator.cleanError();
  avatarPopup.open();
}

//form submitters

function handleSubmitProfile(formValues) {
  api
    .submitProfileInfo(formValues)
    .then(() => {
      userInfo.setUserInfo(formValues);
    })
    .catch((err) => console.log(err));
}
function handleSubmitCard(formValues) {
  api
    .submitCard(formValues)
    .then((res) => {
      addNewCard(res);
    })
    .catch((err) => console.log(err));
}
function handleConfirmDelete() {
  api
    .deleteCard(this.targetCard.getCardId())
    .then(() => {
      this.targetCard.handleDeleteCard();
      this.close();
    })
    .catch((err) => console.log(err));
}
function handleSubmitAvatar(formValues) {
  api
    .submitAvatar(formValues)
    .then((res) => {
      userInfo.setAvatar(res);
    })
    .catch((err) => console.log(err));
}

//event listeners

document
  .querySelector(profileEditButtonSelector)
  .addEventListener("click", handleOpenProfile);
document
  .querySelector(cardAddButtonSelector)
  .addEventListener("click", handleOpenCardAddPopup);
document
  .querySelector(profileAvatarSelector)
  .addEventListener("click", handleOpenAvatarPopup);

setProfileInfo();
setInitialCards();
