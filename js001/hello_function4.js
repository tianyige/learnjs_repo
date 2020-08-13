/**
 * 一、js数据类型 --- 函数
 * 4、闭包：
 * JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以作为另一个函数的参数，这种输入参数包含函数的函数就称之为高阶函数。
 * JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。
 * JavaScript 语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
 * 由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
 * 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。闭包的另一个用处，是封装对象的私有属性和私有方法。
 * 
 */

'use strict'

// 1、闭包的用处，读取函数内部的变量 (在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。)
function f1() {
    var n = 999;

    function f2() {
        console.log(n);
    }
    return f2;
}

var result = f1();
result(); // 999

//  2、闭包的用处，让变量始终保持在内存中 (闭包可以使得它诞生环境一直存在)
function createIncrementor(start) {
    return function () {
        return start++;
    };
}

var inc = createIncrementor(5);

console.log(inc()); // 5
console.log(inc()); // 6
console.log(inc()); // 7

// 上面代码中，start是函数createIncrementor的内部变量。通过闭包，start的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。
//  从中可以看到，闭包inc使得函数createIncrementor的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。
// 为什么会这样呢？原因就在于inc始终在内存中，而inc的存在依赖于createIncrementor，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。

// 3、闭包的另一个用处，是封装对象的私有属性和私有方法。
function Person(name) {
    var _age;

    function setAge(n) {
        _age = n;
    }

    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}

var p1 = Person('张三');
p1.setAge(25);
console.log(p1.getAge()); // 25

// 上面代码中，函数Person的内部变量_age，通过闭包getAge和setAge，变成了返回对象p1的私有变量。