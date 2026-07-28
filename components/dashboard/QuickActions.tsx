import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Sparkles, Upload, type LucideIcon } from "lucide-react"

type ActionItem = {
    title: string
    description: string
    buttonLabel: string
    icon: LucideIcon
}

const actions: ActionItem[] = [
    {
        title: "Upload New Call",
        description: "Upload audio recordings for transcription.",
        buttonLabel: "Upload",
        icon: Upload,
    },
    {
        title: "Search Records",
        description: "Search previous conversations.",
        buttonLabel: "Open",
        icon: Search,
    },
    {
        title: "Ask Recall AI",
        description: "Chat with your conversations.",
        buttonLabel: "Ask AI",
        icon: Sparkles,
    },
]

export default function QuickActions() {
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            {actions.map((action) => {
                const Icon = action.icon

                return (
                    <Card
                        key={action.title}
                        className="flex h-full flex-col border-border/60 bg-card/70 transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
                    >
                        <CardHeader className="gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-base">{action.title}</CardTitle>
                                <CardDescription className="mt-1 text-sm">
                                    {action.description}
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-auto pt-0">
                            <Button variant="outline" className="w-full justify-center">
                                {action.buttonLabel}
                            </Button>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
