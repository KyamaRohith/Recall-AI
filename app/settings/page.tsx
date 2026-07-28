import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Brain, Database, Languages, Monitor, Sparkles } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Application configuration</p>
                <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
                <Card className="border-border/60 bg-card/70">
                    <CardHeader>
                        <CardTitle className="text-base">General</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3">
                            <div className="flex items-center gap-2">
                                <Brain className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Application Name</span>
                            </div>
                            <span className="text-sm font-medium">Recall AI</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3">
                            <div className="flex items-center gap-2">
                                <Monitor className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Theme</span>
                            </div>
                            <span className="text-sm font-medium">Light</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3">
                            <div className="flex items-center gap-2">
                                <Languages className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Language</span>
                            </div>
                            <span className="text-sm font-medium">English</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/70">
                    <CardHeader>
                        <CardTitle className="text-base">AI Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3">
                            <div className="flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Current Model</span>
                            </div>
                            <Badge>Groq</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3">
                            <div className="flex items-center gap-2">
                                <Brain className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Transcription</span>
                            </div>
                            <Badge variant="secondary">Whisper</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/70 p-3">
                            <div className="flex items-center gap-2">
                                <Database className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Embedding</span>
                            </div>
                            <Badge variant="outline">Local</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/70">
                    <CardHeader>
                        <CardTitle className="text-base">About</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback>RA</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Recall AI</p>
                                <p className="text-sm text-muted-foreground">Version 1.0.0</p>
                            </div>
                        </div>
                        <Separator />
                        <p className="text-sm text-muted-foreground">Investor Demo</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}