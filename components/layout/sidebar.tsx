"use client";

import {
    LayoutDashboard,
    Upload,
    FileText,
    MessageSquare,
    Settings,
    Brain,
} from "lucide-react";

import NavItem from "./NavItem";
import { Separator } from "@/components/ui/separator";

const navigation = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Upload Calls",
        href: "/upload",
        icon: Upload,
    },
    {
        label: "Call Records",
        href: "/records",
        icon: FileText,
    },
    {
        label: "AI Assistant",
        href: "/chat",
        icon: MessageSquare,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-background">
            {/* Logo */}
            <div className="flex h-16 items-center gap-3 border-b px-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Brain className="h-5 w-5" />
                </div>

                <div>
                    <h1 className="text-lg font-bold">Recall AI</h1>
                    <p className="text-xs text-muted-foreground">
                        Conversation Intelligence
                    </p>
                </div>
            </div>

            <Separator />

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-2 p-4">
                {navigation.map((item) => (
                    <NavItem key={item.href} {...item} />
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t p-4">
                <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Recall AI</p>
                    <p className="text-xs text-muted-foreground">
                        Investor Demo v1.0
                    </p>
                </div>
            </div>
        </aside>
    );
}