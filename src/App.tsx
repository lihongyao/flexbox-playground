import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("%c既然按了F12，为何不去GitHub顺便给个start", "color: #fff; background: #f40; font-size: 24px;");
    console.log("%chttps://github.com/lihongyao/flexbox-playground", "font-size: 16px;");
  }, []);
  return (
    <div className="text-[#2D3748]  bg-gray-50 min-h-screen" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
