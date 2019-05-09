// pages/newsdetail/newsdetail.js
var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nid:'',
      news:'',
      title:'',
      cont:'',
      comments:'',
      article: ''  
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var WxParse = require("../../wxParse/wxParse.js");
    this.setData({
      nid:e.id
    })
    var that = this
    wx.request({
      url: 'http://bt.luminkuan.cn:8080/ChatRobot/user/getNewsById/'+that.data.nid,

      success: function (res) {
        console.log("res",res.data.content)
        that.setData({
          title:res.data.title,
          news: res.data.content,
          article: WxParse.wxParse('article', 'html', that.data.news, that, 5)
        })
        WxParse.wxParse('article', 'html', that.data.news, that, 5)
      }
    })
    wx.request({
      url: 'http://bt.luminkuan.cn:8080/ChatRobot/user/getNewsCommentsById/' + that.data.nid,

      success: function (res) {
        console.log("res", res.data.content)
        that.setData({
          comments: res.data
        })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  commentSubmit: function (e) {
    console.log(555)
      wx.request({
        url: 'http://bt.luminkuan.cn:8080/ChatRobot/user/postComment',
        method: 'post',
        data: util.json2Form({
          userNickname: app.userInfo.nickName,
          userImg:app.userInfo.avatarUrl,
          content:this.data.cont,
          time:util.formatTime(new Date()),
          id:this.data.nid
        }),

        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(util.formatTime)
          // console.log(res)
        }
      })
    wx.navigateTo({
      url: '/pages/newsdetail/newsdetail?id=' + this.data.nid,
    })
  
  },
  forContent:function(e){
      this.setData({
        cont:e.detail.value
      })
  }
})