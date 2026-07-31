export interface CallList {
    id: number;
    file_name: string;
    processing_status: string;
    created_at: string;
}

export interface CallDetail {
    id: number;
    file_name: string;
    original_file_name: string;
    transcript: string | null;
    transcript_language: string | null;
    transcript_duration: number | null;
    processing_status: string;
    created_at: string;
}

export interface CallInsight {
    id: number;
    call_id: number;

    customer_name: string | null;
    company: string | null;
    phone: string | null;
    email: string | null;

    product: string | null;
    budget: string | null;
    intent: string | null;
    sentiment: string | null;

    summary: string | null;
    action_items: string | null;

    created_at: string;
}

export interface UploadResponse {
    id: number;
    file_name: string;
    processing_status: string;
    message: string;
}