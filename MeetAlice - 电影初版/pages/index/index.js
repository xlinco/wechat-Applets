// pages/index/index.js
const app = getApp();
let api = require('../../utils/api.js');
let resultData= require('../../utils/data.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerData: [],
    subJectData:[],
  },

  getBannerData:function(){
    api.getData('/onebox/movie/pmovie','get',{
      key: 'a8b932b7661aee98fcb3c89984626302',
      city: '上海'
    }).then(res => {
      console.log(res.result)
      },e=>{
        console.log(e)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("load");
    this.setData({
      bannerData: resultData.bannerData,
      subJectData: resultData.subJectData,
    })
    // this.getBannerData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("ready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("unload");
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