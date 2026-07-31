"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { uploadAudio } from "@/lib/api";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    CloudUpload,
    FileAudio,
} from "lucide-react";

const recentUploads = [
    {
        filename: "customer_call.mp3",
        duration: "12:34",
        uploaded: "2h ago",
        status: "Completed",
    },
    {
        filename: "john_followup.wav",
        duration: "8:11",
        uploaded: "4h ago",
        status: "Processing",
    },
    {
        filename: "dealer_visit.mp3",
        duration: "6:05",
        uploaded: "Yesterday",
        status: "Completed",
    },
];

export default function UploadPage() {
    const router = useRouter();

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [uploading, setUploading] = useState(false);

    const [selectedFile, setSelectedFile] =
        useState<File | null>(null);

    async function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (!file) return;

        const allowedExtensions = [
            "audio/mpeg",
            "audio/wav",
            "audio/x-wav",
            "audio/mp4",
            "audio/aac",
            "audio/flac",
            "audio/ogg",
        ];

        if (!allowedExtensions.includes(file.type)) {
            alert("Unsupported audio format.");
            return;
        }

        setSelectedFile(file);
    }

    async function handleUpload() {
        if (!selectedFile) {
            alert("Please select an audio file.");
            return;
        }

        try {
            setUploading(true);

            const response = await uploadAudio(selectedFile);

            alert(response.message);

            router.push("/records");
        } catch (error) {
            console.error(error);
            alert("Upload failed.");
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                    Customer conversations
                </p>

                <h1 className="text-2xl font-semibold tracking-tight">
                    Upload Calls
                </h1>

                <p className="text-sm text-muted-foreground">
                    Upload customer conversations for
                    transcription and AI processing.
                </p>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept=".mp3,.wav,.m4a,.aac,.flac,.ogg"
                className="hidden"
                onChange={handleFileChange}
            />

            <Card className="border-border/60 bg-card/70">
                <CardContent className="flex flex-col items-center justify-center gap-5 px-8 py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                        <CloudUpload className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">
                            Drag & Drop audio files here
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Supported formats:
                            MP3, WAV, M4A, AAC, FLAC, OGG
                        </p>
                    </div>

                    {selectedFile && (
                        <div className="rounded-lg border px-4 py-2">
                            <p className="text-sm font-medium">
                                {selectedFile.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)}
                                {" MB"}
                            </p>
                        </div>
                    )}

                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            disabled={uploading}
                            onClick={() =>
                                fileInputRef.current?.click()
                            }
                        >
                            Choose File
                        </Button>

                        <Button
                            disabled={
                                uploading || selectedFile === null
                            }
                            onClick={handleUpload}
                        >
                            {uploading
                                ? "Uploading..."
                                : "Upload"}
                        </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Maximum file size 100 MB
                    </p>
                </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/70">
                <CardHeader>
                    <CardTitle className="text-base">
                        Recent Uploads
                    </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Filename</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Uploaded</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {recentUploads.map((item) => (
                                <TableRow key={item.filename}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-2">
                                            <FileAudio className="h-4 w-4 text-muted-foreground" />
                                            {item.filename}
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-muted-foreground">
                                        {item.duration}
                                    </TableCell>

                                    <TableCell className="text-muted-foreground">
                                        {item.uploaded}
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={
                                                item.status === "Completed"
                                                    ? "default"
                                                    : "secondary"
                                            }
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}