import { checkUpdate } from './utils/utils';

App({
  onLaunch() {
    checkUpdate();
    this.getSystemInfo();

    wx.cloud.init({
      env: 'my-env-id', // 开通云开发
      traceUser: true,
    });
  },

  getSystemInfo() {
    const systemInfo = wx.getSystemInfoSync();
    this.systemInfo = {
      isIOS: /ios/i.test(systemInfo.platform),
      isAndroid: /android/i.test(systemInfo.platform),
      statusBarHeight: systemInfo.statusBarHeight,
    };
  },
});
