/**函数
 * 对象中的方法
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