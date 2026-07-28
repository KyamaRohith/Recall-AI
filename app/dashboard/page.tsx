import QuickActions from "@/components/dashboard/QuickActions"
import StatsCards from "@/components/dashboard/StatsCards"

export default function DashboardPage() {
    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Operations overview</p>
                <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            </div>

            <StatsCards />
            <QuickActions />
        </div>
    )
}
