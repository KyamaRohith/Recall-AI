from datetime import datetime
from pydantic import BaseModel


class CallListResponse(BaseModel):
    id: int
    file_name: str
    processing_status: str
    created_at: datetime

    class Config:
        from_attributes = True


class CallDetailResponse(BaseModel):
    id: int
    file_name: str
    original_file_name: str
    processing_status: str
    transcript: str | None
    summary: str | None
    created_at: datetime

    class Config:
        from_attributes = True