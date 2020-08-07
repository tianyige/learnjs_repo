/**
 * 一、js数据类型 --- js对象
 * 
 * 4、JavaScript 对象
 * 
 * JavaScript 中的所有事物都是对象
 * JavaScript 对象是变量的容器
 * JavaScript 对象是键值对的容器
 * 
 * 1、JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象。
 * 2、当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，
 * 如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。
 * 创建对象
 * eg： var arr = [1, 2, 3];
 *      arr ----> Array.prototype ----> Object.prototype ----> null
 *      function foo() {
            return 0;
        }
        foo ----> Function.prototype ----> Object.prototype ----> null
 * 
 */

'use strict'

// 3、构造函数
// JavaScript还可以用一种构造函数的方法来创建对象。它的用法是，先定义一个构造函数：
function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}

// 用关键字new来调用这个函数，并返回一个对象：
var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!

/**
 * 如果不写new，这就是一个普通函数，它返回undefined。但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this，也就是说，不需要在最后写return this;。
   新创建的xiaoming的原型链是： xiaoming ----> Student.prototype ----> Object.prototype ----> null

   xiaoming的原型指向函数Student的原型。如果你又创建了xiaohong、xiaojun，那么这些对象的原型与xiaoming是一样的：
   xiaoming ↘
   xiaohong -→ Student.prototype ----> Object.prototype ----> null
   xiaojun  ↗

   用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：
        xiaoming.constructor === Student.prototype.constructor;  // true
        Student.prototype.constructor === Student; // true
        Object.getPrototypeOf(xiaoming) === Student.prototype; // true
        xiaoming instanceof Student; // true
 */

// 4、对象共享同一个函数
/**
 * 要让创建的对象(xiaoming、xiaohong)共享一个hello函数，根据对象的属性查找原则，我们只要把hello函数移动到xiaoming、xiaohong这些对象共同的原型上就可以了，也就是Student.prototype：
 */
function Student1(name) {
    this.name = name;
}

Student1.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
}

var xiaohong = new Student1('小红');
xiaohong.name; // '小红'
xiaohong.hello(); // Hello, 小红!


// 5、防止调用构造函数时未写new，可以编写一个createStudent()函数，在内部封装所有的new操作。一个常用的编程模式像这样：

function Student2(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student2.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student2(props || {})
}

// 这个createStudent()函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传：

var xiaohei = createStudent({
    name: '小黑'
});

xiaohei.hello()
console.log(xiaohei.grade)