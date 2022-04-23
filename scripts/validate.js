function showInputError(
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(`${inputErrorClass}`);
  formError.textContent = errorMessage;
  formError.classList.add(`${errorClass}`);
}

function hideInputError(
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(`${inputErrorClass}`);
  formError.classList.remove(`${errorClass}`);
  formError.textContent = "";
}

function checkValidity(formElement, inputElement, inputErrorClass, errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, disabledButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${disabledButtonClass}`);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(`${disabledButtonClass}`);
    buttonElement.removeAttribute("disabled");
  }
}

function setEventListeners(
  formElement,
  inputSelector,
  submitButtonSelector,
  disabledButtonClass,
  inputErrorClass,
  errorClass
) {
  const inputList = Array.from(
    formElement.querySelectorAll(`${inputSelector}`)
  );
  const buttonElement = formElement.querySelector(`${submitButtonSelector}`);

  toggleButtonState(inputList, buttonElement, disabledButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, disabledButtonClass);
    });
  });
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  disabledButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formList = Array.from(document.querySelectorAll(`${formSelector}`));
  formList.forEach((formElement) => {
    setEventListeners(
      formElement,
      inputSelector,
      submitButtonSelector,
      disabledButtonClass,
      inputErrorClass,
      errorClass
    );
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  disabledButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_visible",
});
