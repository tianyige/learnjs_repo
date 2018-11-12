/**
 * 二、js的运算符
 * 算术运算符 + - × / % ++ --
 * 赋值运算符 = += -= ×= /= %=
 * 比较运算符：比较运算符在逻辑语句中使用，以测定变量或值是否相等。
 *      等于==、绝对等于===（值和类型均相等）、不等于!=、不绝对等于！==（值和类型有一个不相等，或两个都不相等）、大于>、小于<、>=、<=
 * 逻辑运算符：逻辑运算符用于测定变量或值之间的逻辑。
 *      或|| 且&& 非！
 * 条件运算符：基于某些条件对变量进行赋值的条件运算符。
 *      语法variablename=(condition)?value1:value2 
 * 
 */

'use strict'

//算术运算符(取模)
var y = 5
var x = y % 2
console.log("\'x = y % 2\' = " + x)

//字符串的 + 运算符
var txt1 = "What a very"
var txt2 = "nice day"
var txt3 = txt1 + " " + txt2
console.log("txt3=txt1+\' \'+txt2 = " + txt3)

//字符串和数字进行 + 运算,返回字符串
var z = "Hello" + 5;
console.log("\'Hello\' + 5 = " + z)

var a1 = 10
console.log(a1 != 10) //值相等、类型相等
console.log(a1 != '10') //值相等
console.log(a1 !== 10) //值相等、类型相等
console.log(a1 !== '10') //值相等