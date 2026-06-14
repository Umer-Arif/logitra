import { useRef, useState } from "react";

function App(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "done" | "failed"
  >("idle");
  const [progress, setProgress] = useState(0);
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
          <div className="flex flex-col items-center justify-center">
            <input
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setUploadStatus("uploading");
                setProgress(0);
                const formData = new FormData();
                formData.append("file", file);
                fetch("http://localhost:8000/upload", {
                  method: "POST",
                  body: formData,
                })
                  .then((response) => {
                    if (!response.ok) throw new Error("Upload failed");
                    return response.json();
                  })
                  .then(() => {
                    setUploadStatus("done");
                    setProgress(100);
                  })
                  .catch(() => {
                    setUploadStatus("failed");
                  });
              }}
              ref={inputRef}
              type="file"
              hidden
            />
            <button
              type="button"
              className="text-2xl text-blue-400 p-10 rounded-2xl border border-blue-400 hover:border-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/30 transition-all"
              onClick={() => inputRef.current?.click()}
            >
              {uploadStatus === "uploading" ? "Uploading..." : "Drag or drop"}
            </button>
            <div className=" flex text-center mt-4 text-white">
              {uploadStatus === "idle" && (
                <span className="text-gray-400">No file selected</span>
              )}
              {uploadStatus === "uploading" && (
                <div>
                  <span className="text-yellow-400">
                    Uploading... {progress}%
                  </span>
                  <div className="w-64 mx-auto mt-2 h-2 bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
              {uploadStatus === "done" && (
                <span className="text-green-400">Upload complete!</span>
              )}
              {uploadStatus === "failed" && (
                <span className="text-red-400">Upload failed</span>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
