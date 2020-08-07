/**
 *  一、js数据类型 --- 函数
 * 
 * 1、函数定义
 * 
 */

'use strict'
/** 1、两种声明函数的方法 */
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log('function abs(x) 返回：' + abs(-100))

var vabs = function (x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}

console.log('var vabs = function (x) 返回:' + vabs(-200))


// 2、arguments可以获得所有的输入参数
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i = 0; i < arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}

foo(10, 20, 30)

// 3、rest参数的用法
function foo1(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo1(1, 23)
foo1(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

// 4、申明变量
function foo2() {
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i = 0; i < 101; i++) {
        if (i / 5 == i % 10)
            console.log(i)
    }
}

foo2()

// 不在任何函数内定义的变量就具有全局作用域
var course = 'Learn JavaScript'
console.log(course)

// 5、名字空间：全局变量会造成冲突，把自己的所有变量和函数全部绑定到一个全局变量中能有效减少冲突。
// 唯一的全局变量MYAPP:
var MYAPP = {}

// 其他变量:
MYAPP.name = 'myapp'
MYAPP.version = 1.0

// 其他函数:
MYAPP.foo = function () {
    console.log('hello 参数')
    return 'foo'
}

MYAPP.foo()

// 6、块级作用域,let的使用
// JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的
// 为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
function foo3() {
    var sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += i;
    }
    // SyntaxError:
    try {
        i += 1
    } catch (error) {
        console.log('SyntaxError')
        return
    }
}

foo3()

// 7、const：ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域
const PI = 3.14;
//PI = 3; // 某些浏览器不报错，但是无效果！
console.log(PI) // 3.14

// 8、解构赋值：从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值。
// 什么是解构赋值？我们先看看传统的做法，如何把一个数组的元素分别赋值给几个变量：

var array = ['hello1', 'JavaScript1', 'ES61'];
var x1 = array[0]
var y1 = array[1]
var z1 = array[2]
console.log('x1 = ' + x1 + ', y = ' + y1 + ', z = ' + z1)

//现在，在ES6中，可以使用解构赋值，直接对多个变量同时赋值：
var [x, y, z] = ['hello', 'JavaScript', 'ES6']
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z)

//对数组元素进行解构赋值时，多个变量要用[...]括起来。
//如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致：
let [x2, [y2, z2]] = ['hello', ['JavaScript', 'ES6']]
console.log('x2 = ' + x2 + ', y2 = ' + y2 + ', z2 = ' + z2)

let [, , z3] = ['hello', 'JavaScript', 'ES6666']; // 忽略前两个元素，只对z赋值第三个元素
console.log('z3 = ' + z3)