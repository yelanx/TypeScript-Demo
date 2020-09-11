<template>
  <div id="app">
    <h1>基础变量值：{{ msg }}</h1>
    <h1>"或"运算符：{{ test }}</h1>
    <h1>空位合并操作符:{{ nullish }}</h1>
    <h1>类的私有字段：{{ privite }}</h1>
    <h1>可选链运算符：{{ optionChain }}</h1>
    <h1>BigInt：{{ bigInt }}</h1>
    <h1>sortBigInt:{{ sortBigInt }}</h1>
    <h1 style="color:red">END</h1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
/*global BigInt*/

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      msg: false,
    };
  },
  computed: {
    test() {
      return this.msg || "is ||";
    },
    nullish() {
      return this.msg ?? "is ??";
    },
    privite() {
      class Counter {
        #x = 0;
        increment() {
          this.#x++;
        }
        decrement() {
          this.#x--;
        }
        getNum() {
          return this.#x;
        }
      }
      const c = new Counter();
      c.increment();
      c.increment();
      c.decrement();
      return c.getNum();

    },
    optionChain() {
      const obj = {
        prop1: {
          prop2: {
            prop3: {
              prop4: {
                //此处应为prop4
                prop5: 5,
              },
            },
          },
        },
      };
      // obj.prop1 &&
      //   obj.prop1.prop2 &&
      //   obj.prop1.prop2 &&
      //   obj.prop1.prop2.prop3 &&
      //   obj.prop1.prop2.prop3.prop4 &&
      //   console.log(obj.prop1.prop2.prop3.prop4.prop5);
      //   return obj.prop1.prop2.prop3.prop4.prop5

      // console.log(typeof obj?.prop1?.prop2?.prop3?.prop4?.prop5);
      return obj?.prop1?.prop2?.prop3?.prop4?.prop5 ?? 'is not set';
    },
    bigInt() {
      const bigInt = BigInt("0x1fffffffffffff111111111");
      return bigInt;
    },
    sortBigInt() {
      let arr = [5n, 6n, -120n, 12n, 24n, 0];
      arr.sort((a,b)=>{if(a>b)return 1;else return -1});
      return arr.toString()
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
