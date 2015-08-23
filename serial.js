'use strict';

var shark = require('shark.io');

shark.init('127.0.0.1:6969');
var setup = shark.setup;

setup.on('open',function(event){
    event.serial.info(function(data){
        console.log(data);
        process.exit(1);
    });
});
