"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
    href: string;
    label: string;
    icon: LucideIcon;
}

export default function NavItem({
    href,
    label,
    icon: Icon,
}: NavItemProps) {
    const pathname = usePathname();

    const active = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </Link>
    );
}