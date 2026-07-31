"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    FileText,
    Sparkles,
    Upload,
    type LucideIcon,
} from "lucide-react";

type ActionItem = {

    title: string;

    description: string;

    button: string;

    route: string;

    icon: LucideIcon;

};

export default function QuickActions() {

    const router = useRouter();

    const actions: ActionItem[] = [

        {
            title: "Upload Call",
            description: "Upload a new recording.",
            button: "Upload",
            route: "/upload",
            icon: Upload,
        },

        {
            title: "Browse Records",
            description: "View previous conversations.",
            button: "Open",
            route: "/records",
            icon: FileText,
        },

        {
            title: "Recall AI Chat",
            description: "Chat with your calls.",
            button: "Open",
            route: "/chat",
            icon: Sparkles,
        },

    ];

    return (

        <div className="grid gap-4 lg:grid-cols-3">

            {actions.map(action => {

                const Icon = action.icon;

                return (

                    <Card key={action.title}>

                        <CardHeader>

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">

                                <Icon className="h-5 w-5" />

                            </div>

                            <CardTitle>

                                {action.title}

                            </CardTitle>

                            <CardDescription>

                                {action.description}

                            </CardDescription>

                        </CardHeader>

                        <CardContent>

                            <Button
                                className="w-full"
                                onClick={() => router.push(action.route)}
                            >

                                {action.button}

                            </Button>

                        </CardContent>

                    </Card>

                );

            })}

        </div>

    );

}