/**一、js数据类型 
 * 查看数据类型的关键字：typeof
 * 在 JavaScript 中有 5 种不同的数据类型：string\number\boolean\object\function
                     3 种对象类型：Object\Date\Array
                     2 个不包含任何值的数据类型：null\undefined
                     NaN 的数据类型是 number
                     未定义变量的数据类型为 undefined
 * 1、值类型(基本类型)： 字符串(String)、数字(Number)、布尔(Boolean)、空(Null)、未定义(Undefined)、Symbol
 *       引用数据类型： 对象（Object）、数组（Array）、函数（Function）
 * 2、变量初始化：
 * 字符串： var carname = 'mini'
 *         var carname = "volvo"
 * 
 * 数字：   var x1 = 3.14
 *         var y1 = 123e5
 * 
 * 布尔：   var x = true
 *         var y = false
 *         JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true
 * 
 * Undefined 和 Null：Undefined 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。
 ×
 * 
 * 数组：   var cars=["Saab","Volvo","BMW"]
 *         var cars=new Array("Saab","Volvo","BMW")
 * 
 * 对象：   var person={firstname:"John", lastname:"Doe", id:5566};
 *         name=person.lastname;
 ×         name=person["lastname"];
 *  
 × 3、声明变量类型
 ×   当您声明新变量时，可以使用关键词 "new" 来声明其类型：       
 *   var carname = new String;
 ×   var x=      new Number;
 ×   var y=      new Boolean;
 ×   var cars=   new Array;
 ×   var person = new Object;
 *   
*/

'use strict'
var x = new function(){}
console.log(typeof x)
var carname = new String
var message = 'hello node.js 001'
var x = 1
var arr1 = [1, 2, 5, 'helloarray']
var arr2 = new Array(1, 'arr2')

if (x == true) {
    console.log(x)
    console.log(arr2)
}

console.log(message)
console.log(carname)

var person = {
    name: 'bopb',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'bijing',
    zipcode: null
}

console.log(person.city.toUpperCase())

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}


var m = new Map();
var s = new Set();
m.set('abc', 12)
m.set('aa', '23')
m.set(45, 'hello')
m.set('abc', 34)
console.log(m);