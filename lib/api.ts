import { API_BASE_URL } from "./config";
import {
    CallDetail,
    CallInsight,
    CallList,
    UploadResponse,
} from "./types";

export async function uploadAudio(
    file: File
): Promise<UploadResponse> {

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/upload/`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Upload failed");
    }

    return response.json();
}

export async function getCalls(): Promise<CallList[]> {

    const response = await fetch(`${API_BASE_URL}/calls/`);

    if (!response.ok) {
        throw new Error("Failed to fetch calls");
    }

    return response.json();
}

export async function getCall(
    id: number
): Promise<CallDetail> {

    const response = await fetch(
        `${API_BASE_URL}/calls/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch call");
    }

    return response.json();
}

export async function getCallInsights(
    id: number
): Promise<CallInsight> {

    const response = await fetch(
        `${API_BASE_URL}/calls/${id}/insights`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch insights");
    }

    return response.json();
}