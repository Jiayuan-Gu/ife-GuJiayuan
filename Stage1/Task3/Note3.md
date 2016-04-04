# Task3 学习笔记
## 我的想法
- box-sizing：border-box可以使计算块级元素的时候是使用border以内作为计算，这样可以方便地实现设计上的要求（因为设计上一般给的都是带padding的）
- 一开始将center的放在了right的前面，然后由于center是不浮动的，然后就有个换行，结果right总归不和center在一层，这点需要注意。
- 我的居中是采用左右float之后，根据浮动元素是固定宽度的，所以可以用margin直接控制住两边。
## pinky
- 整体wonderful；
- 但人为调整的有点多，可能是因为没有采用box-sizing；
- 右边图片栏没有必要每个都定义一个id；
- center的那个使用了margin调整到了上面，但我想知道为什么宽度没有自动调整到正好可以塞在中间。另外，我本来以为将center移到right之前就可以了，进行了试验并不是。
