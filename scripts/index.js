let openButton = document.querySelector(".profile__edit-button");
let modalWindow = document.querySelector(".popup");
let closeButton = modalWindow.querySelector(".popup__close-button");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editForm = modalWindow.querySelector(".popup__form");
let nameInput = modalWindow.querySelector(".popup__input_type_name");
let jobInput = modalWindow.querySelector(".popup__input_type_job");
let submitButton = modalWindow.querySelector(".popup__submit-button");

function toggleModalWindow() {
  modalWindow.classList.toggle("popup_opened");
}

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  toggleModalWindow();
}

openButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", toggleModalWindow);

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModalWindow();
}

editForm.addEventListener("submit", editProfile);

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

function getElement(item) {
  const elementTemplate = template.content.cloneNode(true);
  const title = elementTemplate.querySelector(".elements__title");
  const image = elementTemplate.querySelector(".elements__photo");

  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.mame;

  return elementTemplate;
}

function getElementsList(arr) {
  const elementsList = arr.map(getElement);
  elementsContainer.append(...elementsList);
  return elementsContainer;
}

getElementsList(initialCards);
