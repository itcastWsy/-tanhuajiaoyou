import { observable, action } from "mobx";

class RootStore {
  // 手机号码
  @observable mobile = "15915912346";
  // token
  @observable token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiIxNTkxNTkxMjM0NiIsImlhdCI6MTU5MTYxODcwOCwiZXhwIjoxNjE3NTM4NzA4fQ._WMeRhIU2XOZe1qG1u106tw2Jz57WuWWLLsPVe1oAAA";
  // 用户的唯一id 
  @observable userId = "159159123461591515495983";

  @action setUserInfo(mobile,token,userId) {
    this.mobile = mobile;
    this.token = token;
    this.userId = userId;
  }
}

export default new RootStore();