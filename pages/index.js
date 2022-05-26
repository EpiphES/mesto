import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import { config, initialCards, cardsContainer } from "../utils/constants.js";

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

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = new Card(
        item,
        ".elements__template",
        handleCardClick
      ).generateCard();

      cardsList.addItem(cardElement);
    },
  },
  cardsContainer
);

cardsList.renderItems();

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
  cardAddPopup.open();
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardElement = new Card(
    {
      title: cardTitleInput.value,
      link: cardLinkInput.value,
    },
    ".elements__template",
    handleCardClick
  ).generateCard();
  cardsList.addItem(cardElement);
  closePopup(cardAddPopup);
}

function handleCardClick(data) {
  new PopupWithImage(data, ".popup_type_image").open();
}

profileEditButton.addEventListener("click", handleOpenProfile);

profileEditForm.addEventListener("submit", handleSubmitProfile);

cardAddButton.addEventListener("click", handleOpenCardAddPopup);

cardAddForm.addEventListener("submit", handleSubmitCard);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
