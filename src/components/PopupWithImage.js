import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  _text;
  _src;
  _image;

  constructor(data, popupSelector) {
    super(popupSelector);
    this._text = data.title;
    this._src = data.link;
  }

  open() {
    this._image = this._popup.querySelector(".popup__image");
    this._image.src = this._src;
    this._image.alt = this._text;
    this._popup.querySelector(".popup__caption").textContent = this._text;
    super.open();
  }
}
