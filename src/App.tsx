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
            <p className="italic text-blue-400 text-center">
              Your document engine
            </p>
          </div>
          <div>
            <h2 className="text-blue-400 py-30 text-center">Drag or drop</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
