from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.models.call_record import CallRecord
from app.models.call_insight import CallInsight

from app.schemas.call_record import (
    CallListResponse,
    CallDetailResponse,
)
from app.schemas.call_insight import CallInsightResponse

router = APIRouter(
    prefix="/calls",
    tags=["Calls"],
)


@router.get("/", response_model=list[CallListResponse])
def get_calls(db: Session = Depends(get_db)):

    records = db.scalars(
        select(CallRecord).order_by(CallRecord.created_at.desc())
    ).all()

    return records


@router.get("/{call_id}", response_model=CallDetailResponse)
def get_call(
    call_id: int,
    db: Session = Depends(get_db),
):

    record = db.get(CallRecord, call_id)

    if record is None:
        raise HTTPException(
            status_code=404,
            detail="Call not found.",
        )

    return record


@router.get(
    "/{call_id}/insights",
    response_model=CallInsightResponse,
)
def get_call_insights(
    call_id: int,
    db: Session = Depends(get_db),
):

    insight = db.scalar(
        select(CallInsight).where(CallInsight.call_id == call_id)
    )

    if insight is None:
        raise HTTPException(
            status_code=404,
            detail="Insights not found.",
        )

    return insight