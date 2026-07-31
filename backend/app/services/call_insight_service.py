from sqlalchemy.orm import Session

from app.models.call_insight import CallInsight


def save_call_insights(
    db: Session,
    call_id: int,
    insights: dict,
) -> CallInsight:

    record = CallInsight(
        call_id=call_id,
        customer_name=insights.get("customer_name"),
        company=insights.get("company"),
        phone=insights.get("phone"),
        email=insights.get("email"),
        product=insights.get("product"),
        budget=insights.get("budget"),
        intent=insights.get("intent"),
        sentiment=insights.get("sentiment"),
        summary=insights.get("summary"),
        action_items="\n".join(insights.get("action_items", []))
        if insights.get("action_items")
        else None,
    )

    db.add(record)
    db.commit()
    db.refresh(record)

    return record