// component/my-conp4/my-conp4.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSearchText:function(e){
      this.triggerEvent('search', {
        searchText: e.detail.value
      })
    }
  }
})
