import requests

from app.core.config import settings


def transcribe_audio(file_path: str) -> dict:
    """
    Sends an audio file to the Whisper server and returns the transcription result.
    """

    with open(file_path, "rb") as audio_file:
        response = requests.post(
            settings.WHISPER_SERVER_URL,
            files={"file": audio_file},
            timeout=600,
        )

    response.raise_for_status()

    return response.json()