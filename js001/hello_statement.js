/**
 * 三、JavaScript 基本语句
 * 1、js语句标识符
 * var	声明一个变量。
 * function	定义一个函数
 * return	退出函数
 * 
 * ##条件语句
 * if ... else	用于基于不同的条件来执行不同的动作。
 * switch	用于基于不同的条件来执行不同的动作。
 * 三元运算符    (条件) ? 表达式1 : 表达式2
 * 
 * ##循环语句
 * for	在条件语句为 true 时，可以将代码块执行指定的次数。
 * for ... in	用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
 * while	当条件语句为 true 时，执行语句块。
 * do ... while	执行一个语句块，在条件语句为 true 时继续执行该语句块。
 * break	用于跳出循环。
 * continue	跳过循环中的一个迭代。
 * 
 * ##异常处理
 * try	实现错误处理，与 catch 一同使用。
 * catch	语句块，在 try 语句块执行出错时执行 catch 语句块。
 * throw	抛出（生成）错误 。
 * 
 */

'use strict'
var abc = 100;
for (var i = 1; i < 50; i++) {
    console.log("kaishi" + i);
    var temp = abc + i;
    if (temp == 110) {
        console.log(i);
        continue;

    } else if (temp == 120) {
        console.log(i);
    } else {
        console.log("zhixing else" + i);
        if (temp > 120)
            break;
    }
    console.log("jieshu" + i);
}

var x = new String();
var d = new Date().getDay();
switch (d) {
    case 0:
        x = "今天是星期日";
        break;
    case 1:
        x = "今天是星期一";
        break;
    case 2:
        x = "今天是星期二";
        break;
    case 3:
        x = "今天是星期三";
        break;
    case 4:
        x = "今天是星期四";
        break;
    case 5:
        x = "今天是星期五";
        break;
    case 6:
        x = "今天是星期六";
        break;
}
console.log(x);

var x1 = new String();
var d = new Date().getDay();
switch (d) {
    case 6:
        x1 = "今天是星期六";
        break;
    case 0:
        x1 = "今天是星期日";
        break;
    default:
        x1 = "期待周末";
}
console.log(x1);