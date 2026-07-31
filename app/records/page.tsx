"use client";

import { useEffect, useState } from "react";

import { getCalls } from "@/lib/api";
import { CallList } from "@/lib/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    ChevronDown,
    Search,
    SlidersHorizontal,
} from "lucide-react";

export default function RecordsPage() {
    const [records, setRecords] = useState<CallList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCalls();
    }, []);

    async function loadCalls() {
        try {
            setLoading(true);

            const data = await getCalls();

            setRecords(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load call records.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                    Conversation intelligence
                </p>

                <h1 className="text-2xl font-semibold tracking-tight">
                    Call Records
                </h1>

                <p className="text-sm text-muted-foreground">
                    Search and review customer conversations.
                </p>
            </div>

            <Card className="border-border/60 bg-card/70">
                <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-base">
                        Processed conversations
                    </CardTitle>

                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                        <div className="relative md:w-64">
                            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search records"
                                className="pl-8"
                            />
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm font-medium hover:bg-muted">
                                <SlidersHorizontal className="h-4 w-4" />
                                Filter
                                <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>All</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm font-medium hover:bg-muted">
                                Sort
                                <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Newest</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    {loading && (
                        <div className="py-8 text-center">
                            Loading call records...
                        </div>
                    )}

                    {error && (
                        <div className="py-8 text-center text-red-500">
                            {error}
                        </div>
                    )}

                    {!loading && !error && (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Recording</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Uploaded</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {records.map((record) => (
                                    <TableRow key={record.id}>
                                        <TableCell className="font-medium">
                                            {record.file_name}
                                        </TableCell>

                                        <TableCell>
                                            <Badge
                                                variant={
                                                    record.processing_status === "COMPLETED"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                            >
                                                {record.processing_status}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>
                                            {new Date(
                                                record.created_at
                                            ).toLocaleString()}
                                        </TableCell>

                                        <TableCell>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    window.location.href = `/records/${record.id}`;
                                                }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {records.length === 0 && (
                                    <TableRow>
                                        <TableCell
                                            colSpan={4}
                                            className="text-center"
                                        >
                                            No recordings found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}