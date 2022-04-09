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
const closeImageButton = imagePopup.querySelector(".popup__close-button");

const profilePopup = document.querySelector(".popup_type_edit-profile");
const editProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = profilePopup.querySelector(".popup__input_type_name");
const jobInput = profilePopup.querySelector(".popup__input_type_job");
const closeProfileButton = profilePopup.querySelector(".popup__close-button");
const submitProfileButton = profilePopup.querySelector(".popup__submit-button");

const ElementPopup = document.querySelector(".popup_type_add-element");
const addElementButton = document.querySelector(".profile__add-button");
const titleInput = ElementPopup.querySelector(".popup__input_type_card-title");
const linkInput = ElementPopup.querySelector(".popup__input_type_image-link");
const closeElementButton = ElementPopup.querySelector(".popup__close-button");
const submitElementButton = ElementPopup.querySelector(".popup__submit-button");

function getElementsList(arr) {
  const elementsList = arr.map(getElement);
  elementsContainer.append(...elementsList);
  return elementsContainer;
}

function getElement(item) {
  const newElement = template.content.cloneNode(true);
  const title = newElement.querySelector(".elements__title");
  const image = newElement.querySelector(".elements__photo");
  const likeButton = newElement.querySelector(".elements__like");
  const deleteButton = newElement.querySelector(".elements__delete");

  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.mame;

  likeButton.addEventListener("click", (evt) =>
    likeButton.classList.toggle("elements__like_active")
  );

  deleteButton.addEventListener("click", handleDeleteElement);

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

function closePopup(evt) {
  evt.target.closest(".popup").classList.remove("popup_opened");
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
  closePopup(evt);
}

function handleOpenElement() {
  titleInput.value = "";
  linkInput.value = "";
  openPopup(ElementPopup);
}

function handleCreateNewElement(evt) {
  evt.preventDefault();
  const newElement = getElement({
    name: titleInput.value,
    link: linkInput.value,
  });
  elementsContainer.prepend(newElement);
  closePopup(evt);
}

function handleOpenImage(evt) {
  const element = evt.target.closest(".elements__item");
  const elementImage = element.querySelector(".elements__photo");
  const elementTitle = element.querySelector(".elements__title");
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupCaption = imagePopup.querySelector(".popup__caption");

  popupImage.src = elementImage.src;
  popupCaption.textContent = elementTitle.textContent;

  openPopup(imagePopup);
}

editProfileButton.addEventListener("click", handleOpenProfile);

closeProfileButton.addEventListener("click", closePopup);

submitProfileButton.addEventListener("click", handleSubmitProfile);

addElementButton.addEventListener("click", handleOpenElement);

closeElementButton.addEventListener("click", closePopup);

submitElementButton.addEventListener("click", handleCreateNewElement);

closeImageButton.addEventListener("click", closePopup);

getElementsList(initialCards);
