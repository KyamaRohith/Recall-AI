import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowUp, MessageSquare, Sparkles } from "lucide-react"

const suggestions = [
    "Show customers interested in SUVs.",
    "Summarize today's calls.",
    "Who requested financing?",
    "Which customers need follow-up?",
]

const sources = [
    { name: "customer_call.mp3", confidence: "96%" },
    { name: "john_followup.wav", confidence: "92%" },
    { name: "dealer_visit.mp3", confidence: "89%" },
]

const messages = [
    { role: "assistant", text: "I can help review customer conversations and surface key insights." },
    { role: "user", text: "Show me customers interested in SUVs." },
    { role: "assistant", text: "I found 3 customers who asked about SUV models in the last 24 hours." },
]

export default function ChatPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Team copilot</p>
                <h1 className="text-2xl font-semibold tracking-tight">AI Assistant</h1>
                <p className="text-sm text-muted-foreground">
                    Ask questions about previous conversations.
                </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_260px]">
                <Card className="flex min-h-[560px] flex-col border-border/60 bg-card/70">
                    <CardHeader>
                        <CardTitle className="text-base">Conversation</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                        <ScrollArea className="h-[420px] pr-3">
                            <div className="space-y-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={`${message.role}-${index}`}
                                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`flex max-w-[80%] gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback>{message.role === "user" ? "You" : "AI"}</AvatarFallback>
                                            </Avatar>
                                            <div
                                                className={`rounded-2xl px-4 py-3 text-sm ${message.role === "user"
                                                    ? "bg-primary text-primary-foreground"
                                                    : "border border-border/60 bg-background/70 text-foreground"
                                                    }`}
                                            >
                                                {message.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>

                    <div className="border-t px-4 py-4">
                        <div className="mb-3 flex flex-wrap gap-2">
                            {suggestions.map((question) => (
                                <button
                                    key={question}
                                    className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-2">
                            <Input placeholder="Ask Recall AI anything..." className="border-0 bg-transparent shadow-none" />
                            <Button size="icon" className="rounded-full">
                                <ArrowUp className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card className="border-border/60 bg-card/70">
                    <CardHeader>
                        <CardTitle className="text-base">Conversation Sources</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                        {sources.map((source) => (
                            <div
                                key={source.name}
                                className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{source.name}</span>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">{source.confidence}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}