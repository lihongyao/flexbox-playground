export const kContainerProps = [
  {
    key: 'flexDirection',
    name: "flex-direction",
    title: '定义主轴的方向，控制子元素的排列方向',
    children: [
      { value: "row", title: '水平排列，从左到右' },
      { value: "row-reverse", title: '水平排列，从右到左' },
      { value: "column", title: '垂直排列，从上到下' },
      { value: "column-reverse", title: '垂直排列，从下到上' }
    ],
  },
  {
    key: 'flexWrap',
    name: "flex-wrap",
    title: '定义子元素是否换行',
    children: [
      { value: "nowrap", title: '不换行（默认）' },
      { value: "wrap", title: '换行，第一行在上方' },
      { value: "wrap-reverse", title: '换行，第一行在下方' }
    ],
  },
  {
    key: 'justifyContent',
    name: "justify-content",
    title: '定义子元素在主轴上的对齐方式',
    children: [
      { value: "flex-start", title: '从主轴起点对齐（默认）' },
      { value: "flex-end", title: '从主轴终点对齐' },
      { value: "center", title: '居中对齐' },
      { value: "space-between", title: '两端对齐，间隔相等' },
      { value: "space-around", title: '每个项目两侧间隔相等' },
      { value: "space-evenly", title: '所有间隔（包括边缘）均等' }
    ],
  },
  {
    key: 'alignItems',
    name: "align-items",
    title: '定义子元素在交叉轴上的对齐方式（单行）',
    children: [
      { value: "flex-start", title: '从交叉轴起点对齐' },
      { value: "flex-end", title: '从交叉轴终点对齐' },
      { value: "center", title: '居中对齐' },
      { value: "baseline", title: '按第一行文字基线对齐' },
      { value: "stretch", title: '拉伸填充容器（默认）' }
    ],
  },
  {
    key: 'alignContent',
    name: "align-content",
    title: '定义多行子元素在交叉轴上的对齐方式',
    children: [
      { value: "flex-start", title: '从交叉轴起点对齐' },
      { value: "flex-end", title: '从交叉轴终点对齐' },
      { value: "center", title: '居中对齐' },
      { value: "space-between", title: '两端对齐，间隔相等' },
      { value: "space-around", title: '每行两侧间隔相等' },
      { value: "stretch", title: '拉伸填充容器（默认）' }
    ],
  },
];


export const kLinks = [
  { label: 'npm packages', url: 'https://www.npmjs.com/~lihongyao' },
  { label: 'GitHub', url: 'https://github.com/lihongyao/flexbox-playground' },
  { label: 'CSDN', url: 'https://blog.csdn.net/Hierarch_Lee/' },
  { label: '稀土掘金', url: 'https://juejin.cn/user/4441682709332919' },
]

export const kInputs = [
  { placeholder: 'order', title: '定义项目的排列顺序。数值越小，排列越靠前，默认为0' },
  { placeholder: 'flex-grow', title: '属性定义项目的放大比例，默认为0' },
  { placeholder: 'justify-content', title: '属性定义了项目的缩小比例，默认为1' },
  { placeholder: 'flex-shrink', title: 'alignItems' },
  { placeholder: 'flex-basics', title: 'alignContent' },
]