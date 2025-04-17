export const kContainerProps = [
  {
    key: 'flexDirection',
    name: "flex-direction",
    values: ["row", "row-reverse", "column", "column-reverse"],
  },
  {
    key: 'flexWrap',
    name: "flex-wrap",
    values: ["nowrap", "wrap", "wrap-reverse"],
  },
  {
    key: 'justifyContent',
    name: "justify-content",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
  },
  {
    key: 'alignItems',
    name: "align-items",
    values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
  },
  {
    key: 'alignContent',
    name: "align-content",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
  },
];


export const kLinks = [
  { label: 'npm packages', url: 'https://www.npmjs.com/~lihongyao' },
  { label: 'GitHub', url: 'https://github.com/lihongyao/' },
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