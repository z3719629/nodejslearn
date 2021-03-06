'use strict';

// 引入hello模块:
var greet = require('./hello');
var path = require('path');
var express = require('express');
var app = express();
var exec = require('child_process').exec;
var cmdStr = 'erro';

var binaryEncoding = 'binary';
var iconv = require('iconv-lite');



//app.set('view engine', 'jade'); // 设置模板引擎
//app.set('views', path.join(__dirname, 'template'));  // 设置模板相对路径(相对当前目录)

app.get('/', function(request, response) {
    var res = request.get("X-Requested-With");
    //response.render('template/index.jade');

    exec(cmdStr, { encoding: binaryEncoding }, function(err,stdout,stderr){
        stdout = iconv.decode(new Buffer(stdout, binaryEncoding), 'cp936');
        stderr = iconv.decode(new Buffer(stderr, binaryEncoding), 'cp936');
        if(err) {
            console.log('get weather api error:'+stderr);
            response.send('<textarea>' + stderr + '</textarea>');
        } else {
            /*
             这个stdout的内容就是上面我curl出来的这个东西：
             {"weatherinfo":{"city":"北京","cityid":"101010100","temp":"3","WD":"西北风","WS":"3级","SD":"23%","WSE":"3","time":"21:20","isRadar":"1","Radar":"JC_RADAR_AZ9010_JB","njd":"暂无实况","qy":"1019"}}
             */
            //var data = JSON.parse(stdout);
            //var str = iconv.decode(stdout, 'GBK');
            //console.log("成功" +stdout);

            console.log(stdout);
            response.send('<textarea>' + stdout + '</textarea>');
        }
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

var s = 'Michael';

greet.hello(); // Hello, Michael!