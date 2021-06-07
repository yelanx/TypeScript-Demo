// 基础类型解构
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c) // 1, 2, 3

// 对象数组解构
let [a, b, c] = [{name: '1'}, {name: '2'}, {name: '3'}]
console.log(a, b, c) // {name: '1'}, {name: '2'}, {name: '3'}

// ...解构
// let [head, ...tail] = [1, 2, 3, 4]
// console.log(head, tail) // 1, [2, 3, 4]

// 嵌套解构
// let [a, [b], d] = [1, [2, 3], 4]
// console.log(a, b, d) // 1, 2, 4

// 解构不成功为undefined
// let [a, b, c] = [1]
// console.log(a, b, c) // 1, undefined, undefined

// // 解构默认赋值
// let [x = 1] = [undefined];// x=1;
// let [x = 1] = [null];// x=null; // 数组成员严格等于undefined，默认值才会生效
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined 因为x用y做默认值时，y还没有声明





// // 对象属性解构
// let { f1, f2 } = { f1: 'test1', f2: 'test2' }
// console.log(f1, f2) // test1, test2

// // 可以不按照顺序，这是数组解构和对象解构的区别之一
// let { f2, f1 } = { f1: 'test1', f2: 'test2' }
// console.log(f1, f2) // test1, test2

// // 解构对象重命名
// let { f1: rename, f2 } = { f1: 'test1', f2: 'test2' }
// console.log(rename, f2) // test1, test2

// // 嵌套解构
// let { f1: {f11}} = { f1: { f11: 'test11', f12: 'test12' } }
// console.log(f11) // test11

// // 默认值
// let { f1 = 'test1', f2: rename = 'test2' } = { f1: 'current1', f2: 'current2'}
// console.log(f1, rename) // current1, current2



// // String
// let [ a, b, c, ...rest ] = 'test123'
// console.log(a, b, c, rest) // t, e, s, [ 't', '1', '2', '3' ]
// let {length : len} = 'hello'; // en // 5

// // number
// let {toString: s} = 123;
// s === Number.prototype.toString // true

// // boolean
// let {toString: s} = true;
// s === Boolean.prototype.toString // true

// // Map
// let [a, b] = new Map().set('f1', 'test1').set('f2', 'test2')
// console.log(a, b) // [ 'f1', 'test1' ], [ 'f2', 'test2' ]

// // Set
// let [a, b] = new Set([1, 2, 3])
// console.log(a, b) // 1, 2




// // 使用场景
// // 浅拷贝
// let colors = [ "red", "green", "blue" ];
// let [ ...clonedColors ] = colors;
// console.log(clonedColors);  // "[red,green,blue]"

// // 交换变量
// let x = 1;
// let y = 2;
// [x, y] = [y, x];

// // 遍历Map结构
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//     console.log(key + " is " + value);
// }

// // 函数参数
// function add(a,b,{c,d}){
//     console.log(a,b,c,d);
// }
// add(1,2,{});
// add(1,2)//Uncaught TypeError: Cannot destructure property `c` of 'undefined' or 'null'

// function move ({x:0,y:0}={}){
//     console.log(x,y);
// }
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// move(); // [0, 0]
// function move ({x,y}={x:0,y:0}){}
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, undefined]
// move({}); // [undefined, undefined]
// move(); // [0, 0]