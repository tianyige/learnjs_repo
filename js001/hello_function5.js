/**
 * 一、js数据类型 --- 函数
 * 5、立即调用的函数表达式（IIFE）、eval 命令 
 * 根据 JavaScript 的语法，圆括号()跟在函数名之后，表示调用该函数。
 * “立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。
    (function(){ * code * }());
    // 或者
    (function(){ * code * })();
    // 或者
    var i = function(){ return 10; }();
*
*IIFE 它的目的有两个：一是不必为函数命名，避免了污染全局变量；
*                                           二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。
*
 */

 // IIFE如下两种格式
(function f1() {
    var n = 888;
    console.log(n);
    return n;
})();

(function () {
    var n = 999;
    console.log(n);
    return n;
}());

// 