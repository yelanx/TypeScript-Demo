console.log(9999999999999999);    // → 10000000000000000


// // 注意最后一位的数字
// 9007199254740992 === 9007199254740993;    // → true



// const minInt = Number.MIN_SAFE_INTEGER;
// console.log(minInt);         // → -9007199254740991
// console.log(minInt - 5);     // → -9007199254740996
// // notice how this outputs the same value as above
// console.log(minInt - 4);     // → -9007199254740996



// //创建BigInt
// console.log(9007199254740995n);    // → 9007199254740995n
// console.log(9007199254740995);     // → 9007199254740996
// // 使用构造函数
// BigInt("9007199254740995");    // → 9007199254740995n


// // BigInt文字也可以用二进制、八进制或十六进制表示
// // binary
// console.log(0b100000000000000000000000000000000000000000000000000011n);
// // → 9007199254740995n
// // hex
// console.log(0x20000000000003n);
// // → 9007199254740995n
// // octal
// console.log(0o400000000000000003n);
// // → 9007199254740995n
// // note that legacy octal syntax is not supported
// console.log(0400000000000000003n);
// // → SyntaxError


// // 不能使用严格相等运算符将BigInt与常规数字进行比较，因为它们的类型不同：
// console.log(10n === 10);    // → false
// console.log(10n == 10);    // → true

// console.log(typeof 10n);    // → bigint
// console.log(typeof 10);     // → number


// // 除一元加号(+)运算符外，所有算术运算符都可用于BigInt
// 10n + 20n;    // → 30n
// 10n - 20n;    // → -10n
// +10n;         // → TypeError: Cannot convert a BigInt value to a number
// -10n;         // → -10n
// 10n * 20n;    // → 200n
// 20n / 10n;    // → 2n
// 23n % 10n;    // → 3n
// 10n ** 3n;    // → 1000n

// const x = 10n;
// ++x;          // → 11n
// --x;          // → 9n



// // 与BigInt操作数一起使用时，算术运算符应该返回BigInt值
// 25 / 10;      // → 2.5
// 25n / 10n;    // → 2n

// // 隐式类型转换
// console.log((9007199254740992n + 1n) + 0.5);
// 10 + 10n;    // → TypeError
// Math.max(2n, 4n, 6n);    // → TypeError

// // but 关系运算符不算
// console.log(10n>5 );

