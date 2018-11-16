/**函数
 * 高阶函数：
 * JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以作为另一个函数的参数，这种输入参数包含函数的函数就称之为高阶函数。
 */

'use strict'

function add(x, y, f) {
    return f(x) + f(y);
}

console.log(add(1, -5, Math.abs))

// map函数的用法
// map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

// reduce函数的用法
// Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，
// reduce()把结果继续和序列的下一个元素做累积计算，其效果就是： [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
console.log(arr.reduce(function (x, y) {
    return x + y;
})) // 25

// filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r)

// 回调函数：filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：
var arr1 = ['A', 'B', 'C'];
var r1 = arr1.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

// JavaScript的Array的sort()方法就是用于排序的，但是排序结果可能让你大吃一惊：
// 看上去正常的结果:
// ['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];
// 实际apple排在了最后:
console.log(['Google', 'apple', 'Microsoft'].sort()) // ['Google', 'Microsoft", 'apple']
console.log([10, 20, 1, 2].sort())

var arr2 = [10, 20, 1, 2]
arr2.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr2); // [1, 2, 10, 20]

//默认情况下，对字符串排序，是按照ASCII的大小比较的，
//现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以：
var arr3 = ['Google', 'apple', 'Microsoft'];
arr3.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']


/* sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象 */