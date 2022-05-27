import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import {
  config,
  initialCards,
  cardsContainerSelector,
  cardTemplateSelector,
  profileNameSelector,
  profileAboutSelector,
  profileEditButtonSelector,
  cardAddButtonSelector,
  profileEditPopupSelector,
  cardAddPopupSelector,
  imagePopupSelector,
} from "../utils/constants.js";

const profileEditPopup = new PopupWithForm(
  handleSubmitProfile,
  profileEditPopupSelector
);
profileEditPopup.setEventListeners();

const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);
const userInfo = new UserInfo({
  userName: profileNameSelector,
  userAbout: profileAboutSelector,
});
cardAddPopup.setEventListeners();

const cardFormValidator = new FormValidator(config, cardAddPopup.form);
const profileFormValidator = new FormValidator(config, profileEditPopup.form);

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      addNewCard(item);
    },
  },
  cardsContainerSelector
);

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
  userInfo.setUserinfo(formValues);
}

function handleOpenCardAddPopup() {
  cardFormValidator.cleanError();
  cardAddPopup.open();
}

function handleSubmitCard(formValues) {
  addNewCard(formValues);
  cardAddPopup.close();
}

function handleCardClick(data) {
  new PopupWithImage(data, imagePopupSelector).open();
}

document
  .querySelector(profileEditButtonSelector)
  .addEventListener("click", handleOpenProfile);

document
  .querySelector(cardAddButtonSelector)
  .addEventListener("click", handleOpenCardAddPopup);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardsList.renderItems();
