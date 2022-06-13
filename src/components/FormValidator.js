export default class FormValidator {
  _formElement;
  _disabledButtonClass;
  _inputErrorClass;
  _errorClass;
  _inputList;
  _buttonElement;

  constructor(config, formElement) {
    this._formElement = formElement;
    this._disabledButtonClass = config.disabledButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    this._buttonElement = formElement.querySelector(
      config.submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    const formError = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const formError = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    formError.classList.remove(this._errorClass);
    formError.textContent = "";
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._disabledButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._disabledButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  };

  _checkValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  resetValidation = () => {
    this._inputList.forEach((inputElement) =>
      this._hideInputError(inputElement)
    );
    this._toggleButtonState();
  };

  enableValidation = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
}
