<div align="center">

# 🚀 Recall AI

### AI-Powered Customer Conversation Intelligence Platform

Transform customer conversations into searchable business intelligence using multilingual speech recognition, Large Language Models, and Retrieval-Augmented Generation (RAG).

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)](https://python.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Groq](https://img.shields.io/badge/LLM-Groq-orange)](https://groq.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

# 📖 Overview

Recall AI is an end-to-end AI platform that converts customer call recordings into actionable business intelligence.

The platform automatically:

- 🎙️ Transcribes multilingual customer calls
- 🤖 Extracts structured customer insights using LLMs
- 🔎 Performs semantic search across conversations
- 💬 Enables natural language interaction through an AI assistant
- 📊 Organizes customer conversations into searchable business knowledge

Designed primarily for:

- Real Estate
- Sales Teams
- Customer Success
- Support Teams
- CRM Intelligence

---

# ✨ Key Features

### 🎙️ Intelligent Audio Processing

- Upload MP3, WAV, M4A and other audio formats
- Background processing pipeline
- Automatic transcription
- Multilingual speech support
- AI-powered language routing

---

### 🧠 AI Insight Extraction

Automatically extracts:

- Customer Name
- Company
- Phone Number
- Email
- Product Interest
- Budget
- Purchase Intent
- Customer Sentiment
- Conversation Summary
- Follow-up Action Items

---

### 💬 AI Chat Assistant

Ask questions naturally like:

> Which customers are interested in Hyundai Creta?

> Who has the highest budget?

> Show all customers needing follow-up.

> Summarize today's customer conversations.

The assistant retrieves relevant conversations and generates context-aware responses using Retrieval-Augmented Generation (RAG).

---

### 🔍 Semantic Search

Instead of keyword search:

```
Hyundai customer
```

Users can ask:

```
Which customer wants to purchase an SUV under 20 lakhs?
```

The AI understands meaning instead of exact words.

---

# 🏗️ System Architecture

```text
                Customer Audio
                       │
                       ▼
               Audio Upload API
                       │
                       ▼
          Background Processing Queue
                       │
                       ▼
          Unified Transcription Engine
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
    Whisper                    AI4Bharat
 (English Audio)        (Indian Languages)
        │                             │
        └──────────────┬──────────────┘
                       ▼
                Speech Transcript
                       │
                       ▼
          AI Insight Extraction (LLM)
                       │
                       ▼
                 PostgreSQL Database
                       │
                       ▼
                 Vector Embeddings
                       │
                       ▼
                  FAISS Vector DB
                       │
                       ▼
                  RAG Chat Assistant
                       │
                       ▼
                  Recall AI Frontend
```

---

# ⚙️ Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- FastAPI
- Python
- SQLAlchemy
- Background Tasks

## AI & Machine Learning

- OpenAI Whisper
- AI4Bharat IndicWhisper
- AI4Bharat IndicLID
- Groq Llama 3.3 70B
- Retrieval-Augmented Generation (RAG)

## Database

- PostgreSQL
- FAISS Vector Database

## Deployment

- Docker
- Google Colab GPU Inference

---

# 📂 Project Structure

```text
recall-ai/

├── app/
│   ├── dashboard/
│   ├── upload/
│   ├── records/
│   ├── chat/
│   └── settings/
│
├── backend/
│   ├── api/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   ├── database/
│   └── core/
│
├── components/
├── docs/
└── lib/
```

---

# 🚀 AI Pipeline

```text
Customer Call

↓

Language Detection

↓

Speech Recognition

↓

Transcript Generation

↓

AI Insight Extraction

↓

Structured Customer Data

↓

Vector Embeddings

↓

Semantic Retrieval

↓

LLM Response

↓

Business Intelligence
```

---

# 💬 Example AI Queries

```text
Who wanted to buy a Hyundai Creta?

Who has the highest budget?

Show customers interested in SUVs.

Which conversations require follow-up?

Summarize today's customer calls.

Find customers discussing financing.

Which customer has a positive buying intent?
```

---

# 📊 Extracted Customer Intelligence

Recall AI automatically generates structured information including:

- Customer Identity
- Contact Information
- Product Interests
- Purchase Intent
- Budget
- Sentiment Analysis
- Conversation Summary
- Follow-up Tasks

This transforms unstructured conversations into searchable business data.

---

# 🔥 Why Recall AI?

Traditional CRMs store notes manually.

Recall AI automatically converts customer conversations into structured, searchable knowledge using AI.

Instead of spending hours reviewing recordings, teams can ask natural language questions and receive instant answers.

---

# 🚀 Future Roadmap

- [x] Audio Upload Pipeline
- [x] AI Transcription
- [x] AI Insight Extraction
- [x] AI Chat Assistant
- [x] Multilingual Support
- [x] Retrieval-Augmented Generation (RAG)
- [ ] Speaker Diarization
- [ ] Real-Time Streaming Calls
- [ ] CRM Integration
- [ ] Team Workspaces
- [ ] Analytics Dashboard
- [ ] Mobile Application

---

# 🖥️ Local Development

## Clone Repository

```bash
git clone https://github.com/KyamaRohith/Recall-AI.git
```

```bash
cd Recall-AI
```

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
```

Windows

```powershell
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run server

```bash
uvicorn app.main:app --reload
```

---

# 📸 Screenshots

> Add screenshots of:

- Dashboard
- Upload Page
- Call Records
- AI Chat
- Conversation Insights

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are welcome.

Feel free to fork the repository and open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### Built with ❤️ using FastAPI, Next.js, AI4Bharat, Whisper, Groq & RAG

**Transforming customer conversations into business intelligence.**

</div>
