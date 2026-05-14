import { useRef, useState } from "react";

function App(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const [upload, setUpload] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex">
      <aside className={`${collapsed ? "w-16 p-2" : "w-72 p-6"} bg-gray-700`}>
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "=>" : "<="}
        </button>
      </aside>
      <main className="bg-black min-h-screen flex-1">
        <section id="hero">
          <div>
            <h1 className="text-4xl underline bg-blue-500 text-center py-5">
              Logitra
            </h1>
            <p className="italic text-blue-400 text-center pt-5 pb-20">
              Your document engine
            </p>
          </div>
          <div className="flex justify-center">
            <input
              onChange={(e) => { setUpload(e.target.files[0]); console.log(e.target.files[0]); }}
              ref={inputRef}
              type="file"
              hidden
            />
            <button
              type="button"
              className="text-2xl text-blue-400 p-10 rounded-2xl border border-blue-400 hover:border-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/30 transition-all"
              onClick={() => inputRef.current?.click()}
            >
              Drag or drop
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
