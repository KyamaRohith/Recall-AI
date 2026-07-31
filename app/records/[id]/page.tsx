"use client";

import { use, useEffect, useState } from "react";

import { getCall, getCallInsights } from "@/lib/api";
import { CallDetail, CallInsight } from "@/lib/types";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default function CallDetailsPage({ params }: Props) {
    const { id } = use(params);

    const [call, setCall] = useState<CallDetail | null>(null);
    const [insight, setInsight] = useState<CallInsight | null>(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        loadCall();
    }, []);

    async function loadCall() {
        try {
            setLoading(true);

            const callData = await getCall(Number(id));
            setCall(callData);
            try {
                const insightData = await getCallInsights(Number(id));
                setInsight(insightData);
            } catch {
                setInsight(null);
            }
        } catch (err) {
            console.error(err);
            setError("Failed to load call.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="p-8 text-center">
                Loading call details...
            </div>
        );
    }

    if (error || !call) {
        return (
            <div className="p-8 text-center text-red-500">
                {error || "Call not found"}
            </div>
        );
    }

    return (
        <div className="space-y-6">

            <div>
                <p className="text-sm text-muted-foreground">
                    Conversation Intelligence
                </p>

                <h1 className="text-3xl font-bold">
                    Call Details
                </h1>
            </div>

            <Card>

                <CardHeader>

                    <CardTitle>
                        Recording Information
                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-3">

                    <div>
                        <strong>File</strong>
                        <br />
                        {call.file_name}
                    </div>

                    <div>
                        <strong>Status</strong>
                        <br />

                        <Badge>
                            {call.processing_status}
                        </Badge>

                    </div>

                    <div>
                        <strong>Language</strong>
                        <br />
                        {call.transcript_language}
                    </div>

                    <div>
                        <strong>Duration</strong>
                        <br />
                        {call.transcript_duration} seconds
                    </div>

                    <div>
                        <strong>Created</strong>
                        <br />
                        {new Date(call.created_at).toLocaleString()}
                    </div>

                </CardContent>

            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Transcript</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="whitespace-pre-wrap rounded-lg border bg-muted/30 p-4 text-sm leading-7">
                        {call.transcript || "Transcript not available."}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Customer Name
                        </p>

                        <p className="font-medium">
                            {insight?.customer_name || "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Company
                        </p>

                        <p className="font-medium">
                            {insight?.company || "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Phone
                        </p>

                        <p className="font-medium">
                            {insight?.phone || "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Email
                        </p>

                        <p className="font-medium">
                            {insight?.email || "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Product
                        </p>

                        <p className="font-medium">
                            {insight?.product || "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Budget
                        </p>

                        <p className="font-medium">
                            {insight?.budget || "-"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Intent
                        </p>

                        <Badge>
                            {insight?.intent || "-"}
                        </Badge>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Sentiment
                        </p>

                        <Badge>
                            {insight?.sentiment || "-"}
                        </Badge>
                    </div>

                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>AI Summary</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="rounded-lg border bg-muted/30 p-4 text-sm leading-7">
                        {insight?.summary || "No summary available."}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Action Items</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="rounded-lg border bg-muted/30 p-4 text-sm leading-7">
                        {insight?.action_items || "No action items available."}
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}