export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* 导航栏 */}
      <header
        className="h-20 bg-gray-200 flex justify-center items-center text-3xl mb-4"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
        }}
      >
        Flexbox&nbsp;演示站
      </header>
      <main className="flex-1 container border mx-auto rounded-md p-4">123</main>
      <footer className="h-20 flex justify-center items-center">
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <a>GitHub</a>
          </li>
          <li>
            <a>稀土掘金</a>
          </li>
          <li>
            <a>Bug提交</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
