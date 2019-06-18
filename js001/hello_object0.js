/**
 * 0、对象的基本定义
 * 
 * 对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。
 * 什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。
 */

'use strict'

// 1、对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合
var obj1 = {
    foo: 'Hello',
    bar: 'World'
};

// 2、对象的所有键名都是字符串，所以加不加引号都可以; 如果键名是数值，会被自动转为字符串。
// 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。
var obj2 = {
    '1p': 'Hello World',
    'h w': 'Hello World',
    'p+q': 'Hello World'
};

// 3、对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。
// 如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。
var obj3 = {
    p: function (x) {
        return 2 * x;
    }
};

console.log(obj3.p(1)); // 2

// 4、如果属性的值还是一个对象，就形成了链式引用。
// 属性可以动态创建，不必在对象声明时就指定。
obj3.liobj = obj2;
console.log(obj3.liobj['1p']);


// 5、读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。
// 如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理
console.log(obj1.foo)
console.log(obj2["1p"])
console.log(obj2["p+q"])

// 6、点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。
// 对象可以在任意时刻新增属性
obj1.abc = 'abc';
obj1['efg'] = 'efg';
console.log(obj1);

// 7、使用Object.keys方法查看一个对象本身的所有属性。
console.log(Object.keys(obj2));

// 8、delete命令用于删除对象的属性，删除成功后返回true
delete obj2["1p"]
console.log(Object.keys(obj2))

// 9、in运算符用于检查对象是否包含某个属性，它的左边是一个字符串，表示属性名，右边是一个对象。
console.log('foo' in obj1)

// 可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性
if ('toString' in obj1) {
    console.log(obj1.hasOwnProperty('toString')) // false
}

//10、for...in循环用来遍历一个对象的全部属性
for (var i in obj1) {
    console.log('键名：', i);
    console.log('键值：', obj1[i]);
}