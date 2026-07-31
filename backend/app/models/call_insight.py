from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class CallInsight(Base):
    __tablename__ = "call_insights"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    call_id: Mapped[int] = mapped_column(
        ForeignKey("call_records.id", ondelete="CASCADE"),
        unique=True,
    )

    customer_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    company: Mapped[str | None] = mapped_column(String(255), nullable=True)
    phone: Mapped[str | None] = mapped_column(String(50), nullable=True)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)

    product: Mapped[str | None] = mapped_column(String(255), nullable=True)
    budget: Mapped[str | None] = mapped_column(String(255), nullable=True)
    intent: Mapped[str | None] = mapped_column(Text, nullable=True)
    sentiment: Mapped[str | None] = mapped_column(String(50), nullable=True)

    summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    action_items: Mapped[str | None] = mapped_column(Text, nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )