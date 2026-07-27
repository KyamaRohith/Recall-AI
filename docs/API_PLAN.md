# API Plan

## Upload

POST /api/upload

Responsibilities

- Save audio
- Send audio to Whisper
- Receive transcript
- Extract structured data
- Generate embeddings
- Store in database

---

## Records

GET /api/transcripts

Returns all transcripts.

---

GET /api/transcripts/:id

Returns single transcript.

---

PATCH /api/transcripts/:id

Updates transcript.

Re-generates embeddings if transcript changes.

---

## Chat

POST /api/chat

Responsibilities

- Embed question
- Semantic search
- Retrieve top conversations
- Ask Groq
- Return response

---

GET /api/chat-history

Returns previous conversations.

---

Future APIs

- Authentication
- Notifications
- Daily Summary
- Analytics