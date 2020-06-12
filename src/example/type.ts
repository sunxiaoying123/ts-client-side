// 类型别名
// 1、type （可以给一个类型定义一个名字)
type aa = number
type name = string | number
let va: name = 123
let vb: aa = 456
// console.log(va)   // 123
type Alias = string
const func = (name: Alias): Alias => name

// 2、字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
type name1 = "小红"|"小明"|"小李"
function conName(name : name1):void{
    console.log(name)
}
// conName("小红")  // 小红 如果是这三个字符串以外的 则报错
// conName("小蓝")  // error








// interface vs type
// ======================相同点============================
// <<相同点1>>： 都可以描述一个对象或者函数
// interface
interface User {
  name: string
  age: number
}

type SetUser = (name: string, age: number) => void;

// type
type User1 = {
  name: string
  age: number
};

type SetUser1 = (name: string, age: number)=> void;

// <<相同点2>>：都允许拓展（extends）不独立，可相互继承，效果差不多
// interface extends interface
interface Name {
  name: string;
}
interface User extends Name {
  age: number;
}
// type extends type
type Name2 = {
  name: string;
}
type User2 = Name2 & { age: number  };
// interface extends type
type Name3 = {
  name: string;
}
interface User3 extends Name3 {
  age: number;
}
// type extends interface
interface Name4 {
  name: string;
}
type User4 = Name4 & {
  age: number;
}

// ================================不同点==========================
// 1、type 可以声明基本类型别名，联合类型，元组等类型, interface不行
// 基本类型别名
type Name5 = string
// 联合类型
interface Dog {
 wong();
}
// interface Cat {
//  miao();
// }
type Pet = Dog | Cat
// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

// 2、type 语句中还可以使用 typeof 获取实例的 类型进行赋值
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div

// 3、interface 能够声明合并，type不行
interface User7 {
  name: string
  age: number
 }
 interface User7 {
  sex: string
 }
 /*
 User7 接口为 {
  name: string
  age: number
  sex: string
 }
 */

 // 总结两点：
 // 接口是创建一个新的类型，别名不会创建一个新类型，是对原有类型的引用。
 // 一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。其他更多详情参看 官方规范文档(https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)




