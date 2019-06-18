/**
 * 1、实例对象与new命令
 * 
 * 面向对象编程将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。
 * 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。
 * 1)对象是单个实物的抽象。
 * 2)对象是一个容器，封装了属性（property）和方法（method）。
 * 3)JavaScript语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。
 * 4)JavaScript 语言使用构造函数（constructor）作为对象的模板。所谓”构造函数”，就是专门用来生成实例对象的函数。
 *   它就是对象的模板，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构。
 * 5)构造函数的特点有两个。(为了与普通函数区别，构造函数名字的第一个字母通常大写。)
 *     函数体内部使用了this关键字，代表了所要生成的对象实例。
 *     生成对象的时候，必须使用new命令。
 * 6)new 命令的原理: 使用new命令时，它后面的函数依次执行下面的步骤:
 *     创建一个空对象，作为将要返回的对象实例。
 *     将这个空对象的原型，指向构造函数的prototype属性。
 *     将这个空对象赋值给函数内部的this关键字。
 *     开始执行构造函数内部的代码。
 *     
 *
 */

'use strict'

// 1、new命令的作用，就是执行构造函数，返回一个实例对象。
var Vehicle = function (p) {
    this.price = p;
};

var v = new Vehicle(500);
console.log(v.price)
console.log(v)

// 2、为了保证构造函数必须与new命令一起使用，一个解决办法是，构造函数内部使用严格模式，即第一行加上use strict。
// 这样的话，一旦忘了使用new命令，直接调用构造函数就会报错。
function Fubar1(foo, bar) {
    'use strict';
    this._foo = foo;
    this._bar = bar;
}

//Fubar1()  //直接使用会报错

// 3、判断构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。
function Fubar2(foo, bar) {
    if (!(this instanceof Fubar2)) {
        return new Fubar2(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}

console.log(Fubar2(1, 2)._foo) // 1
console.log((new Fubar2(1, 2))._foo) // 1

// 测试普通函数，返回对象
function getMessage() {
    return {
        foo: 'Hello',
        bar: 'World'
    }
}

var msg = new getMessage();

console.log(msg) // {}
console.log(typeof msg) // "object"

// 4、new命令简化的内部流程，可以用下面的代码表示。
function _new( /* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
}

function Person(name, age) {
    console.log(name + age)
}
// 实例
var actor = _new(Person, '张三', 28);

// 5、函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined。
function f() {
    console.log(new.target === f);
}

f() // false
new f() // true

// 使用这个属性，可以判断函数调用的时候，是否使用new命令
function f1() {
    if (!new.target) {
        throw new Error('请使用 new 命令调用！');
    }
    // ...
}

new f1() // Uncaught Error: 请使用 new 命令调用！

// 6、构造函数作为模板，可以生成实例对象。如果以现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法。
var person1 = {
    name: '张三',
    age: 38,
    greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
};

var person2 = Object.create(person1);

console.log(person2.name) // 张三
person2.greeting() // Hi! I'm 张三.