// pages/more-movie/more-movie.js
let api = require('../../utils/api.js');
let resultData = require('../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreData:[],
    hidden:true,
    page:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 动态设置标题
    wx.setNavigationBarTitle({
      title: options.title
    });
    // 动态设置导航栏背景颜色
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000'
    });
    // 导航栏loading
    // wx.showNavigationBarLoading();
    // setTimeout(wx.hideNavigationBarLoading, 2000)

    // this.setData({
    //   moreData: resultData.moreData,
    // })
    this.getData();
  },

  getData: function () {
    var page = this.data.page;
    var moreData = this.data.moreData;
    var that=this;
    // wx.showLoading({
    //   title: '加载中...',
    // })

    this.setData({
      hidden: false,
    })

    setTimeout(() => {
      this.setData({
        hidden: true,
      })
      this.setData({
        moreData: resultData.moreData,
      })
    }, 2000)

    // api.getData('/onebox/movie/pmovie', 'get', {
    //   key: 'a8b932b7661aee98fcb3c89984626302',
    //   city: '上海'
    // }).then(res => {
    //   console.log(res.result);
    //   // wx.hideLoading();
    //   setTimeout(()=>{
    //     this.setData({
    //       hidden: true,
    //     })
    //     this.setData({
    //       moreData: resultData.moreData,
    //     })
    //   },2000)
      
    // }, e => {
    //   console.log(e)
    // })

    // wx.request({
    //   url: '接口地址',
    //   method:'get',
    //   data:{
    //     page:page,
    //   },
    //   success:function(res){
    //     that.setData({
    //       moreData: moreData.concat(res.data),
    //     })
    //   }
    // })
  },

  // 加载更多
  loadMore:function(){
    var moreData = this.data.moreData;
    // // 翻页
    // var page = this.data.page;
    // this.setData({
    //   page: page++,
    // })
    // this.getData();

    this.setData({
      moreData: moreData.concat(resultData.moreData),
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
    console.log(12)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(2132)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})