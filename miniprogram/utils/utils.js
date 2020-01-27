export function checkUpdate() {
  const updateManager = wx.getUpdateManager();

  updateManager.onCheckForUpdate(res => {
    if (!res.hasUpdate) return;
    wx.showLoading({
      title: "正在下载新版本",
      mask: true
    });
  });

  updateManager.onUpdateReady(() => {
    wx.hideLoading();
    updateManager.applyUpdate();
  });

  updateManager.onUpdateFailed(() => {
    wx.hideLoading();
    wx.showModal({
      title: "新版本下载失败",
      content: "请检查你的网络状况，然后重启小程序。",
      showCancel: false
    });
  });
}

export function foo() {}
