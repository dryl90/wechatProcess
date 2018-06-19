//index.js
//获取应用实例


Page({
  data: {
    imageUrls:{},
    videoSrc:{},
    inputLine:'',
    avatarurl:'',
    nickName:''
  },
  //事件处理函数

  onLoad: function () {

  },
  onReady:function()
  {
    this.videoContext = wx.createVideoContext('myVideo');


  },
  getUserInfo:function()
  {
    var _this = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log("用户登录成功");
          wx.getUserInfo({
            success: function (res2) {
              var userInfo = res2.userInfo;
              var name = userInfo.nickName;
              var avatarUrl = userInfo.avatarUrl;
              var gender = userInfo.gender;
              var province = userInfo.province;
              var city = userInfo.city;
              _this.setData({
                avatarurl: avatarUrl,
                nickName: name
              })
              console.log("获取用户信息：suc");
            }

          })
        }
      }
    })
  }

  ,
  imageFunction:function()
  {
      wx.chooseImage(
        {
          count:4,
          sizeType:['original','compressed'],
          successType:['album','camera'],
          success:res=>{
           
            this.setData({
              imageUrls:res.tempFilePaths
            });
            console.log(this.data.imageUrls);
            //wx.previewImage({
             // urls: res.tempFilePaths,
           // })
          }
          ,
          fail:function(res)
          {

          },
          complete:function(res)
          {

          }
        }
      )

  },
  onclickImage:function(event) {
    console.log(event.currentTarget.dataset.index);
    console.log("image");
    wx.previewImage({
      current: this.data.imageUrls[event.currentTarget.dataset.index],
      urls: this.data.imageUrls,
    })
  },

  videoFunction:function(e)
  {

    wx.chooseVideo({
      success:res=>
      {
        this.setData({
          videoSrc:res.tempFilePath
        });
      },
      fail:res=>{}
    });
  },

  Danmu:function()
  {
      this.videoContext.sendDanmu({
        text: this.data.inputLine,
        color:'#ffffff'
      })
  },
  inputFun:function(e)
  {
    this.setData({
      inputLine:e.detail.value
    })

  }
})
