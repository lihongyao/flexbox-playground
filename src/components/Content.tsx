/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CSSProperties, memo } from "react";
import { Alert, Button, Slider, Snackbar, Stack, Tooltip } from "@mui/material";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { useState } from "react";
import { kContainerProps } from "@/constants";
import clsx from "clsx";

interface ItemProps {
  id: number;
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;

  alignSelf?: string;
}
export default memo(function Content() {
  const itemsRef = useState<HTMLDivElement[]>([]);
  const [containerStyles, setContainerStyles] = useState<CSSProperties>({
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  });

  const [items, setItems] = useState<ItemProps[]>(() => {
    return Array.from({ length: 2 }, (_, index) => ({
      id: index + 1,
      alignSelf: "auto",
    }));
  });
  const [itemWidth, setItemWidth] = useState(120);
  const [tips, setTips] = useState("");

  const handleAdd = () => {
    if (items.length === 20) {
      setTips("不能再加了啦！再加挤爆了哈～");
      return;
    }
    setItems((prev) => [...prev, { id: prev.length + 1 }]);
  };

  const handleRemove = () => {
    if (items.length === 1) {
      return;
    }
    setItems((prev) => {
      const t = [...prev];
      t.pop();
      return t;
    });
  };
  const handleItemChange = (index: number, key: string, value: string | number) => {
    console.log(index, key, value);
    setItems((prev) => {
      const t = [...prev];
      // @ts-expect-error
      t[index][key] = value;
      return t;
    });
  };

  return (
    <main className="bg-white mx-4 rounded-md border border-gray-400 p-4 flex flex-col lg:flex-row gap-10 text-sm  lg:text-base ">
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={!!tips} autoHideDuration={1500} onClose={() => setTips("")}>
        <Alert variant="filled" severity={"info"}>
          {tips}
        </Alert>
      </Snackbar>
      {/* 左侧 */}
      <div className="flex-1 flex  justify-around flex-wrap md:flex-nowrap gap-2 ">
        {kContainerProps.map((item) => (
          <div key={item.key} className="flex-1 min-w-0">
            <Tooltip title={item.title} placement="top-start">
              <h1 className=" font-[600] h-14 break-words cursor-default ">{item.name}</h1>
            </Tooltip>
            <div className="space-y-2 mt-4">
              {item.children.map(({ value, title }) => (
                <Tooltip title={title} placement="top-start">
                  <div
                    key={value}
                    className={clsx(" border border-blue-400 p-2 rounded-sm cursor-pointer min-w-0  break-words", {
                      "bg-blue-400 text-white": value === containerStyles[item.key as keyof CSSProperties],
                    })}
                    onClick={() => {
                      if (value === containerStyles[item.key as keyof CSSProperties]) return;
                      setContainerStyles((prev) => ({
                        ...prev,
                        [item.key]: value,
                      }));
                    }}
                  >
                    {value}
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 右侧 */}
      <div className="flex-1 overflow-hidden ">
        <header className="flex justify-between items-center flex-wrap space-y-2 pr-6">
          <div className="flex items-center space-x-2">
            <span className="font-[500]">items count: {items.length}</span>
            <Stack direction={"row"} spacing={2}>
              <Button size="small" variant="outlined" aria-label="add" onClick={handleAdd}>
                <AddOutlined />
              </Button>
              <Button size="small" variant="outlined" aria-label="remove" onClick={handleRemove}>
                <RemoveOutlined />
              </Button>
            </Stack>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-[500] shrink-0">item width:</span>
            <span className="font-[500] w-16">{itemWidth}px</span>
            <Slider size="small" style={{ width: 200 }} min={60} max={250} value={itemWidth} onChange={(_, value) => setItemWidth(value)} />
          </div>
        </header>
        {/* 内容区域 */}
        <div className="flex-1 mt-4 bg-blue-400  p-2 rounded-sm  min-w-0">
          <div
            className="max-w-full"
            style={{
              minHeight: 450,
              display: "flex",
              placeContent: undefined,
              ...containerStyles,
              gap: 10,
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemsRef[0].push(el!);
                }}
                className="bg-white text-center p-2 min-w-0 rounded-sm"
                style={{
                  // width: itemWidth,
                  order: item.order,
                  flexGrow: item.flexGrow,
                  flexShrink: item.flexShrink,
                  flexBasis: item.flexBasis ? parseInt(item.flexBasis) : itemWidth,
                  alignSelf: item.alignSelf,
                }}
              >
                <div className="text-center truncate min-w-0">{item.id}</div>
                <div className="space-y-2" style={{ fontFamily: "serif" }}>
                  <Tooltip title={"排列顺序，数值越小，越靠前显示。"} placement="top-start">
                    <input
                      type="number"
                      className="block w-full border-b border-gray-200 text-sm lg:text-base px-1"
                      placeholder="order"
                      onBlur={(e) => handleItemChange(index, "order", e.target.value)}
                    />
                  </Tooltip>
                  <Tooltip title={"放大比例"} placement="top-start">
                    <input
                      type="number"
                      className="block w-full border-b border-gray-200 text-sm lg:text-base px-1"
                      placeholder="flex-grow"
                      onBlur={(e) => handleItemChange(index, "flexGrow", e.target.value)}
                    />
                  </Tooltip>
                  <Tooltip title={"缩放比例"} placement="top-start">
                    <input
                      type="number"
                      className="block w-full border-b border-gray-200 text-sm lg:text-base px-1"
                      placeholder="flex-shrink"
                      onBlur={(e) => handleItemChange(index, "flexShrink", e.target.value)}
                    />
                  </Tooltip>
                  <Tooltip title={"元素占据主轴的空间，默认由内容决定"} placement="top-start">
                    <input
                      type="text"
                      className="block w-full border-b border-gray-200 text-sm lg:text-base px-1"
                      placeholder="flex-basis"
                      onBlur={(e) => handleItemChange(index, "flexBasis", e.target.value)}
                    />
                  </Tooltip>
                  <Tooltip title={"元素在交叉轴上的对齐方式"} placement="top-start">
                    <select className="block max-w-full text-sm lg:text-base" onChange={(e) => handleItemChange(index, "alignSelf", e.target.value)}>
                      <option value="auto">auto</option>
                      <option value="flex-start">flex-start</option>
                      <option value="flex-end">flex-end</option>
                      <option value="center">center</option>
                      <option value="baseline">baseline</option>
                      <option value="stretch">stretch</option>
                    </select>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
});
