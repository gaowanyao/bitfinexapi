'use strict'


const REST = require('./bitfinex/rest')


const API_KEY = "YOUR API_KEY";
const API_SECRET = "API_SECRET";



var opts = { version: 1, transform: false, nonceGenerator: false };
const client = new REST(API_KEY, API_SECRET, opts);

// console.log(client)

//获取当天最新信息
client.today("BTCUSD",function(err,ret){
  console.log(ret);
  // console.log(ret);
});

//获取bitfinex行情（盘口数据）
// client.ticker("btcusd",function(err,ret){
//   console.log(ret);
// });


// client.account_infos(function(err,ret){
//   console.log(ret);
//   console.log(typeof(ret));
//   console.log(ret[0]['fees']);
// });
