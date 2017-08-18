'use strict';

// 引入hello模块:
var greet = require('./hello');
var path = require('path');
var express = require('express');
var app = express();

//app.set('view engine', 'jade'); // 设置模板引擎
//app.set('views', path.join(__dirname, 'template'));  // 设置模板相对路径(相对当前目录)

app.get('/', function(request, response) {
    var res = request.get("X-Requested-With");
    response.render('jCanvasDemo/login.html');
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

var s = 'Michael';

greet(s); // Hello, Michael!