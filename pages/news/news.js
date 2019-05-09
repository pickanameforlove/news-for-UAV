// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://bt.luminkuan.cn:8080/ChatRobot/user/getAllNews',

      success: function (res) {
        that.setData({
          message: res.data
        })
        //that.setData({ info: res.data.recs[0].NewsTitle})
        console.log(that.data.message)
      }
    })
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
  nav(e) {
    wx.navigateTo({
      url: '/pages/newsdetail/newsdetail?id=' + e.currentTarget.dataset.nub,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})