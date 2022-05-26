export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  disabledButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_visible",
};

export const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const cardsContainerSelector = ".elements";
export const cardTemplateSelector = ".elements__template";
export const profileNameSelector = ".profile__name";
export const profileAboutSelector = ".profile__about";
export const profileEditButtonSelector = ".profile__edit-button";
export const cardAddButtonSelector = ".profile__add-button";
export const profileEditPopupSelector = ".popup_type_edit-profile";
export const cardAddPopupSelector = ".popup_type_add-element";
export const imagePopupSelector = ".popup_type_image";
