import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black min-h-screen">
        <section id="center">
          <div>
            <h1 className="text-4xl underline bg-blue-500 text-center py-5">
              Logitra
            </h1>
            <p className="italic text-blue-400 text-center pt-5 pb-20">
              Your document engine
            </p>
          </div>
          <div className="flex justify-center">
            <button className="text-2xl text-blue-400 p-10 rounded-2xl border border-blue-400 hover:border-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/30 transition-all">
              Drag or drop
            </button>
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
}

export default App;
