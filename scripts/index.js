import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from "./initialCards.js";
import config from "./config.js";

const cardsContainer = document.querySelector(".elements");

const cardShowPopup = document.querySelector(".popup_type_image");
const cardShowImage = cardShowPopup.querySelector(".popup__image");
const cardShowCaption = cardShowPopup.querySelector(".popup__caption");

const profileEditPopup = document.querySelector(".popup_type_edit-profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const profileNameInput = profileEditPopup.querySelector(
  ".popup__input_type_name"
);
const profileAboutInput = profileEditPopup.querySelector(
  ".popup__input_type_about"
);
const profileEditForm = profileEditPopup.querySelector(".popup__form");

const cardAddPopup = document.querySelector(".popup_type_add-element");
const cardAddButton = document.querySelector(".profile__add-button");
const cardTitleInput = cardAddPopup.querySelector(
  ".popup__input_type_card-title"
);
const cardLinkInput = cardAddPopup.querySelector(
  ".popup__input_type_image-link"
);
const cardAddForm = cardAddPopup.querySelector(".popup__form");

const cardFormValidator = new FormValidator(config, cardAddForm);

const profileFormValidator = new FormValidator(config, profileEditForm);

function getNewCard(object) {
  return new Card(object, ".elements__template", handleOpenCard).generateCard();
}

function getCardsList(arr) {
  arr.forEach((item) => {
    const cardElement = getNewCard(item);
    cardsContainer.append(cardElement);
  });
  return cardsContainer;
}

function openPopup(formElement) {
  formElement.classList.add("popup_opened");
  formElement.addEventListener("mousedown", handleCloseOnClick);
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(formElement) {
  formElement.classList.remove("popup_opened");
  formElement.removeEventListener("click", handleCloseOnClick);
  document.removeEventListener("keydown", handleEscClose);
}

function handleOpenProfile() {
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
  profileFormValidator.cleanError();
  openPopup(profileEditPopup);
}

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closePopup(profileEditPopup);
}

function handleOpenCardAddPopup() {
  cardAddForm.reset();
  cardFormValidator.cleanError();
  openPopup(cardAddPopup);
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardElement = getNewCard({
    title: cardTitleInput.value,
    link: cardLinkInput.value,
  });
  cardsContainer.prepend(cardElement);
  closePopup(cardAddPopup);
}

function handleOpenCard(cardProps) {
  cardShowImage.src = cardProps.link;
  cardShowImage.alt = cardProps.title;
  cardShowCaption.textContent = cardProps.title;

  openPopup(cardShowPopup);
}

function handleCloseOnClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("popup__close-button")
  ) {
    closePopup(evt.currentTarget);
  }
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

profileEditButton.addEventListener("click", handleOpenProfile);

profileEditForm.addEventListener("submit", handleSubmitProfile);

cardAddButton.addEventListener("click", handleOpenCardAddPopup);

cardAddForm.addEventListener("submit", handleSubmitCard);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

getCardsList(initialCards);
