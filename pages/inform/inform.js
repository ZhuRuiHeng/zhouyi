//index.js
//获取应用实例
const app = getApp()
const comm = require('../../utils/comm');
const apiurl = 'https://friend-guess.playonwechat.com/';
let sign = wx.getStorageSync('sign');
console.log(comm)

Page({
  data: {
    sign: wx.getStorageSync('sign'),
    kid: wx.getStorageSync('kid')
  },
  onLoad: function (options) {
    console.log("options:", options);
    let that = this;
    let sign = wx.getStorageSync('sign');
    let kid = wx.getStorageSync('kid');
    that.setData({
      nums: options.nums
    })
    wx.showLoading({
      title: '加载中',
    });

    if (!wx.canIUse('web-view')) {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
    wx.hideLoading()
  },
  onShow: function () {
    let that = this;
    app.getAuth(function () {
      let userInfo = wx.getStorageSync('userInfo');
      let sign = wx.getStorageSync('sign');
      let kid = wx.getStorageSync('kid');
      wx.showLoading({
        title: '加载中',
      });
      let indexUrl = apiurl + 'assets/zhouyi/html/test.html?kid=' + kid + '&sign=' + sign + '&nums=' + that.data.nums;
      console.log(indexUrl)
      that.setData({
        indexUrl
      })
      wx.hideLoading()
    })
  },
  onShareAppMessage(options) {
    console.log(options.webViewUrl)
  }

})
