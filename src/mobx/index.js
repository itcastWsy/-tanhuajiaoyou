import { observable, action } from "mobx";

class RootStore {
  // 手机号码
  @observable mobile = "";
  // token
  @observable token = "";
  // 用户的唯一id 
  @observable userId = "";

  @action setUserInfo(mobile,token,userId) {
    this.mobile = mobile;
    this.token = token;
    this.userId = userId;
  }
}

export default new RootStore();