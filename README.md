# Verification App (MVP)

A lightweight proof-of-concept for a "social proof" verification tool to reduce scams in resale markets (tickets, goods, etc).

## Features
- Create user profiles with optional linked social data
- Generate simple verification links
- Buyers can view verification snapshot (verified count, mutual count, account ages)

## Tech Stack
- Backend: FastAPI (Python)
- Frontend: React
- Database: In-memory (SQLite planned)

## Run

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```
