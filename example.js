const Bitfinexapi = require('./index.js');


const API_KEY = "7tvoYnXVmuqnp5HyqFjKFsjXpSi16PV5yeMAU7plMsj";
const API_SECRET = "4RF0htlD41OkSBW1CNLkx2AoTurO95MOgBQX9ZMlmp8";
var opts = { version: 1, transform: false, nonceGenerator: false };
const client = new Bitfinexapi(API_KEY, API_SECRET, opts);

// console.log(client)

//获取当天最新信息
// client.today("BTCUSD",function(err,ret){
//   console.log(ret);
//   // console.log(ret);
// });

//获取bitfinex行情（盘口数据）
client.ticker("btcusd",function(err,ret){
  console.log(ret);
});
client.ticker("ltcusd",function(err,ret){
  console.log(ret);
});
client.ticker("ethusd",function(err,ret){
  console.log(ret);
});

// client.account_infos(function(err,ret){
//   console.log(ret);
//   console.log(typeof(ret));
//   console.log(ret[0]['fees']);
// });
