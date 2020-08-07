/**
 * 一、js数据类型 --- 函数
 * 5、箭头函数(Arrow Function)
 *        ES6标准新增了一种新的函数：Arrow Function（箭头函数）。为什么叫Arrow Function？因为它的定义用的就是一个箭头。
 * 
 */


//1、箭头函数的定义：如下两个函数等价

let efg = function (x) {
    return x * x;
}

let abc = x => x * x;

console.log(efg(2));
console.log(abc(2));

//2、单个自变量的箭头函数
let qaz = x => {
    if (x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
}

//3、多个自变量的箭头函数，自变量参数需要用括号()括起来
// 两个参数:
wsx = (x, y) => x * x + y * y
console.log("wsx = (x, y) => x * x + y * y   :" + wsx(2, 3));

// 无参数:
edc = () => 3.14
console.log("edc = () => 3.14   :" + edc());

// 可变参数:
rfv = (x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log("rfv = (x, y, ...rest) =>  :" + rfv(1,2,3,4,5));