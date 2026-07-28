import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type UploadRow = {
    filename: string
    duration: string
    uploaded: string
    status: "Completed" | "Processing"
}

const uploads: UploadRow[] = [
    {
        filename: "customer_call_01.mp3",
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
        filename: "service_booking.mp3",
        duration: "6:05",
        uploaded: "Yesterday",
        status: "Completed",
    },
    {
        filename: "dealer_enquiry.wav",
        duration: "10:48",
        uploaded: "Yesterday",
        status: "Completed",
    },
]

export default function RecentUploads() {
    return (
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
                        {uploads.map((upload) => (
                            <TableRow key={upload.filename}>
                                <TableCell className="font-medium">{upload.filename}</TableCell>
                                <TableCell className="text-muted-foreground">{upload.duration}</TableCell>
                                <TableCell className="text-muted-foreground">{upload.uploaded}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={upload.status === "Completed" ? "default" : "secondary"}
                                    >
                                        {upload.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
