import { Card, CardContent } from "@/components/ui/card"
import {
    FileText,
    MessageSquare,
    Phone,
    type LucideIcon,
} from "lucide-react"

type StatItem = {
    title: string
    value: string
    subtitle: string
    icon: LucideIcon
}

const stats: StatItem[] = [
    {
        title: "Total Calls",
        value: "1,248",
        subtitle: "Calls processed",
        icon: Phone,
    },
    {
        title: "Transcripts",
        value: "1,221",
        subtitle: "Generated successfully",
        icon: FileText,
    },
    {
        title: "AI Chats",
        value: "486",
        subtitle: "Questions answered",
        icon: MessageSquare,
    },
]

export default function StatsCards() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => {
                const Icon = item.icon

                return (
                    <Card
                        key={item.title}
                        className="border-border/60 bg-card/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20"
                    >
                        <CardContent className="flex flex-col gap-3 p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                <Icon className="h-5 w-5" />
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                            </div>

                            <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
