var host = 'http://op.juhe.cn';

function getData(url,method,data={},header){
  return new Promise(function(resolve,reject){
    wx.request({
      url: host+url,
      method:method,
      header:header,
      data:data,
      success:function(res){
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject('error');
        }
      },
      fail: function (e) {
        reject(e);
      }
    })
  })
}

module.exports = {
  getData: getData
}