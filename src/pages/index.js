import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  config,
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
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-43/",
  headers: {
    authorization: "1bffef03-9768-4f1e-8e85-138575e6daba",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((cards) => {
    const cardsList = new Section(
      {
        items: cards,
        renderer: (item) => {
          const cardElement = new Card(
            { title: item.name, link: item.link, likes: item.likes },
            cardTemplateSelector,
            handleCardClick
          ).generateCard();

          cardsList.addItem(cardElement);
        },
      },
      cardsContainerSelector
    );
    cardsList.renderItems();
  })
  .catch((err) => alert(err));

const userInfo = new UserInfo({
  userName: profileNameSelector,
  userAbout: profileAboutSelector,
  userAvatar: profileAvatarSelector,
});

api
  .getProfileInfo()
  .then((profileInfo) => {
    console.log(profileInfo);
    userInfo.setUserInfo({ name: profileInfo.name, about: profileInfo.about });
    userInfo.setAvatar({ avatar: profileInfo.avatar, name: profileInfo.name });
  })
  .catch((err) => alert(err));

const profileEditPopup = new PopupWithForm(
  handleSubmitProfile,
  profileEditPopupSelector
);
profileEditPopup.setEventListeners();

const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);

cardAddPopup.setEventListeners();

const showCardPopup = new PopupWithImage(imagePopupSelector);
showCardPopup.setEventListeners();

const cardFormValidator = new FormValidator(config, cardAddPopup.form);
const profileFormValidator = new FormValidator(config, profileEditPopup.form);

function addNewCard({ title, link }) {
  const cardElement = new Card(
    { title, link },
    cardTemplateSelector,
    handleCardClick
  ).generateCard();

  cardsList.addItem(cardElement);
}

function handleOpenProfile() {
  profileEditPopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.cleanError();
  profileEditPopup.open();
}

function handleSubmitProfile(formValues) {
  userInfo.setUserInfo(formValues);
  fetch("https://mesto.nomoreparties.co/v1/cohort-43/users/me", {
    method: "PATCH",
    headers: {
      authorization: "1bffef03-9768-4f1e-8e85-138575e6daba",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}

function handleOpenCardAddPopup() {
  cardFormValidator.cleanError();
  cardAddPopup.open();
}

function handleSubmitCard(formValues) {
  // addNewCard(formValues);
  console.log({ name: formValues.title, link: formValues.link });

  fetch("https://mesto.nomoreparties.co/v1/cohort-43/cards", {
    method: "POST",
    headers: {
      authorization: "1bffef03-9768-4f1e-8e85-138575e6daba",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: formValues.title, link: formValues.link }),
  });
}

function handleCardClick({ title, link }) {
  showCardPopup.open({ title, link });
}

document
  .querySelector(profileEditButtonSelector)
  .addEventListener("click", handleOpenProfile);

document
  .querySelector(cardAddButtonSelector)
  .addEventListener("click", handleOpenCardAddPopup);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
