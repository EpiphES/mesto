export default class Card {
  _title;
  _link;
  _templateSelector;
  _handleOpenCard;
  _newCard;

  constructor({ title, link }, templateSelector, handleOpenCard) {
    (this._title = title),
      (this._link = link),
      (this._templateSelector = templateSelector),
      (this._handleOpenCard = handleOpenCard);
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  };

  _toggleLikeState = (evt) => {
    evt.target.classList.toggle("elements__like_active");
  };

  _handleDeleteCard = () => {
    this._newCard.remove();
  };

  generateCard = () => {
    this._newCard = this._getTemplate();

    const cardImage = this._newCard.querySelector(".elements__photo");

    this._newCard.querySelector(".elements__title").textContent = this._title;
    cardImage.src = this._link;
    cardImage.alt = this._title;

    this._newCard
      .querySelector(".elements__like")
      .addEventListener("click", this._toggleLikeState);

    this._newCard
      .querySelector(".elements__delete")
      .addEventListener("click", this._handleDeleteCard);

    cardImage.addEventListener("click", () =>
      this._handleOpenCard({ title: this._title, link: this._link })
    );

    return this._newCard;
  };
}
