//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {

    // wx.request({
    //   url: '支付接口地址',
    //   method:'get/post',
    //   data:{
    //     openId: openId    // 登录时从后端获取得到的
    //   },
    //   success:function(res){
    //     wx.requestPayment({
    //       // 以下参数除signType外，皆为上个接口返回得到
    //       timeStamp: '',
    //       nonceStr: '',
    //       package: '',
    //       signType: 'MD5',
    //       paySign: '',
    //       success(res) { },
    //       fail(res) { }
    //     })
    //   }
    // })

    // 设置右上角文本
    // wx.setTabBarBadge({
    //   index: 0,
    //   text: '99',
    // })

    // setTimeout(function () {
    //   // 移除右上角文本
    //   wx.removeTabBarBadge({
    //     index: 0,
    //   })
    // }, 2000)

    // // 设置右上角小红点
    // wx.showTabBarRedDot({
    //   index: 0,
    // })

    // setTimeout(function(){
    //   // 移除右上角小红点
    //   wx.hideTabBarRedDot({
    //     index: 0,
    //   })
    // },2000)

    // // wx.hideTabBar({
    // //   animation:true
    // // })

    // wx.setTabBarItem({
    //   index: 1,
    //   text:'个人'
    // })

    // wx.setTabBarStyle({
    //   color: '#FF0000',
    //   selectedColor: '#00FF00',
    //   backgroundColor: '#dddddd',
    //   borderStyle: 'white'
    // })

    // // 预览图片
    // wx.previewImage({
    //   urls: ['https://img3.doubanio.com/view/photo/m/public/p2568485120.webp','https://img1.doubanio.com/view/photo/m/public/p2559695748.webp'],
    // })
    

    // 获取图片信息(需要安全域名，文件需要以jpg等图片格式结尾)
    wx.getImageInfo({
      src: 'https://img3.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/bf6e4213b728840.jpg',
      success:function(res){
        console.log(res)
      }
    })

    wx.showShareMenu({
      
    })
  },


  // 获取收货地址
  getAddress: function () {
    wx.chooseAddress({
      success: function (res) {
        console.log(res)
      }
    })
  },

  // 保存图片
  saveImg: function () {
    wx.downloadFile({
      url: 'https://img3.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/bf6e4213b728840.jpg',
success: function (res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath, success: function (res) {
            console.log('保存成功',res)
          }
        })
      }
    })
  },

  // 选择图片
  chooseImage: function () {
    wx.chooseImage({
      count:5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res)
      },
    })
  },

  onShareAppMessage:function(res){
    console.log(res)
    if(res.from == 'button'){
      console.log(res.target)
    }
    return {
      title:'转发标题',
      path:'/pages/index/index?id=2',
      imageUrl: 'https://img3.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/bf6e4213b728840.jpg'
    }
  }
})
