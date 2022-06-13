export default class UserInfo {
  _userName;
  _userAbout;
  _userAvatar;
  userId;

  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }

  setUserInfo(userInfo) {
    this._userName.textContent = userInfo.name;
    this._userAbout.textContent = userInfo.about;
    this._userAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
    this.userId = userInfo._id;
  }
}
