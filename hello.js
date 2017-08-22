'use strict';

function greet(name) {
    console.log("基本数据类型------------------------------------");
    var a = "a";
    var b = a;
    b = "c";
    console.log("a   " + a);
    console.log("b   " + b);


    console.log("浅复制------------------------------------");
    //复制一个对象
    var a = {name: "aaa"};
    var b = a;
    console.log("a.name   " + a.name);
    console.log("b.name   " + b.name);

    //对b对象中的变量进行修改
    b.name = "bbb";
    console.log("a.name   " + a.name);
    console.log("b.name   " + b.name);
    //可以看到b对象改变了a对象中的值，这证明他们指向的是同一个内存空间。


    console.log("深复制------------------------------------");
    //那么怎么复制一个拥有自己独立空间的对象呢？
    a.name = "aaa";
    function deepCopy(a) {
        var c = {};
        for (var p in a) {
            c[p] = a[p];
        }
        return c;
    }
    b = deepCopy(a);
    b.name = "bbb";
    console.log("a.name   " + a.name);
    console.log("b.name   " + b.name);
}

module.exports = greet;