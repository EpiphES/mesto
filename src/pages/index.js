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

const profilePopup = new PopupWithForm(
  handleSubmitProfile,
  profileEditPopupSelector
);
const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);
const imagePopup = new PopupWithImage(imagePopupSelector);
const confirmPopup = new PopupWithConfirmation(
  handleConfirm,
  confirmPopupSelector
);
const avatarPopup = new PopupWithForm(handleSubmitAvatar, avatarPopupSelector);

//validators

const cardFormValidator = new FormValidator(validatorConfig, cardAddPopup.form);
const profileFormValidator = new FormValidator(
  validatorConfig,
  profilePopup.form
);
const avatarFormValidator = new FormValidator(
  validatorConfig,
  avatarPopup.form
);

//page render functions

function loadPage() {
  api
    .getProfileInfo()
    .then((profileInfo) => {
      userInfo.setProfile(profileInfo);
      return userInfo.getUserId();
    })
    .then((userId) => {
      setInitialCards(userId);
    })
    .catch((err) => console.log(err));
}
function setInitialCards(userId) {
  api
    .getInitialCards()
    .then((cards) => {
      cardsList.renderItems(cards.reverse(), userId);
    })
    .catch((err) => console.log(err));
}
function addNewCard(cardInfo, userId) {
  const cardElement = new Card({
    cardInfo,
    templateSelector: cardTemplateSelector,
    handleCardClick,
    handleDelete,
    handleLike,
    userId,
  }).generateCard();

  cardsList.addItem(cardElement);
}

//click callbacks for card

function handleCardClick({ name, link }) {
  imagePopup.open({ name, link });
}
function handleDelete(card) {
  confirmPopup.open(card);
}
function handleLike(card) {
  if (card.isLiked()) {
    api
      .deleteLike(card.getCardId())
      .then((res) => {
        card.setLikeState(res);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .addLike(card.getCardId())
      .then((res) => {
        card.setLikeState(res);
      })
      .catch((err) => console.log(err));
  }
}

//popup openers

function openProfilePopup() {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  profilePopup.open();
}
function openCardAddPopup() {
  cardFormValidator.resetValidation();
  cardAddPopup.open();
}
function openAvatarPopup() {
  cardFormValidator.resetValidation();
  avatarPopup.open();
}

//form submitters

function handleSubmitProfile(formValues) {
  profilePopup.renderLoading(true);
  api
    .submitProfileInfo(formValues)
    .then(() => {
      userInfo.setUserInfo(formValues);
      profilePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => profilePopup.renderLoading(false));
}
function handleSubmitCard(formValues) {
  cardAddPopup.renderLoading(true);
  api
    .submitCard(formValues)
    .then((res) => {
      addNewCard(res, userInfo.getUserId());
      cardAddPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => cardAddPopup.renderLoading(false, "Cоздать"));
}
function handleConfirm(targetCard) {
  api
    .deleteCard(targetCard.getCardId())
    .then(() => {
      targetCard.handleDeleteCard();
      confirmPopup.close();
    })
    .catch((err) => console.log(err));
}
function handleSubmitAvatar(formValues) {
  avatarPopup.renderLoading(true);
  api
    .submitAvatar(formValues)
    .then((res) => {
      userInfo.setAvatar(res);
      avatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      avatarPopup.renderLoading(false, "Сохранить");
    });
}

//set popup event listeners

profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();
confirmPopup.setEventListeners();
avatarPopup.setEventListeners();

//enable validation

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//event listeners

document
  .querySelector(profileEditButtonSelector)
  .addEventListener("click", openProfilePopup);
document
  .querySelector(cardAddButtonSelector)
  .addEventListener("click", openCardAddPopup);
document
  .querySelector(profileAvatarSelector)
  .addEventListener("click", openAvatarPopup);

loadPage();
