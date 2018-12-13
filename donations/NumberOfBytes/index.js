'use strict';
// const async = require('async');
const conf = require('byteballcore/conf.js');
// const db = require('byteballcore/db.js');
const eventBus = require('byteballcore/event_bus.js');
const headlessWallet = require('headless-byteball');
// const validationUtils = require('byteballcore/validation_utils.js');
const wallet = require('byteballcore/wallet.js');
const device = require('byteballcore/device.js');
var Request = require("request");

headlessWallet.setupChatEventHandlers();

eventBus.on('text', function(from_addr, text) {
  let arr = new Array();
  arr = text.split(" ");
  // 10 to btc = 10 btc worth of bytes
  // 200 to steem = 200 steem worth of bytes by getting steem to btc and and then result btc*200 and then getting 200 steem worth of bytes from that result
  console.log(arr);
  if (arr.length === 3) {
    Request.get(`https://api.coingecko.com/api/v3/simple/price?ids=byteball&vs_currencies=${arr[2]}&include_24hr_vol=false&include_last_updated_at=false`, (err, res, body) => {
      if (!err) {
        let pbody = JSON.parse(body);
        let curren = arr[2].toLowerCase();
        let valknow = parseFloat(arr[0]);
        let val = String(valknow * parseFloat(pbody.byteball[`${curren}`]));
        if (val === "NaN") {
          // e.g. 10 to Steem => 10 gbytes = ?steem
          Request.get(`https://api.coingecko.com/api/v3/simple/price?ids=${arr[2]}&vs_currencies=btc&include_24hr_vol=false&include_last_updated_at=false`, (err, res, body) => {
            let pbody_2 = JSON.parse(body);
            let curren = arr[2].toLowerCase();
            let newval = 1.0 / parseFloat(pbody_2[`${curren}`].btc); // e.g. btc to steem
            Request.get(`https://api.coingecko.com/api/v3/simple/price?ids=byteball&vs_currencies=btc&include_24hr_vol=false&include_last_updated_at=false`, (err, res, body2) => {
              let pbody_3 = JSON.parse(body2);
              let curren = arr[2].toLowerCase();
              let newval_2 = parseFloat(pbody_3.byteball.btc); // byteball to Btc
              // 1 GB worth of btc * 1 Btc worth of Steem = 1 GB worth of Steem (Formula concluded so far)
              device.sendMessageToDevice(from_addr, 'text', `${arr[0]} Gbytes = ` + String(valknow * (newval * newval_2)) + " " + curren);
            })
          })
        } else if (val !== "NaN") {
          device.sendMessageToDevice(from_addr, 'text', `${arr[0]} Gbytes = ` + val + " " + curren);
        }
      } else {
        device.sendMessageToDevice(from_addr, 'text', 'There is a problem getting your request done, Make sure your command is right, send `nob` to know commands');
      }
    })
  } else {
    device.sendMessageToDevice(from_addr, 'text', 'Please enter correct command or type `nob` to get help');
  }
  //device.sendMessageToDevice(from_addr, 'text', text.split("").reverse().join(""));
})
