import Card from "./card.js";

const cardsContainer = document.querySelector(".elements");

const cardShowPopup = document.querySelector(".popup_type_image");
const cardShowCloseButton = cardShowPopup.querySelector(".popup__close-button");
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
const profileCloseButton = profileEditPopup.querySelector(
  ".popup__close-button"
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
const cardAddCloseButton = cardAddPopup.querySelector(".popup__close-button");
const cardSubmitButton = cardAddPopup.querySelector(".popup__submit-button");
const cardAddForm = cardAddPopup.querySelector(".popup__form");

function getCardsList(arr) {
  arr.forEach((item) => {
    const cardElement = new Card(
      item,
      ".elements__template",
      handleOpenCard
    ).generateCard();
    cardsContainer.append(cardElement);
  });
  return cardsContainer;
}

function openPopup(formElement) {
  formElement.classList.add("popup_opened");
  formElement.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(formElement) {
  formElement.classList.remove("popup_opened");
  formElement.removeEventListener("click", handleOverlayClick);
  document.removeEventListener("keydown", handleEscClose);
}

function handleOpenProfile() {
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
  cleanError(profileEditForm);
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
  cleanError(cardAddForm);
  openPopup(cardAddPopup);
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardElement = new Card(
    {
      title: cardTitleInput.value,
      link: cardLinkInput.value,
    },
    ".elements__template"
  ).generateCard();
  cardsContainer.prepend(cardElement);
  closePopup(cardAddPopup);
}

function handleOpenCard(cardProps) {
  cardShowImage.src = cardProps.link;
  cardShowImage.alt = cardProps.title;
  cardShowCaption.textContent = cardProps.title;

  openPopup(cardShowPopup);
}

function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function cleanError(formElement) {
  const buttonElement = formElement.querySelector(".popup__submit-button");
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  inputList.forEach((inputElement) =>
    hideInputError(formElement, inputElement, config)
  );
  toggleButtonState(inputList, buttonElement, config);
}

profileEditButton.addEventListener("click", handleOpenProfile);

profileCloseButton.addEventListener("click", () =>
  closePopup(profileEditPopup)
);

profileEditForm.addEventListener("submit", handleSubmitProfile);

cardAddButton.addEventListener("click", handleOpenCardAddPopup);

cardAddCloseButton.addEventListener("click", () => closePopup(cardAddPopup));

cardAddForm.addEventListener("submit", handleSubmitCard);

cardShowCloseButton.addEventListener("click", () => closePopup(cardShowPopup));

getCardsList(initialCards);
