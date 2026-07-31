from fastapi import (
    APIRouter,
    BackgroundTasks,
    Depends,
    File,
    HTTPException,
    UploadFile,
)
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.upload import UploadResponse
from app.services.processing_service import process_call
from app.services.upload_service import save_uploaded_file

router = APIRouter(
    prefix="/upload",
    tags=["Upload"],
)


@router.post("/", response_model=UploadResponse)
def upload_audio(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    allowed_extensions = {
        ".mp3",
        ".wav",
        ".m4a",
        ".aac",
        ".flac",
        ".ogg",
    }

    extension = "." + file.filename.split(".")[-1].lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Unsupported audio format.",
        )

    record = save_uploaded_file(file, db)

    # Start background processing
    background_tasks.add_task(
        process_call,
        record.id,
    )

    return UploadResponse(
        id=record.id,
        file_name=record.file_name,
        processing_status=record.processing_status.value,
        message="Audio uploaded successfully.",
    )