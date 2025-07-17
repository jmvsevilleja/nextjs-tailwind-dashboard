import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { 
  Zap, 
  Bell, 
  Search, 
  Plus,
  Users,
  BarChart3,
  Settings,
  CreditCard,
  FileText,
  LogOut,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  UserPlus,
  Eye,
  MoreHorizontal
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">SaaSify</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <Users className="w-5 h-5" />
              <span>Users</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <FileText className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <CreditCard className="w-5 h-5" />
              <span>Billing</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </div>
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@example.com</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="h-full px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">$45,231</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +20.1% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">2,350</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +180.1% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold">12.5%</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    -2.1% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">New Signups</p>
                  <p className="text-2xl font-bold">573</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +201 since last week
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-lg">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Recent Activity</h3>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View all
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      user: "Sarah Johnson",
                      action: "upgraded to Pro plan",
                      time: "2 minutes ago",
                      avatar: "SJ"
                    },
                    {
                      user: "Mike Chen",
                      action: "created a new project",
                      time: "1 hour ago",
                      avatar: "MC"
                    },
                    {
                      user: "Emily Davis",
                      action: "invited 3 team members",
                      time: "3 hours ago",
                      avatar: "ED"
                    },
                    {
                      user: "Alex Wilson",
                      action: "completed onboarding",
                      time: "5 hours ago",
                      avatar: "AW"
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-primary-foreground">
                          {activity.avatar}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>
                          {' '}{activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-lg">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Plus className="w-6 h-6" />
                    <span className="text-sm">New Project</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <UserPlus className="w-6 h-6" />
                    <span className="text-sm">Invite User</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <BarChart3 className="w-6 h-6" />
                    <span className="text-sm">View Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Settings className="w-6 h-6" />
                    <span className="text-sm">Settings</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Users Table */}
          <div className="mt-8 bg-card border border-border rounded-lg">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent Users</h3>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">User</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Plan</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Sarah Johnson",
                      email: "sarah@example.com",
                      plan: "Pro",
                      status: "Active",
                      joined: "Jan 15, 2025"
                    },
                    {
                      name: "Mike Chen",
                      email: "mike@example.com",
                      plan: "Starter",
                      status: "Active",
                      joined: "Jan 14, 2025"
                    },
                    {
                      name: "Emily Davis",
                      email: "emily@example.com",
                      plan: "Enterprise",
                      status: "Active",
                      joined: "Jan 13, 2025"
                    },
                    {
                      name: "Alex Wilson",
                      email: "alex@example.com",
                      plan: "Starter",
                      status: "Trial",
                      joined: "Jan 12, 2025"
                    }
                  ].map((user, index) => (
                    <tr key={index} className="border-b border-border last:border-b-0">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-primary-foreground">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{user.email}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' :
                          user.plan === 'Pro' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                        }`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{user.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}