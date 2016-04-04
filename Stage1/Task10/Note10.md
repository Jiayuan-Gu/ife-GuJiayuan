# Task10 学习笔记
## 学习笔记
###container
- display:flex|inline-flex
- flex-direction:row|column|*-reverse控制主轴方向
- flex-wrap:
    + nowrap单行显示
    + wrap多行显示
    + wrap-reverse
- flex-flow是flex-direction和flex-wrap的缩写版本
- justify-content:
    + flex-start(默认值)：伸缩项目向一行的起始位置靠齐
    + flex-end：伸缩项目向一行的结束位置靠齐
    + center：伸缩项目向一行的中间位置靠齐。
    + space-between：伸缩项目会平均地分布在行里。第一个伸缩项目一行中的最开始位置，最后一个伸缩项目在一行中最终点位置。
    + space-around：伸缩项目会平均地分布在行里，两端保留一半的空间。
    + 设置了这个属性，在主轴方向上设置的任何margin都不会起作用
- align-content:flex-start | flex-end | center | space-between | space-around | stretch; stretch是平铺满的。align-content是用来调整伸缩行在侧轴上的分布.
- align-items:
    + flex-start：伸缩项目在侧轴起点边的外边距紧靠住该行在侧轴起始的边。
    + flex-end：伸缩项目在侧轴终点边的外边距靠住该行在侧轴终点的边 。
    + center：伸缩项目的外边距盒在该行的侧轴上居中放置。
    + baseline：伸缩项目根据他们的基线对齐。
    + stretch（默认值）：伸缩项目拉伸填充整个伸缩容器。此值会使项目的外边距盒的尺寸在遵照「min/max-width/height」属性的限制下尽可能接近所在行的尺寸。
- 
### item
- order可以控制伸缩项目的顺序
- align-self: auto | flex-start | flex-end | center | baseline | stretch; 单独覆盖默认对齐方式（侧轴上的）
- flex-grow（我觉得比较有用）：调节比例
- flex-shrink：收缩能力，负值也有效
- flex-basis：伸缩的基准值。0是不考虑空白，直接计算整个长度；而auto是考虑空白长度去计算flex-grow的比例的
- flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]