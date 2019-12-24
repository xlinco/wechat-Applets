let comm = Behavior({
  properties:{
    dataB:{
      type:Number,
      value:1,
    }
  },
  data:{
    title:'共享标题',
    name: 'xiaoming',
  },
  methods:{
    consolg:function(){
      console.log('共享方法')
    }
  },
  ready:function(){
    console.log('共享ready')
  }
})

module.exports = comm;