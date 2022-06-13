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

//validation

const formValidators = {};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  console.log(formList);
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);

    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

enableValidation(validatorConfig);

//page render functions

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([profileInfo, cards]) => {
    userInfo.setUserInfo(profileInfo);
    cardsList.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));

function addNewCard(cardInfo) {
  return new Card({
    cardInfo,
    templateSelector: cardTemplateSelector,
    handleCardClick,
    handleDelete,
    handleLike,
    userId: userInfo.userId,
  }).generateCard();
}

//event listener callbacks for card

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
  formValidators["profile-form"].resetValidation();
  profilePopup.open();
}
function openCardAddPopup() {
  formValidators["add-form"].resetValidation();
  cardAddPopup.open();
}
function openAvatarPopup() {
  formValidators["avatar-form"].resetValidation();
  avatarPopup.open();
}

//form submitters

function handleSubmitProfile(formValues) {
  profilePopup.renderLoading(true);
  api
    .submitProfileInfo(formValues)
    .then((res) => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => profilePopup.renderLoading(false, "Сохранить"));
}
function handleSubmitCard(formValues) {
  cardAddPopup.renderLoading(true);
  api
    .submitCard(formValues)
    .then((res) => {
      cardsList.addItem(res);
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
      userInfo.setUserInfo(res);
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
