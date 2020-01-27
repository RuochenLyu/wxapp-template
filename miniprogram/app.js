import { checkUpdate } from "./utils/utils";

App({
  onLaunch() {
    checkUpdate();
    this.getSystemInfo();

    wx.cloud.init({
      env: "my-env-id", // 开通云开发
      traceUser: true
    });
  },

  getSystemInfo() {
    const systemInfo = wx.getSystemInfoSync();
    this.systemInfo = {};

    this.systemInfo.isQQ = systemInfo.AppPlatform === "qq";
    this.systemInfo.isIPhoneX =
      systemInfo.model.includes("iPhone X") ||
      systemInfo.model.includes("iPhone11");
    this.systemInfo.isAndroid = systemInfo.platform === "android";
    this.systemInfo.statusBarHeight = systemInfo.statusBarHeight;
  }
});
