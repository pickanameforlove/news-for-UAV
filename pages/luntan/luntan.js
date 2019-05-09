// pages/luntan/luntan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    tag: '',
    digest: '',
    content: '',
    imgUrl: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  sub:function() {
    wx.request({
      url: 'http://bt.luminkuan.cn:8080/ChatRobot/user/add/news',
      method:'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      data: {
        title: wx.getStorageSync('title'),
        tag: wx.getStorageSync('tag'),
        digest: wx.getStorageSync('digest'),
        content: wx.getStorageSync('content'),
        imgUrl: wx.getStorageSync('imgUrl')
      },
      success: function (res) {
        //that.setData({ info: res.data.recs[0].NewsTitle})
        console.log(55)
      }
    })
    wx.navigateTo({
      url: '../index/index',
    })
  },

  textareaBInput5: function(e) {
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('imgUrl', value)
    } 
  },
  textareaBInput4: function (e) {
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('content', value)
    }
  },
  textareaBInput3: function (e) {
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('digest', value)
    }
  },
  textareaBInpu2: function (e) {
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('title', value)
    }
  },
  textareaBInput1: function (e) {
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('tag', value)
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})