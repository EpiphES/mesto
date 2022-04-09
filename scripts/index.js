const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementsContainer = document.querySelector(".elements");
const template = document.querySelector(".elements__template");

const imagePopup = document.querySelector(".popup_type_image");
const buttonCloseImage = imagePopup.querySelector(".popup__close-button");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

const profilePopup = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = profilePopup.querySelector(".popup__input_type_name");
const jobInput = profilePopup.querySelector(".popup__input_type_job");
const buttonCloseProfile = profilePopup.querySelector(".popup__close-button");
const formEditProfile = profilePopup.querySelector(".popup__form");

const elementPopup = document.querySelector(".popup_type_add-element");
const buttonAddElement = document.querySelector(".profile__add-button");
const titleInput = elementPopup.querySelector(".popup__input_type_card-title");
const linkInput = elementPopup.querySelector(".popup__input_type_image-link");
const buttonCloseElement = elementPopup.querySelector(".popup__close-button");
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
  image.alt = item.mame;

  buttonLike.addEventListener("click", () =>
    buttonLike.classList.toggle("elements__like_active")
  );

  buttonDelete.addEventListener("click", handleDeleteElement);

  image.addEventListener("click", handleOpenImage);

  return newElement;
}

function handleDeleteElement(evt) {
  const element = evt.target.closest(".elements__item");
  element.remove();
}

function openPopup(modalWindow) {
  modalWindow.classList.add("popup_opened");
}

function closePopup(modalWindow) {
  modalWindow.classList.remove("popup_opened");
}

function handleOpenProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup);
}

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

function handleOpenElement() {
  titleInput.value = "";
  linkInput.value = "";
  openPopup(elementPopup);
}

function handleCreateNewElement(evt) {
  evt.preventDefault();
  const newElement = getElement({
    name: titleInput.value,
    link: linkInput.value,
  });
  elementsContainer.prepend(newElement);
  closePopup(elementPopup);
}

function handleOpenImage(evt) {
  const element = evt.target.closest(".elements__item");
  const elementImage = element.querySelector(".elements__photo");
  const elementTitle = element.querySelector(".elements__title");

  popupImage.src = elementImage.src;
  popupImage.alt = elementTitle.textContent;
  popupCaption.textContent = elementTitle.textContent;

  openPopup(imagePopup);
}

buttonEditProfile.addEventListener("click", handleOpenProfile);

buttonCloseProfile.addEventListener("click", () => closePopup(profilePopup));

formEditProfile.addEventListener("submit", handleSubmitProfile);

buttonAddElement.addEventListener("click", handleOpenElement);

buttonCloseElement.addEventListener("click", () => closePopup(elementPopup));

formAddElement.addEventListener("submit", handleCreateNewElement);

buttonCloseImage.addEventListener("click", () => closePopup(imagePopup));

getElementsList(initialCards);
