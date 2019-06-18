/**
 * 四、JavaScript 对象的原型继承
 * 
 * JavaScript的原型继承实现方式就是：
 *   定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
 *   借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
 *   继续在新的构造函数的原型上定义新方法。
 * 
 * 我们要实现PrimaryStudent继承自Student，原型链为：
 * new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null
 * 
 */

// 1、 借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向Student.prototype。
// 为了实现这一点，参考道爷（就是发明JSON的那个道格拉斯）的代码，中间对象可以用一个空函数F来实现：
function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
}

// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F:
function F() {}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
console.log(xiaoming.name) // '小明'
console.log(xiaoming.grade) // 2

// 验证原型:
console.log(xiaoming.__proto__ === PrimaryStudent.prototype) // true
console.log(xiaoming.__proto__.__proto__ === Student.prototype) // true

// 验证继承关系:
console.log(xiaoming instanceof PrimaryStudent) // true
console.log(xiaoming instanceof Student) // true


// 2、把继承这个动作用一个inherits()函数封装起来，还可以隐藏F的定义，并简化代码：
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

//这个inherits()函数可以复用：

function Student1(props) {
    this.name = props.name || 'Unnamed';
}

Student1.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
}

function PrimaryStudent1(props) {
    Student1.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent1, Student1);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent1.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaohei:
var xiaohei = new PrimaryStudent1({
    name: '小黑',
    grade: 5
});
console.log(xiaohei.name) // '小黑'
console.log(xiaohei.grade) // 5

// 验证原型:
console.log(xiaohei.__proto__ === PrimaryStudent1.prototype) // true
console.log(xiaohei.__proto__.__proto__ === Student1.prototype) // true

// 验证继承关系:
console.log(xiaohei instanceof PrimaryStudent1) // true
console.log(xiaohei instanceof Student1) // true