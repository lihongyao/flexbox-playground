import { kLinks } from "@/constants";
import { Email } from "@mui/icons-material";
import { memo } from "react";

export default memo(function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-2 py-4 text-[#2D3748] ">
      <div className="flex justify-center items-center">
        {kLinks.map((item, index) => (
          <div key={index}>
            <a className="cursor-pointer  hover:text-[#6ED3CF]" key={item.label} href={item.url}>
              {item.label}
            </a>
            {index !== kLinks.length - 1 && <span className="mx-2">|</span>}
          </div>
        ))}
      </div>
      <div>&copy; {new Date().getFullYear()} 序猿杂谈</div>
      <div className="flex items-center">
        <Email fontSize={"small"}></Email>
        <span>lihy_online@163.com</span>
      </div>
    </footer>
  );
});
