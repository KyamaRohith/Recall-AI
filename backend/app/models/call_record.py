from datetime import datetime
from enum import Enum

from sqlalchemy import DateTime, Enum as SqlEnum, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class ProcessingStatus(str, Enum):
    UPLOADED = "UPLOADED"
    TRANSCRIBING = "TRANSCRIBING"
    TRANSCRIBED = "TRANSCRIBED"
    EXTRACTING = "EXTRACTING"
    EMBEDDING = "EMBEDDING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"


class CallRecord(Base):
    __tablename__ = "call_records"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    file_name: Mapped[str] = mapped_column(String(255))
    original_file_name: Mapped[str] = mapped_column(String(255))
    file_path: Mapped[str] = mapped_column(String(500))

    processing_status: Mapped[ProcessingStatus] = mapped_column(
        SqlEnum(ProcessingStatus),
        default=ProcessingStatus.UPLOADED,
    )

    transcript: Mapped[str | None] = mapped_column(Text, nullable=True)

    transcript_language: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    transcript_duration: Mapped[float | None] = mapped_column(nullable=True)

    summary: Mapped[str | None] = mapped_column(Text, nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )