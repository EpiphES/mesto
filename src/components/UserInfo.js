export default class UserInfo {
  _userName;
  _userAbout;

  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  setProfile(userInfo) {
    this._userInfo = userInfo;
    this.setUserInfo(this._userInfo);
    this.setAvatar(this._userInfo);
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
  }

  setAvatar(userInfo) {
    this._userAvatar.src = userInfo.avatar;
    this._userAvatar.alt = userInfo.name;
  }

  getId() {
    return this._userInfo._id;
  }
}
