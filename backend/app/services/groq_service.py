import json

from groq import Groq

from app.core.config import settings

client = Groq(api_key=settings.GROQ_API_KEY)


def extract_call_insights(transcript: str) -> dict:

    prompt = f"""
Extract the following information from the conversation.

Return ONLY valid JSON.

Fields:

customer_name
company
phone
email
product
budget
intent
sentiment
summary
action_items

If a value is unavailable, return null.

Transcript:

{transcript}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        temperature=0,
        response_format={"type": "json_object"},
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    return json.loads(response.choices[0].message.content)