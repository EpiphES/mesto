const elementsContainer = document.querySelector(".elements");
const template = document.querySelector(".elements__template");

const imagePopup = document.querySelector(".popup_type_image");
const buttonCloseImage = imagePopup.querySelector(".popup__close-button");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

const profilePopup = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const nameInput = profilePopup.querySelector(".popup__input_type_name");
const aboutInput = profilePopup.querySelector(".popup__input_type_about");
const buttonCloseProfile = profilePopup.querySelector(".popup__close-button");
const formEditProfile = profilePopup.querySelector(".popup__form");

const elementPopup = document.querySelector(".popup_type_add-element");
const buttonAddElement = document.querySelector(".profile__add-button");
const titleInput = elementPopup.querySelector(".popup__input_type_card-title");
const linkInput = elementPopup.querySelector(".popup__input_type_image-link");
const buttonCloseElement = elementPopup.querySelector(".popup__close-button");
const buttonSubmitElement = elementPopup.querySelector(".popup__submit-button");
const formAddElement = elementPopup.querySelector(".popup__form");

function getElementsList(arr) {
  const elementsList = arr.map(getElement);
  elementsContainer.append(...elementsList);
  return elementsContainer;
}

function getElement(item) {
  const newElement = template.content.cloneNode(true);
  const title = newElement.querySelector(".elements__title");
  const image = newElement.querySelector(".elements__photo");
  const buttonLike = newElement.querySelector(".elements__like");
  const buttonDelete = newElement.querySelector(".elements__delete");

  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.name;

  buttonLike.addEventListener("click", toggleLikeState);

  buttonDelete.addEventListener("click", handleDeleteElement);

  image.addEventListener("click", () => handleOpenImage(item));

  return newElement;
}

function handleDeleteElement(evt) {
  const element = evt.target.closest(".elements__item");
  element.remove();
}

function toggleLikeState(evt) {
  evt.target.classList.toggle("elements__like_active");
}

function openPopup(modalWindow) {
  modalWindow.classList.add("popup_opened");
  modalWindow.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(modalWindow) {
  modalWindow.classList.remove("popup_opened");
  modalWindow.removeEventListener("click", handleOverlayClick);
  document.removeEventListener("keydown", handleEscClose);
}

function handleOpenProfile() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  cleanError(profilePopup);
  openPopup(profilePopup);
}

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(profilePopup);
}

function handleOpenElement() {
  formAddElement.reset();
  cleanError(elementPopup);
  openPopup(elementPopup);
}

function handleSubmitElement(evt) {
  evt.preventDefault();
  const newElement = getElement({
    name: titleInput.value,
    link: linkInput.value,
  });
  elementsContainer.prepend(newElement);
  closePopup(elementPopup);
}

function handleOpenImage(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;

  openPopup(imagePopup);
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

function cleanError(modalWindow) {
  const buttonElement = modalWindow.querySelector(".popup__submit-button");
  const inputList = Array.from(modalWindow.querySelectorAll(".popup__input"));
  inputList.forEach((inputElement) =>
    hideInputError(modalWindow, inputElement, config)
  );
  toggleButtonState(inputList, buttonElement, config);
}

buttonEditProfile.addEventListener("click", handleOpenProfile);

buttonCloseProfile.addEventListener("click", () => closePopup(profilePopup));

formEditProfile.addEventListener("submit", handleSubmitProfile);

buttonAddElement.addEventListener("click", handleOpenElement);

buttonCloseElement.addEventListener("click", () => closePopup(elementPopup));

formAddElement.addEventListener("submit", handleSubmitElement);

buttonCloseImage.addEventListener("click", () => closePopup(imagePopup));

getElementsList(initialCards);
