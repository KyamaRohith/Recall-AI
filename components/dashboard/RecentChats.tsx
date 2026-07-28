import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

type ChatItem = {
    question: string
    timestamp: string
}

const chats: ChatItem[] = [
    {
        question: "What vehicle was the customer looking for?",
        timestamp: "10m ago",
    },
    {
        question: "Show calls mentioning financing.",
        timestamp: "32m ago",
    },
    {
        question: "Summarize yesterday's conversations.",
        timestamp: "1h ago",
    },
    {
        question: "When should I follow up with Ravi?",
        timestamp: "2h ago",
    },
]

export default function RecentChats() {
    return (
        <Card className="border-border/60 bg-card/70">
            <CardHeader>
                <CardTitle className="text-base">Recent AI Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
                {chats.map((chat) => (
                    <div
                        key={chat.question}
                        className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/70 p-3"
                    >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                            <MessageSquare className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">{chat.question}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{chat.timestamp}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
