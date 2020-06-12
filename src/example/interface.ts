const getName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};
// console.log(getName({
//   firstName: 'shhs',
//   lastName: 10
// }));

/**
 * 使用接口
 */
interface NameInfo {
  firstName: string,
  lastName: string
}

const getName1 = ({ firstName, lastName }: NameInfo) => {
  return `${firstName} ${lastName}`;
};
// console.log(getName1({
//   firstName: 'shhs',
//   lastName: s'
// }));


/**
 * 可选属性
 */
interface Info {
  color?: string,
  type: string,
}

const getInfo = ({ color, type }: Info) : string => {
  return `${color ? color : ''} ${type}`
}

console.log(getInfo({
  type: 'apple'
}))

/**
 * 多余属性检查
 */
// console.log(getInfo({
//   color: 'red',
//   type: 'apple',
//   size: 1
// }))
// =======解决办法：1、类型断言===========
console.log(getInfo({
  color: 'red',
  type: 'apple',
  size: 1
} as Info))
// ========解决办法： 2、索引签名=============
interface Info {
  // color: string,
  type: string,
  [props: string]: any // 索引签名
}
console.log(getInfo({
  color: 'red',
  type: 'apple',
  size: 1
}))
// ========解决办法： 3、类型兼容性=============
const tempObj = {
  color: 'red',
  type: 'apple',
  size: 1
}
// console.log(getInfo(tempObj))



/**
 * 只读属性
 */
interface ReadInfo {
  color?: string,
  readonly type: string,
}
let exapmleObj: ReadInfo = {
  type: 'apple'
}
// exapmleObj.type = 'bannaner'
// 数组类型只读
interface ArrInfo {
  0: number,
  readonly 1: string
}
// let tempArr: ArrInfo = ['1', '22']
// let tempArr: ArrInfo = [1, '22']
// tempArr[1] = 'ooo'

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// 要想a可以等于ro,使用类型断言
a = ro as number[]
// ======= 以上是定义对像的接口-=======


/**
 * 函数类型
 */
// interface AddFunc {
//   ( num1: number, num2: number ): number
// }
type AddFunc = ( num1: number, num2: number ) => number // ts建议使用类型别名的方式定义
const add: AddFunc = (n1,n2):number => n1 + n2

/**
 * 索引类型
 */
interface Role {
  [index: string]: string
}
const role1: Role = {
  'a': 'super_admin'
}
const role2: Role = {
  'a': 'super_admin',
  1: 'admin' // 为什么此处属性名为1 不报错？（ps:js中如果你给一个对象的属性名指定为数值类型的话，会首先将把这个数值类型的值转化为字符串，然后再作为对象的属性名）
}
// 控制台试验
// const obj = {
//   '123': 'a',
//   123: 'b'
// }

/**
 * 接口的继承-提高接口的可复用性
 */
interface Animal {
  color: string
}
// interface Cat {
//   age: number,
//   color: string
// }
interface Cat extends Animal {
  age: number,
}

const cat:Cat = {
  age: 1,
  color: 'white'
}

// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square:Square = {
  color : "blue",
  sideLength : 10,
  penWidth : 5.0,
};




/**
 * 混合类型接口
 */
interface Counter {
  (): void,
  count: number
}
const getCounter = (): Counter => {
  const c = () => { c.count ++ }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
// counter()
// console.log(counter.count)
// counter()
// console.log(counter.count)
// counter()
// console.log(counter.count)



// 后面还有关于类相关的接口 有兴趣可以自行学习下~


