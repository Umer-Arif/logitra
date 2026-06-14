# Logitra Agent Guide

## Project Structure
- `src/` - React + TypeScript frontend (Vite)
- `backend/` - FastAPI Python backend
- `backend/uploads/` - Uploaded files storage
- `.kilo/plans/backend-implementation.md` - implementation plan

## Commands

### Frontend
```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

### Backend
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload   # Start server (port 8000)
curl -X POST -F "file=@backend/uploads/test_doc.txt" http://localhost:8000/upload   # Test upload
```

## Architecture Notes
- Frontend expects backend at `http://localhost:8000`
- Backend has CORS configured for `http://localhost:3000`
- Upload endpoint returns `{"status": "ok", "filename": "..."}`
- Swagger UI available at `http://localhost:8000/docs`

## Next Steps
1. Update `src/App.tsx` onChange to POST to backend instead of console.log
2. Add document parsing (PyPDF2, python-docx)
3. Add embeddings + ChromaDB
4. Add `/query` endpoint for RAG