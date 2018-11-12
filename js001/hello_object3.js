/**
 * 四、class类和继承
 * 
 */

// 1、定义class

/* function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
} */

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

var xiaohei = new PrimaryStudent('小黑', 100)
xiaohei.hello()
console.log(xiaohei.grade)

/* ES6引入的class和原有的JavaScript原型继承有什么区别呢？
实际上它们没有任何区别，class的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。
简而言之，用class的好处就是极大地简化了原型链代码。 */