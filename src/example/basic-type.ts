// 语法规则：
// 变量声明 变量名:类型;

/**
 * 布尔类型
 */
// let bool: boolean = false
let bool: boolean
bool = true
// bool = 123



/**
 * 数值类型
 */
let num: number = 123
// num = 'abc'

num = 0b1111011 // 二进制123
num = 0o173 // 八进制
num = 0x7b // 十六进制




/**
 * 字符串类型
 */
let str: string
str = 'abc'
str = `数值是：${num}`
// console.log(str)




/**
 * 数组类型
 */
// 写法1
let arr: number[]
arr = [1, 2, 3]
// arr = [2,'ss']

// 写法2
let skills:Array<string>=['ES5','ES6','Angular','Node.js'];
let arr3: Array<string | number>
arr3 = [2, 'ab']



/**
 * 元组类型
 */
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tuple: [string, number]
tuple = ['awww', 1]
// tuple = ['a', 1, 1] // 超出 称为 越界元素， 跟版本有关  2.6之前 超过只要符合其中一种就行，2.6以后 长度不能超过定义

// 当访问一个已知索引的元素，会得到正确的类型：
console.log(11,tuple[0].substr(1))
// console.log(11,tuple[1].substr(1))

// 当访问一个越界的元素，会使用联合类型替代：
// interface Tuple extends Array<number | string> {0: string; 1: number};
// let x: Tuple = ['asss', 1]
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// x[5] = 99
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型





/**
 * 枚举类型
 */
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN,
  USER = 2
}
// console.log('SUPER_ADMIN',Roles.SUPER_ADMIN) // 根据名字获取对应的索引值
// console.log('ADMIN',Roles.ADMIN) // 根据名字获取对应的索引值
// console.log('USER',Roles.USER) // 根据名字获取对应的索引值

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum Color {Red = 1, Green = 1, Blue = 2}
let colorName: string = Color[1];
// console.log(colorName);  // 显示'Green'因为上面代码里它的值是2




/**
 * any 类型
 */
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
let value:any
value = 1
value = '12'
value = false
let arr4: any[] = [1, 'a']


// void 类型 （表示什么类型都不是,与any相反）
const consoleText = (text: string):void => {
  console.log(text)
}
// 对比有返回值
function fn ():number {
  return 123;
}
// console.log(fn());

let v: void  // undefined null 可以赋值给viod类型
// v = undefined
// v = null // 报错 tsconfig.json中strictNullChecks



/**
 * null undefined
 */
// 和 void相似，它们的本身的类型用处不是很大：
let u: undefined
u = undefined
// u = 12
let n: null
n = null
// n = '22' // 报错

// "strictNullChecks": false情况下
// num = undefined // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// num = null


/**
 *  never 类型
 */
// never类型表示的是那些永不存在的值的类型。
const errorFunc = (message: string) :never => { // 抛出错误
  throw new Error(message)
}

// function infiniteLoop():never { // 死循环
//   // while(true) {}
// }
// errorFunc('ssss')
let neverVariable = (() => {
  // while(true) {}
})

// neverVariable = 1 // 没有类型是 never 的子类型或者可以赋值给 never (除了 never 本身)
// num = neverVariable // never 是任何类型的子类型, 并且可以赋值给任何类型.(测试会报错，还没查到原因，tsconfig也关闭了，)




// object 类型
let obj = {
  name: 'xiaoying'
}
let obj2 = obj
obj2.name = 'S' // 引用
// console.log(obj.name)

function getObject(obj: object) :void {
  console.log(obj)
}
// getObject('1')
getObject(obj2)
//
const create = (o: object | null): void => {};

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error




/**
 * 类型断言
 */
// const getLength = (target: string | number)  => {
//   if (target.length || target.length === 0) {
//     return target.length
//   } else {
//     return target.toString().length
//   }
// 两种形式：
// 形式一：“尖括号”语法， 形式二： as语法
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
const getLength1 = (target: string | number)  => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}
console.log(getLength1('333'))
console.log(getLength1(2))
// console.log(getLength1(false))
// 后面会将高阶类型：自定义类型保护  不用每次target都用 target as string
