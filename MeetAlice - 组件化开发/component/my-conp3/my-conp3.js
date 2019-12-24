// component/my-conp3/my-conp3.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataA:{
      type:String,
      value:"默认标题"
    }
  },

  externalClasses:['my-class'],

  /**
   * 组件的初始数据
   */
  data: {
    title:"这是my-conp3组件标题",
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready:function(){
    console.log(this.data.dataA)
  }
})
