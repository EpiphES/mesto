import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import { config, initialCards, cardsContainer } from "../utils/constants.js";

const profileEditPopup = new PopupWithForm(
  handleSubmitProfile,
  ".popup_type_edit-profile"
);

const cardAddPopup = new PopupWithForm(
  handleSubmitCard,
  ".popup_type_add-element"
);

// const profileEditPopup = document.querySelector(".popup_type_edit-profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
// const profileNameInput = profileEditPopup.querySelector(
//   ".popup__input_type_name"
// );
// const profileAboutInput = profileEditPopup.querySelector(
//   ".popup__input_type_about"
// );
// const profileEditForm = profileEditPopup.querySelector(".popup__form");

// const cardAddPopup = document.querySelector(".popup_type_add-element");
const cardAddButton = document.querySelector(".profile__add-button");
// const cardTitleInput = cardAddPopup.querySelector(
//   ".popup__input_type_card-title"
// );
// const cardLinkInput = cardAddPopup.querySelector(
//   ".popup__input_type_image-link"
// );
// const cardAddForm = cardAddPopup.querySelector(".popup__form");

// const cardFormValidator = new FormValidator(config, cardAddForm);
const profileFormValidator = new FormValidator(config, profileEditPopup._form);

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
  profileEditPopup.open();
  console.log(profileEditPopup);
  // profileNameInput.value = profileName.textContent;
  // profileAboutInput.value = profileAbout.textContent;
  // profileFormValidator.cleanError();
  // openPopup(profileEditPopup);
}

function handleSubmitProfile(formValues) {
  profileName.textContent = formValues.name;
  profileAbout.textContent = formValues.about;
}

function handleOpenCardAddPopup() {
  // cardAddForm.reset();
  // cardFormValidator.cleanError();
  cardAddPopup.open();
}

function handleSubmitCard(formValues) {
  const cardElement = new Card(
    formValues,
    ".elements__template",
    handleCardClick
  ).generateCard();
  cardsList.addItem(cardElement);
  cardAddPopup.close();
}

function handleCardClick(data) {
  new PopupWithImage(data, ".popup_type_image").open();
}

profileEditButton.addEventListener("click", handleOpenProfile);

cardAddButton.addEventListener("click", handleOpenCardAddPopup);

// cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
