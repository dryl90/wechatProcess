// pages/Vote/vote.js
Page({
  data:{
    name:2
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getData:function(event){
    var that = this;
    wx.request({
      url: 'http://localhost/VoteService/Service/VoteService.asmx/GetVoteMan',
      
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success\
        
        var obj = JSON.parse(res.data.d);
        console.log(obj);
        that.setData({
          name: obj.name
       })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})