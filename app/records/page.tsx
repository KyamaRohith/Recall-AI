import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"

const records = [
    {
        customer: "Ravi Kumar",
        phone: "+1 555 0142",
        recording: "customer_call.mp3",
        duration: "12:34",
        status: "Processed",
        date: "Jul 24, 2026",
    },
    {
        customer: "Mina Patel",
        phone: "+1 555 0189",
        recording: "john_followup.wav",
        duration: "8:11",
        status: "Review",
        date: "Jul 22, 2026",
    },
    {
        customer: "Derek Lewis",
        phone: "+1 555 0115",
        recording: "dealer_visit.mp3",
        duration: "6:05",
        status: "Processed",
        date: "Jul 20, 2026",
    },
]

export default function RecordsPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Conversation intelligence</p>
                <h1 className="text-2xl font-semibold tracking-tight">Call Records</h1>
                <p className="text-sm text-muted-foreground">
                    Search and review customer conversations.
                </p>
            </div>

            <Card className="border-border/60 bg-card/70">
                <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-base">Processed conversations</CardTitle>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                        <div className="relative md:w-64">
                            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search records" className="pl-8" />
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm font-medium transition-colors hover:bg-muted">
                                <SlidersHorizontal className="h-4 w-4" />
                                Filter
                                <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>All statuses</DropdownMenuItem>
                                <DropdownMenuItem>Processed</DropdownMenuItem>
                                <DropdownMenuItem>Review</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm font-medium transition-colors hover:bg-muted">
                                Sort
                                <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Newest</DropdownMenuItem>
                                <DropdownMenuItem>Oldest</DropdownMenuItem>
                                <DropdownMenuItem>Duration</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Recording</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {records.map((record) => (
                                <TableRow key={record.recording}>
                                    <TableCell className="font-medium">{record.customer}</TableCell>
                                    <TableCell className="text-muted-foreground">{record.phone}</TableCell>
                                    <TableCell>{record.recording}</TableCell>
                                    <TableCell className="text-muted-foreground">{record.duration}</TableCell>
                                    <TableCell>
                                        <Badge variant={record.status === "Processed" ? "default" : "secondary"}>
                                            {record.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{record.date}</TableCell>
                                    <TableCell>
                                        <Button variant="outline" size="sm">
                                            View
                                        </Button>
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