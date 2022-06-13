export default class Section {
  _renderer;
  _container;

  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(initialArray, userId) {
    initialArray.forEach((item) => this._renderer(item, userId));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
