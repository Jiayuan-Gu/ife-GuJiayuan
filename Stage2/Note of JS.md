# JS学习笔记
## 变量
### 声明和定义
- var
- let:声明块范围局部变量(block scope local variable)，可选择将其初始化为一个值
- const
- 用var或let声明的未赋初值的变量，值会被设定为undefined；undefined值在布尔类型环境中会被当作false；数值类型环境中undefined值会被转换为NaN
### 作用域
- 变量声明提升：变量实际都在开始定义；
- 在同一作用域中，不能用与变量或函数同样的名字来命名常量；
### 数据结构和类型
- 六种原型，没有属性和方法；
- objects和functions是本语言的其他两个基本要素
- 在涉及加法运算符(+)的数字和字符串表达式中，JavaScript 会把数字值转换为字符串；在涉及其它运算符（译注：如下面的減號'-'）时，JavaScript语言不会把数字变为字符；
- 将字符串转换为数字的另一种方法是使用单目加法运算符
- (数组)若你在同一行中连写两个逗号（,），数组中就会产生一个没被指定的元素，其初始值是undefine
- 若你在元素列表的尾部添加了一个逗号，它会被忽略
- 对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的javascript标识符，它必须用""包裹。属性的名字不合法，那么便不能用.访问属性值，而是通过类数组标记("[]")访问和赋值
- **对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的javascript标识符，它必须用""包裹。属性的名字不合法，那么便不能用.访问属性值，而是通过类数组标记("[]")访问和赋值**
- 块级作用域需要用Let
### 流程控制与错误处理
- Falsy values:false
    - undefined
    - null
    - 0
    - NaN
    - 空字符串 ("")
- for in遍历属性，for each in遍历属性值
- 
## 面向对象编程
- 在JavaScript中，命名空间只是另一个包含方法，属性，对象的对象
- 有一种新增的创建未初始化实例的实例化方法，请参考 Object.create 
### 定义
- 工厂
- 原型
### 继承
- JavaScript 并不检测子类的 prototype.constructor (见 Object.prototype), 所以我们必须手动申明它
- Inherit.prototype = Object.create(Base.prototype);
- 冒充
- call