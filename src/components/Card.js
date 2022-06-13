export default class Card {
  _card;
  _templateSelector;
  _handleCardClick;
  _handleDeleteClick;
  _handleLikeClick;
  _userId;
  _newCard;
  _cardImage;
  _buttonLike;
  _buttonDelete;
  _likesCount;

  constructor({
    cardInfo,
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    userId,
  }) {
    this._card = cardInfo;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  };

  handleDeleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  getCardId() {
    return this._card._id;
  }

  _isMine() {
    return this._card.owner._id === this._userId;
  }

  isLiked() {
    return this._card.likes.some((item) => item._id === this._userId);
  }

  setLikeState(data) {
    this._card = data;
    this.isLiked()
      ? this._buttonLike.classList.add("elements__like-button_active")
      : this._buttonLike.classList.remove("elements__like-button_active");
    this._likesCount.textContent = this._card.likes.length;
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".elements__photo");
    this._buttonLike = this._newCard.querySelector(".elements__like-button");
    this._buttonDelete = this._newCard.querySelector(".elements__delete");
    this._likesCount = this._newCard.querySelector(".elements__like-count");

    this._cardImage.src = this._card.link;
    this._cardImage.alt = this._card.title;

    this._newCard.querySelector(".elements__title").textContent =
      this._card.name;

    if (!this._isMine()) {
      this._buttonDelete.classList.add("elements__delete_disabled");
      this._buttonDelete.setAttribute("disabled", true);
    }

    this._cardImage.addEventListener("click", () => this._handleCardClick());
    this._buttonDelete.addEventListener("click", () =>
      this._handleDeleteClick(this._newCard)
    );
    this._buttonLike.addEventListener("click", () => this._handleLikeClick());

    this.setLikeState(this._card);

    return this._newCard;
  }
}
