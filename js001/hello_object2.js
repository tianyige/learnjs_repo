/**
 *   一、js数据类型 --- js对象
 * 
 * 2、this 关键字
 *  this都有一个共同点：它总是返回一个对象。
 *  简单说，this就是属性或方法“当前”所在的对象。
 * 
 */


// 1、this的指向是动态可变的。
// JavaScript 语言之中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行，this就是函数运行时所在的对象（环境）。
// JavaScript 支持运行环境动态切换，也就是说，this的指向是动态的，没有办法事先确定到底指向哪个对象。

// 如下，函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。
function f() {
    return '姓名：' + this.name;
}

var A = {
    name: '张三',
    describe: f
};

var B = {
    name: '李四',
    describe: f
};

console.log(A.describe()); // "姓名：张三"
console.log(B.describe()); // "姓名：李四"

// 只要函数被赋给另一个变量，this的指向就会变。
// C.describe被赋值给变量t，内部的this就会指向t运行时所在的对象（本例是顶层对象）。
var C = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    }
};

var name = '李四';
var t = C.describe;
console.log(t()); // "姓名：李四"


// 2、原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。属性的值如果是一个函数，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给属性的value属性。
/**
 *   var obj = { foo:  5 };
 * foo属性的描述对象如下：
 {
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
 */

// this在函数体内部，指代函数当前的运行环境。
var f1 = function () {
    console.log(this.x);
}

var x = 1;
var obj = {
    f1: f1,
    x: 2,
};

// 单独执行
f1() // 1

// obj 环境执行
obj.f1(); // 2


/**
 *  3、this主要有三个使用场合：1) 全局环境: 全局环境使用this，它指的就是顶层对象window。
                                                                 2) 构造函数: 构造函数中的this，指的是实例对象。
                                                                 3) 对象的方法: 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。
 */


// 如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。
var a = {
    p: 'Hello',
    b: {
        m: function () {
            console.log(this.p);
        }
    }
};

a.b.m() // undefined

// ***以上代码等同于以下代码

var b = {
    m: function () {
        console.log(this.p);
    }
};

var a = {
    p: 'Hello',
    b: b
};

(a.b).m() // 等同于 b.m()  
b.m() // undefined

// 以下代码实现打印hello
var a = {
    b: {
        m: function () {
            console.log(this.p);
        },
        p: 'Hello'
    }
};

a.b.m(); // Hello

// 如果这时将嵌套对象内部的方法赋值给一个变量，this依然会指向全局对象。
var hello = a.b.m;
hello(); // undefined

// 上面代码中，m是多层对象内部的一个方法。为求简便，将其赋值给hello变量，结果调用时，this指向了顶层对象。
// 为了避免这个问题，可以只将m所在的对象赋值给hello，这样调用时，this的指向就不会变。
var hello = a.b;
hello.m() // Hello


// 4、绑定 this 的方法: JavaScript 提供了call、apply、bind这三个方法，来切换/固定this的指向。
// 4.1  Function.prototype.call()  函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。

// call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。
var n = 123;
var obj = {
    n: 456
};

var a = function a1() {
    console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
//a.call(window) // 123
a.call(obj) // 456

// call方法还可以接受多个参数。func.call(thisValue, arg1, arg2, ...) 。 call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数。
function add(a, b) {
    return a + b;
}

console.log(add.call(this, 1, 2)); // 3

// call方法的一个应用是调用对象的原生方法。
var obj = {};
obj.hasOwnProperty('toString') // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
    return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false

// 上面代码中，hasOwnProperty是obj对象继承的方法，如果这个方法一旦被覆盖，就不会得到正确结果。
// call方法可以解决这个问题，它将hasOwnProperty方法的原始定义放到obj对象上执行，这样无论obj上有没有同名方法，都不会影响结果。


// 4.2 Function.prototype.apply()  apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。
// 唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。func.apply(thisValue, [arg1, arg2, ...])
// apply方法的第一个参数也是this所要指向的那个对象，如果设为null或undefined，则等同于指定全局对象。
// 第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在call方法中必须一个个添加，但是在apply方法中，必须以数组形式添加。

function f(x, y) {
    console.log(x + y);
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2

// （1）找出数组最大元素
var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a) // 15

// （2）将数组的空元素变为undefined  
// (空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined。因此，遍历内部元素的时候，会得到不同的结果。)
Array.apply(null, ['a', , 'b']) // [ 'a', undefined, 'b' ]

// （3）转换类似数组的对象
// 这个方法起作用的前提是，被处理的对象必须有length属性，以及相对应的数字键。
Array.prototype.slice.apply({
    0: 1,
    length: 1
}) // [1]
Array.prototype.slice.apply({
    0: 1
}) // []
Array.prototype.slice.apply({
    0: 1,
    length: 2
}) // [1, undefined]
Array.prototype.slice.apply({
    length: 1
}) // [undefined]


// 4.3 Function.prototype.bind()  bind()方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。

// bind方法的参数就是所要绑定this的对象
var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};

var func = counter.inc.bind(counter);
func();
counter.count // 1

//  this绑定到其他对象也是可以的。
var obj = {
    count: 100
};
var func1 = counter.inc.bind(obj);
func1();
obj.count // 101