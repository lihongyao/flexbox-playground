Flexbox 布局演示工具：https://lihongyao.github.io/flexbox-playground/

# 概述

@See https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex

网页布局（layout）是 CSS 的一个重点应用。

传统的 CSS 布局方案主要基于盒模型，通过以下三大属性实现：

1. `display` - 控制元素显示类型
2. `position` - 元素定位方式
3. `float` - 浮动布局

这种方案存在明显局限：

- 实现特殊布局（如垂直居中）非常繁琐
- 需要大量 hack 和额外标记
- 布局代码难以维护

特别是对于常见的垂直居中需求，传统方法往往需要复杂的嵌套结构或精确计算，不够直观高效。

2009 年，W3C 提出了一种新的方案 —— Flex 布局，它通过简单的属性设置就能实现复杂的页面布局。

相比传统基于`display` + `position` + `float`的盒模型布局，Flex 布局特别适合实现响应式设计，能轻松解决传统布局中棘手的垂直居中等问题，随着浏览器全面支持，现已成为主流的布局方案。

> **提示**：所有现代浏览器均已支持 Flex 布局，旧版 Webkit 需加`-webkit-`前缀，参考 [这里 >>](https://caniuse.com/?search=flex)。

# Flex 布局是什么？

Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。

任何一个容器都可以指定为 Flex 布局。

```css
.box {
  display: flex;
}
```

# 基本概念

![](/flex_concept.png)

使用 Flex 布局的元素称为 **Flex 容器**（flex container），其直接子元素自动成为 **Flex 项目**（flex item）

容器默认包含两根轴：

- **主轴**（main axis）：由 `flex-direction` 定义
  - 如果你选择了 `row` 或者 `row-reverse`，你的主轴将沿着 **水平方向** 延伸。
  - 如果你选择了 `column` 或者 `column-reverse` ，你的主轴将沿着 **垂直方向** 延伸。
  - 起点为 `main start`，终点为 `main end`
- **交叉轴**（cross axis）：垂直于主轴
  - 起点为 `cross start`，终点为 `cross end`

项目默认沿主轴排列，占据的主轴空间称为 `main size`，交叉轴空间称为 `cross size`。

# 容器的属性

- **`flex-direction`**：控制子元素的排列方向

  - `row`（默认）：水平排列，从左到右
  - `row-reverse`：水平排列，从右到左
  - `column`：垂直排列，从上到下
  - `column-reverse`：垂直排列，从下到上

- **`flex-wrap`**：控制是否换行

  - `nowrap`（默认）：不换行（可能溢出）
  - `wrap`：换行，新行向下排列
  - `wrap-reverse`：换行，新行向上排列

- **`flex-flow`**：`flex-direction` 和 `flex-wrap` 的简写  
  例：`flex-flow: row wrap`

- **`justify-content`**：主轴对齐方式

  - `flex-start`（默认）：左对齐
  - `flex-end`：右对齐
  - `center`：居中
  - `space-between`：两端对齐，子元素间距相等
  - `space-around`：子元素两侧间距相等（间距=边框间距 ×2）

- **`align-items`**：交叉轴对齐方式

  - `stretch`（默认）：拉伸填满容器高度
  - `flex-start`：顶部对齐
  - `flex-end`：底部对齐
  - `center`：垂直居中
  - `baseline`：按第一行文字基线对齐

- **`align-content`**：多行子元素的对齐（单行无效）
  - `stretch`（默认）：拉伸填满交叉轴
  - `flex-start`：顶部对齐
  - `flex-end`：底部对齐
  - `center`：垂直居中
  - `space-between`：两端对齐，行间距相等
  - `space-around`：行两侧间距相等

# 元素的属性

- **`order`**：设置子元素的排列顺序。数值越小，越靠前显示，默认是 0。

- **`flex-grow`**：定义子元素在容器有多余空间时的放大比例。默认是 0，表示不放大；设置为 1 则表示可以占据多余空间。

- **`flex-shrink`**：定义子元素在空间不足时的缩小比例。默认是 1，表示可以缩小。如果设为 0，则不会缩小。

- **`flex-basis`**：指定子元素在分配空间之前占据的主轴空间（即它的初始宽度或高度）。默认是 auto，表示根据内容自动计算大小。

- **`flex`**：是 flex-grow、flex-shrink 和 flex-basis 的简写形式。默认值是 0 1 auto，即不放大、可以缩小、大小由内容决定。

- **align-self**：允许单个子元素设置与其他子元素不同的对齐方式，用于覆盖父容器的 align-items 设置。默认值是 auto，表示继承父级的对齐方式。如果没有继承，则表现为 stretch（拉伸填满）。

  可选值：

  - `auto`：继承父元素的对齐方式（align-items 的值）。
  - `flex-start`：顶部（或主轴起始）对齐。
  - `flex-end`：底部（或主轴结束）对齐。
  - `baseline`：根据文本的基线对齐。
  - `stretch`：如果没有固定高度，会自动拉伸填满容器高度（默认行为）。
