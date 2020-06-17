import JMessage from "jmessage-react-plugin";


export default {
  // 初始化
  init() {
    JMessage.init({
      'appkey': 'c0c08d3d8babc318fe25bb0c',
      'isOpenMessageRoaming': true,
      'isProduction': false,
      'channel': ''
    })
  },
  // 注册
  register(username, password) {
    return new Promise((resolve, reject) => {
      JMessage.register({
        username,
        password
      }, resolve, reject)
    })
  },
  // 登录
  login(username, password) {
    return new Promise((resolve, reject) => {
      JMessage.login({
        username,
        password
      }, resolve, reject)
    })
  },

  /**
   * 极光-发送文本消息
   * @param {String} username 要接收信息的对象 收件人
   * @param {String} text 文本内容
   * @param {Object} extras 要附带的参数
   */
  sendTextMessage(username, text, extras = {}) {
    return new Promise((resolve, reject) => {
      // 消息的类型 单个 即可 
      const type = "single";
      JMessage.sendTextMessage({
        type, username,
        text, extras
      },
        resolve, reject)
    })
  },
  /**
   * 获取历史消息
   * @param {String} username 要获取和谁的聊天记录
   * @param {Number} from 从第几条开始获取
   * @param {Number} limit 一共要获取几条
   */
  getHistoryMessages(username, from, limit) {
    return new Promise((resolve, reject) => {
      JMessage.getHistoryMessages({
        type: 'single', username,
        from, limit
      },
        resolve, reject)
    })
  }



}