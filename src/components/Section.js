export default class Section {
  _renderer;
  _container;

  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(initialArray) {
    initialArray.forEach((item) => this.addItem(item));
  }

  addItem(item) {
    const cardElement = this._renderer(item);
    this._container.prepend(cardElement);
  }
}
