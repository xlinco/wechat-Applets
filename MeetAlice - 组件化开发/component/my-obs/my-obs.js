// component/my-obs/myobs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataA:{
      type:String,
      value:'xxx',
      observer:function(newVal,oldVal,change){
        //newVal是新的值，oldVal是老的值，change是数据的来源
        console.log(newVal, oldVal, change)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:1,
    movie:{
      name:'AAA'
    }
  },

  observers:{
    'num':function(num){
      console.log(num)
    },
    'movie.name':function(name){
      console.log(name)
    },
    // 每一次都会被触发
    // '**':function(){

    // }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increase:function(){
      // this.setData({
      //   num:this.data.num+1
      // })
      this.setData({
        movie: {
          name: 'BBB',
          title:'CCC'
        }
      })
    }
  }
})
