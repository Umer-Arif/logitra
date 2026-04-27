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
          <h2 className="text-2xl text-blue-400 text-center p-10 rounded-2xl border border-blue-400 w-fit mx-auto">
            Drag or drop
          </h2>
        </section>
      </div>
    </>
  );
}

export default App;
