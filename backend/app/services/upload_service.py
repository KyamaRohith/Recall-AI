from pathlib import Path
import shutil

from sqlalchemy.orm import Session

from app.models.call_record import CallRecord

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


def save_uploaded_file(file, db: Session) -> CallRecord:
    """
    Save uploaded file to disk and create a database record.
    """

    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    call_record = CallRecord(
        file_name=file.filename,
        original_file_name=file.filename,
        file_path=str(file_path),
    )

    db.add(call_record)
    db.commit()
    db.refresh(call_record)

    return call_record