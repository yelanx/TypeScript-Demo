// async function fn1() {
//   console.log(1);
//   return 2;
// }

// function fn1() {
//   return new Promise((resolve) => {
//     console.log(1);
//     resolve(2);
//   });
// }

console.log(3);

async function fn2() {
  console.log(4);
    let n1 = await 5;
    console.log(n1);

  //   fn1().then((n1) => {
  //     console.log(n1);
  //   });

//   new Promise((resolve) => {
//     console.log(1);
//     resolve(2);
//   })
  console.log(6);
}
fn2();
console.log(7);
