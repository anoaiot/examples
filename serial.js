'use strict';

var shark = require('shark.io');

shark.init();
var setup = shark.setup;

setup.on('open',function(event){
    event.serial.info(function(data){
        console.log(data);
        process.exit(1);
    });
});
