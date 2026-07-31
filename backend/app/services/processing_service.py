import traceback

from sqlalchemy.orm import Session

from app.database.session import SessionLocal
from app.models.call_record import (
    CallRecord,
    ProcessingStatus,
)
from app.services.whisper_service import transcribe_audio
from app.services.groq_service import extract_call_insights
from app.services.call_insight_service import save_call_insights


def process_call(call_id: int):

    db: Session = SessionLocal()

    try:

        record = db.get(CallRecord, call_id)

        if record is None:
            return

        print(f"Processing Call {call_id}")

        # -----------------------------
        # Step 1 - Transcription
        # -----------------------------

        record.processing_status = ProcessingStatus.TRANSCRIBING
        db.commit()

        transcription = transcribe_audio(record.file_path)

        record.transcript = transcription["transcript"]
        record.transcript_language = transcription.get("language")
        record.transcript_duration = transcription.get("duration")

        record.processing_status = ProcessingStatus.TRANSCRIBED
        db.commit()

        print("Transcription completed.")

        # -----------------------------
        # Step 2 - AI Extraction
        # -----------------------------

        record.processing_status = ProcessingStatus.EXTRACTING
        db.commit()

        insights = extract_call_insights(record.transcript)

        save_call_insights(
            db=db,
            call_id=record.id,
            insights=insights,
        )

        record.processing_status = ProcessingStatus.COMPLETED
        db.commit()

        print("Insight extraction completed.")

    except Exception:

        traceback.print_exc()

        if "record" in locals() and record:

            record.processing_status = ProcessingStatus.FAILED
            db.commit()

    finally:

        db.close()