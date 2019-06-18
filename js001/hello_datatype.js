/**一、js数据类型 
 * 查看数据类型的关键字：typeof
 * 在 JavaScript 中有 七 种不同的数据类型：string\number\boolean\object\null\undefined\Symbol
                其中：3种原始类型（primitive type）：string\number\boolean
                     3种对象类型：Object\Array\Function
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

// 1、typeof用法
var x = new function () {}
console.log(typeof x)

function f() {}
console.log(typeof f);

// 2、定义变量
var carname = String();
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

// 3、布尔值Boolean
/**
 * 下列运算符会返回布尔值：
 *   前置逻辑运算符： ! (Not)
 *   相等运算符：===，!==，==，!=
 *   比较运算符：>，>=，<，<=
 * 
 * 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。
 * 转换规则是除了下面六个值被转为false，其他值都视为true。
 *   undefined
 *   null
 *   false
 *   0
 *   NaN
 *   ""或''（空字符串）
 *
 */

// 空数组（[]）和空对象（{}）对应的布尔值，都是true
if ([]) {
    console.log('true');
}
// true

if ({}) {
    console.log('true');
}
// true


// 4、数值Number
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324
console.log(123e235)

//NaN是一个特殊数值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。
console.log(5 - 'x')

//NaN不等于任何值，包括它本身。
console.log(NaN === NaN) // false

//NaN与任何数（包括它自己）的运算，得到的都是NaN
console.log(NaN - 32) // NaN

//Infinity表示“无穷”,Infinity的四则运算，符合无穷的数学计算规则。
console.log(5 - Infinity)
console.log(Infinity / 5) // Infinity
console.log(5 / Infinity) // 0

//parseInt方法用于将字符串转为整数
console.log(parseInt('123')) // 123

//如果parseInt的参数不是字符串，则会先转为字符串再转换。
//如下等同于parseInt('1.23') // 1
console.log(parseInt(1.23)) // 1

var abstr = '527857842975.1234567'
console.log(abstr)

//parseInt方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。
//默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。
console.log(parseInt('0101', 2))
console.log(parseInt('10', 36))

//parseFloat方法用于将一个字符串转为浮点数。
console.log(parseFloat('3.14')) // 3.14
console.log(parseFloat('0.0314E+2')) // 3.14

//isNaN方法可以用来判断一个值是否为NaN
isNaN(123) // false
//isNaN只对数值有效，如果传入其他值，会被先转成数值。因此，使用isNaN之前，最好判断一下数据类型。
function myIsNaN1(value) {
    return typeof value === 'number' && isNaN(value);
}
console.log(myIsNaN1(123))

//判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。
function myIsNaN2(value) {
    return value !== value;
}
console.log(myIsNaN2(NaN))

//isFinite方法返回一个布尔值，表示某个值是否为正常的数值。
console.log(isFinite(Infinity)) // false
console.log(isFinite(-1))

//5、字符串String
//字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。例如： 'abc'、"abc"

//如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠(\)。
var longString1 = 'Long \
long \
long \
string1';
console.log(longString1)

//连接运算符（+）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。
var longString2 = 'Long ' +
    'long ' +
    'long ' +
    'string2';
console.log(longString2)

//如果想输出多行字符串，有一种利用多行注释的变通方法。
console.log((function () {
    'line1'
    'line2'
    'line3'
}).toString().split('\n').slice(1, -1).join('\n'))
// "line 1
// line 2
// line 3"

//反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。
/**
 * \0 ：null（\u0000）
 * \b ：后退键（\u0008）
 * \f ：换页符（\u000C）
 * \n ：换行符（\u000A）
 * \r ：回车键（\u000D）
 * \t ：制表符（\u0009）
 * \v ：垂直制表符（\u000B）
 * \' ：单引号（\u0027）
 * \" ：双引号（\u0022）
 * \\ ：反斜杠（\u005C）
 */

console.log('1\n2')

//字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。
var s1 = 'hello';
console.log(s1[0]) // "h"
console.log(s1[1]) // "e"

console.log('helloworld' [7]) // "r"

console.log(s1.length)

//Base64 转码
/**所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。
 * 使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。
 * javaScript 原生提供两个 Base64 相关的方法。
 * btoa()：任意值转为 Base64 编码
 * atob()：Base64 编码转为原来的值 */
var string1 = 'Hello World!';

//console.log(btoa(string1)) // "SGVsbG8gV29ybGQh"
//console.log(atob('SGVsbG8gV29ybGQh')) // "Hello World!"