//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎来到筱晓的阴阳师',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  touchEnd:function(){
    wx.navigateTo({
      url: '../MySSR/Main',
      success: function(res){
        // success
      },
      fail: function() {
       
      },
      complete: function() {
        // complete
      }
    })
  }

})
