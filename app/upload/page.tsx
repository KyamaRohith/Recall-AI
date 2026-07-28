import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CloudUpload, FileAudio, Music2 } from "lucide-react"

const recentUploads = [
    { filename: "customer_call.mp3", duration: "12:34", uploaded: "2h ago", status: "Completed" },
    { filename: "john_followup.wav", duration: "8:11", uploaded: "4h ago", status: "Processing" },
    { filename: "dealer_visit.mp3", duration: "6:05", uploaded: "Yesterday", status: "Completed" },
]

export default function UploadPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Customer conversations</p>
                <h1 className="text-2xl font-semibold tracking-tight">Upload Calls</h1>
                <p className="text-sm text-muted-foreground">
                    Upload customer conversations for transcription and AI processing.
                </p>
            </div>

            <Card className="border-border/60 bg-card/70">
                <CardContent className="flex flex-col items-center justify-center gap-5 px-8 py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                        <CloudUpload className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Drag & Drop audio files here</h2>
                        <p className="text-sm text-muted-foreground">
                            Supported formats: MP3, WAV, M4A
                        </p>
                    </div>

                    <Button className="min-w-36">Upload Files</Button>

                    <p className="text-xs text-muted-foreground">Maximum file size 100 MB</p>
                </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/70">
                <CardHeader>
                    <CardTitle className="text-base">Recent Uploads</CardTitle>
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
                                    <TableCell className="text-muted-foreground">{item.duration}</TableCell>
                                    <TableCell className="text-muted-foreground">{item.uploaded}</TableCell>
                                    <TableCell>
                                        <Badge variant={item.status === "Completed" ? "default" : "secondary"}>
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
    )
}