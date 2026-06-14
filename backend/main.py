from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import shutil

app = FastAPI()

# CRITICAL: Allow frontend access from React on port 3000

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Compute upload directory (use Path for cross-platform compatibility)
    UPLOAD_DIR = Path(__file__).resolve().parent / "uploads"
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

    # Define file path correctly
    file_path = UPLOAD_DIR / file.filename

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Always return a response
    return {"status": "ok", "filename": file.filename}


