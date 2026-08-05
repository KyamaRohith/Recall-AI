"use client";

import { useEffect, useState } from "react";

import { getCalls } from "@/lib/api";

import { Card, CardContent } from "@/components/ui/card";

import {
    CheckCircle2,
    Clock3,
    Phone,
    XCircle,
    type LucideIcon,
} from "lucide-react";

type DashboardStat = {
    title: string;
    value: number;
    subtitle: string;
    icon: LucideIcon;
};

export default function StatsCards() {

    const [stats, setStats] = useState<DashboardStat[]>([]);

    useEffect(() => {
        loadStats();
    }, []);

    async function loadStats() {

        const calls = await getCalls();

        const total = calls.length;

        const completed = calls.filter(
            c => c.processing_status === "COMPLETED"
        ).length;

        const failed = calls.filter(
            c => c.processing_status === "FAILED"
        ).length;

        const processing = calls.filter(
            c =>
                c.processing_status !== "COMPLETED" &&
                c.processing_status !== "FAILED"
        ).length;

        setStats([
            {
                title: "Total Calls",
                value: total,
                subtitle: "Uploaded",
                icon: Phone,
            },
            {
                title: "Completed",
                value: completed,
                subtitle: "Processed",
                icon: CheckCircle2,
            },
            {
                title: "Processing",
                value: processing,
                subtitle: "Running",
                icon: Clock3,
            },
            {
                title: "Failed",
                value: failed,
                subtitle: "Needs attention",
                icon: XCircle,
            },
        ]);
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <Card
                        key={item.title}
                        className="border-border/60 bg-card/70"
                    >

                        <CardContent className="flex flex-col gap-3 p-5">

                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted">

                                <Icon className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-sm text-muted-foreground">
                                    {item.title}
                                </p>

                                <h2 className="text-3xl font-bold">
                                    {item.value}
                                </h2>

                            </div>

                            <p className="text-sm text-muted-foreground">
                                {item.subtitle}
                            </p>

                        </CardContent>

                    </Card>

                );

            })}

        </div>
    );
}
