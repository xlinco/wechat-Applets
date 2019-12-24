// pages/index/index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:"这是页面传的数据",
    cates:['推荐','热门','时尚','娱乐'],
    showe:true,
  },
  onLoad: function () {

  },
  search:function(e){
    // console.log(e.detail.searchText)
  },
  itemClick:function(e){
    console.log(e.detail)
  },
  count:function(){
    // console.log(this.selectComponent("#count"))
    this.selectComponent("#count").increase(10);
    // console.log(this.selectComponent("#count").data.counter)
  },
  removeComp:function(){
    this.setData({
      showe:!this.data.showe,
    })
  }
})
