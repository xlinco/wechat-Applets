// component/my-behavior/my-behavior.js
let myBehavior = require('../behavior.js');
Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    dataA:{
      type:String,
      value:'hhhh',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'AAAA'
  },

  ready:function(){
    console.log(this.data.title)
    this.consolg()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setName:function(){
      this.setData({
        name: '名字',
      })
    }
  }
})
