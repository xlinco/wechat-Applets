// component/my-count/my-count.js
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
    counter:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increase:function(num){
      this.setData({
        counter: this.data.counter+num
      })
    }
  },
  // 组件的生命周期
  lifetimes:{
    created: function () {
      console.log('created组件创建')
    },
    attached: function () {
      console.log('attached组件添加到页面中')
    },
    ready: function () {
      console.log('ready组件渲染完成')
    },
    moved: function () {
      console.log('moved组件从一个节点移到另一个节点')
    },
    detached: function () {
      console.log('detached组件移除')
    },
    error: function () {
      console.log('error')
    },
  },
  // 组件所在页面的生命周期
  pageLifetimes: {
    show: function () {
      console.log('show')
    },
    hide: function () {
      console.log('hide')
    },
  }
})
