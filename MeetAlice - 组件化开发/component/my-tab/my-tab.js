// component/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabArr:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick:function(e){
      // console.log(e)
      this.setData({
        currentIndex: e.currentTarget.dataset.index,
      })

      this.triggerEvent('tab',{
        tab_index:this.data.currentIndex,
        title: this.data.tabArr[this.data.currentIndex],
      })
    }
  }
})
