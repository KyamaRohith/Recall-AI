from datetime import datetime

from pydantic import BaseModel


class CallInsightResponse(BaseModel):
    id: int
    call_id: int

    customer_name: str | None
    company: str | None
    phone: str | None
    email: str | None

    product: str | None
    budget: str | None
    intent: str | None
    sentiment: str | None

    summary: str | None
    action_items: str | None

    created_at: datetime

    class Config:
        from_attributes = True