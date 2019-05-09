//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    PageCur:'basics',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    lunbotu:{},
    info: '',
    message:{},
    agree:false,
    se: '',
    searchdata: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  search: function() {
    console.log('sear' + this.data.searchdata)
    wx.navigateTo({
      url: '/pages/search/search?word=' + wx.getStorageSync('searchdata')
    })
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    wx.navigateTo({
      url: '/pages/' + e.currentTarget.dataset.type + '/' + e.currentTarget.dataset.type,
    })
  },
  onInputText(e) {
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('searchdata', value)
    } 
  },
  tiaozhuan(e){
    wx.navigateTo({
      url: '/pages/' + e.currentTarget.dataset.type + '/' + e.currentTarget.dataset.type,
    })
  },
  nav(e){
    wx.navigateTo({
      url: '/pages/newsdetail/newsdetail?id='+e.currentTarget.dataset.nub,
    })
  },
  bindGetUserInfo(e) {
    this.setData
  ({
    agree:true
  })
    console.log(e.detail.userInfo)
    this.onLoad()
  },
  onLoad: function () {
    var that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })

    // PageCur: 'basics'
    var that = this;

    wx.request({
      url: 'http://bt.luminkuan.cn:8080/ChatRobot/user/getAllNews',

      success: function (res) {
        that.setData({
          message:res.data,
        })
        //that.setData({ info: res.data.recs[0].NewsTitle})
        console.log(that.data.message)
      }
    })
    // console.log(message)

    if (app.globalData.userInfo) {
      this.setData({
        userInfo : app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  ss:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})
