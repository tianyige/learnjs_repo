/**
 * 一、js数据类型 --- 函数
 * 2、对象中的方法
 * 
 */

'use strict'

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
}

console.log(xiaoming.age) // function xiaoming.age()
console.log(xiaoming.age())

// 绑定到对象上的函数称为方法，在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。

// apply与call的用法
// 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
function getAge1() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaohong = {
    name: '小红',
    birth: 1998,
    age: getAge1
};

console.log(xiaohong.age()); // 20
console.log(getAge1.apply(xiaohong, [])); // 20, this指向xiaoming, 参数为空

/** 另一个与apply()类似的方法是call()，唯一区别是：
    apply()把参数打包成Array再传入；
    call()把参数按顺序传入
*/

// 对普通函数调用，我们通常把this绑定为null。
console.log(Math.max.apply(null, [3, 5, 4])) // 5
console.log(Math.max.call(null, 3, 5, 4)) // 5

// 利用apply()，我们还可以动态改变函数的行为。
// JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
// 现在假定我们想统计一下代码一共调用了多少次parseInt()，最佳方案是用我们自己的函数替换掉默认的parseInt()：
var count = 0;
var oldParseInt = parseInt; // 保存原函数

var parseInt1 = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

parseInt1(2)
parseInt1(22)
parseInt1(26)
console.log(count)