# html和css的学习笔记
## 重要的概念
- CSS同样是通过DOM模型表现出来的，体现在元素的样式这个属性上
- 如果多于一个规则指定了相同的属性值都应用到一个元素上，CSS规定拥有更高确定度的选择器优先级更高。ID选择器比类选择器更具确定度, 而类选择器比标签选择器（tag selector）更具确定度。
## position定位
- relative可以实现一种相对移动的技术，原本的位置还在文档流中，经过相对移动便可以覆盖在其他元素上；
- absolute会在设定了relative的最近祖先（没有就是整个页面）里进行绝对定位；
- fix相对absolute就是直接在页面里定位，可能用于一些保持位置的内容。
- 还有一种sticky比较神奇。
- 固定页头和页脚.注意如何设置“left”和“right”两个盒子位移，这使得“页脚”跨越了页面的整个宽度，而不需使用margin、border和padding来破坏盒模形就做了收缩自如
## float浮动
- float和position的优先级：（在有浮动的前提下）
    + position: relative;
    + position: absolute;
- float是脱离文档流的，文字或其他行内元素的确是会围绕浮动元素，但包含它们的div还是原来的大小。也就是说div是被float遮住的，用背景色就可以发现这点。
- float是会改变display的方式的
- overflow: auto可以解决因为脱离文档流而导致的包含它的块级元素“缩水”；
## margin技巧
- margin是正就会向外扩展。用margin: 0 auto，相当于向两边均匀推，就居中了；
- margin是负就会向内扩展，便推的内容移动，便达到位移的效果了；
- 负margin技术可以使几乎任何情况下进行相对位移
## 居中技术
- margin方式（水平比较好用）
- padding方式（竖直比较好用）
- 定宽的时候可以用position,margin,padding都不错
- 非定宽的时候可以用absolute先使元素左上角锁定在中心，然后用transform移动，使元素中心与父元素中心重合，便达到居中的效果。
- flexbox非常好用
## 其他
- !important可以覆盖开发者定义
- 使用before/after和content的组合可以实现列表前插入内容，浮动清除(clearfix方法)等功能。