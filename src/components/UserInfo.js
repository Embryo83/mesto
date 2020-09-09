export default class UserInfo {
  constructor ({name, job}) {
    this._name = name;
    this._job = job;
    this._avatar = document.querySelector('.profile__avatar');
  }

  getUserInfo() {
      return {
          name: this._name.textContent,
          job: this._job.textContent
      }
  }

  setUserInfo(name, job) {
    this._name.textContent = name.value;
    this._job.textContent = job.value;
  }

  setNewAvatar(link) {
    this._avatar.src = link;
  }
}