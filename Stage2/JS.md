# JS学习笔记
## 语言特性
- JS不支持类，支持原型模型，一切皆对象
- 基本类型有Number,String,Boolean,Object
- 特殊的类型有undefined/null, function是Object的特例;
## 语法特点
- ==是转换类型的判断，而===是不转换类型的
- 可以用xx||default实现默认值
## 关于对象和函数
- Function是Object，可以调用Object.apply()/call()
- js的函数没有重载，定义一个函数，相当于全局中声明函数名的变量去引用它。
- this是函数调用者，默认是global
- new Class()相当于new Object(),然后用这个object去调用Class()
- prototype是在Object的属性，是在找不到的时候去搜索的
- scope object是每个函数调用时的对象，里面保存着传进来的参数和本地变量
## 关于事件
- html中采用事件捕捉到时间冒泡，从上到下传递到发生者，再从下到上传到根。
## DOM
- DOM有四种类型：document,element,attribute,event