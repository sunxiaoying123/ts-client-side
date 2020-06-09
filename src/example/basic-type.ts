// 语法规则：
// 变量声明 变量名:类型;

// 布尔类型
// let bool: boolean = false
let bool: boolean
bool = true
// bool = 123



// 数值类型
let num: number = 123
// num = 'abc'

num = 0b1111011 // 二进制123
num = 0o173 // 八进制
num = 0x7b // 十六进制




// 字符串类型
let str: string
str = 'abc'
str = `数值是：${num}`
// console.log(str)




// 数组类型
// [1, 2, 3]
// 写法1
let arr: number[]
// arr = [2,'ss']

// 写法2
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [2, 'ab']




// 元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false] 
// tuple = ['a', 1, false , 1] // 超出 称为 越界元素， 跟版本有关  2.6之前 超过只要符合其中一种就行，2.6以后 长度不能超过定义



// 枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 4,
  USER
}
// console.log('USER',Roles.USER)
// console.log('SUPER_ADMIN',Roles.SUPER_ADMIN) // 根据名字获取对应的索引值
// console.log(Roles[1]) // 根据索引值 获取名

// if (roles === Roles.SUPER_ADMIN) {
//   //
// }




// any 类型
let value:any
value = 1
value = '12'
value = false
const arr4: any[] = [1, 'a']




// void 类型 （表示什么类型都不是）
const consoleText = (text: string):void => {
  console.log(text)
}
// 对比有返回值
// function fn ():number {
//   return 123;
// }
// console.log(fn());

let v: void  // undefined null 可以赋值给viod类型 
v = undefined
v = null // 报错 tsconfig.json中strictNullChecks

// consoleText('aa')




// null undefined ()
let u: undefined
u = undefined
// u = 12
let n: null
n = null
// n = '22' // 报错

// num = undefined // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// num = null




// never 类型
const errorFunc = (message: string) :never => { // 抛出错误
  throw new Error(message)
}

function infiniteLoop():never { // 死循环
  while(true) {

  }
}
// errorFunc('ssss')
let neverVariable = (() => {
  while(true) {}
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
// getObject(obj2)




// 类型断言
// const getLength = (target: string | number)  => {
//   if (target.length || string.length === 0) {
//     return target.length
//   } else {
//     return target.toString().length
//   }
// }
const getLength1 = (target: string | number)  => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
console.log(getLength1('333'))
console.log(getLength1(2))
// console.log(getLength1(false))

// 后面会将高阶类型：自定义类型保护  不用每次target都用 target as string
