import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(confirmHandler, popupSelector) {
    super(popupSelector);
    this._confirmHandler = confirmHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__submit-button")
      .addEventListener("click", () => this._confirmHandler());
  }

  open(targetCard) {
    this.targetCard = targetCard;
    super.open();
  }
}
