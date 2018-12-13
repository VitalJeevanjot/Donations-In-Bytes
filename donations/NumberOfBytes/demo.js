'use strict';
// const async = require('async');
const conf = require('byteballcore/conf.js');
// const db = require('byteballcore/db.js');
const eventBus = require('byteballcore/event_bus.js');
const headlessWallet = require('headless-byteball');
// const validationUtils = require('byteballcore/validation_utils.js');
const wallet = require('byteballcore/wallet.js');
const device = require('byteballcore/device.js');

//This event handles incoming messages.

eventBus.on('text', function(from_addr, text) {
  device.sendMessageToDevice(from_addr, 'text', text.split("").reverse().join(""));
})
