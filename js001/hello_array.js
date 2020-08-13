

// 1、定义  
// 数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。
var arr1 = ['a', 'b', 'c'];

// 数组也可以先定义后赋值
var arr2 = [];

arr2[0] = 'a';
arr2[1] = 'b';
arr2[2] = 'c';

// 任何类型的数据，都可以放入数组。
var arr3 = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
  ];
  
  console.log(typeof arr3[0] );// Object {a: 1}
  console.log(typeof arr3[1] );// [1, 2, 3]
  console.log(typeof arr3[2] );// function (){return true;}


  // Object.keys方法返回数组的所有键名。
  console.log(Object.keys(arr3));

  // JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。
  // 如下等价
  console.log(arr1['0'] ); // 'a'
  console.log(arr1[0] );// 'a'

  //  数组的length属性，返回数组的成员数量。
  console.log(arr1.length); //3

  // length属性是可写的。
  arr1.length = 5;
  console.log(arr1.length); //5

  arr1.length = 2;
  console.log(arr1.length); //2

  //  检查某个键名是否存在的运算符in，适用于对象，也适用于数组。
  console.log(2 in arr1); //false
  console.log(1 in arr1); //true


  // 2、for...in 循环和数组的遍历
 //  for...in循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。
 var a = [1, 2, 3];

for (var i in a) {
  console.log(a[i]);
}

// 数组的forEach方法，也可以用来遍历数组
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});

// 3、类似数组的对象
// 如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
  };
  
  console.log(obj[0] )// 'a'
  console.log(obj[1]) // 'b'
  console.log(obj.length) // 3
 // console.log(obj.push('d')) // TypeError: obj.push is not a function

 // 典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。
 // arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

console.log(arrayLike[0] );// 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// 数组的slice方法可以将“类似数组的对象”变成真正的数组。
var arr = Array.prototype.slice.call(arrayLike);

