"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  Play,
  Pause,
  RotateCcw,
  Monitor,
  Smartphone,
  Tablet,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  DollarSign,
  Activity,
  UserPlus,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentView, setCurrentView] = useState("desktop");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Demo Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive's Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the full SaaSify dashboard experience. See how easy it is to
            manage your business with our comprehensive platform.
          </p>
        </div>

        {/* Demo Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Button
              variant={isPlaying ? "default" : "outline"}
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 mr-2" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isPlaying ? "Pause Tour" : "Start Tour"}
            </Button>
            <Button variant="outline" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={currentView === "desktop" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentView("desktop")}
            >
              <Monitor className="w-4 h-4" />
            </Button>
            <Button
              variant={currentView === "tablet" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentView("tablet")}
            >
              <Tablet className="w-4 h-4" />
            </Button>
            <Button
              variant={currentView === "mobile" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentView("mobile")}
            >
              <Smartphone className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Demo Frame */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-muted-foreground">
                app.saasify.com/dashboard
              </span>
            </div>
          </div>

          {/* Demo Dashboard */}
          <div
            className={`${
              currentView === "mobile"
                ? "max-w-sm mx-auto"
                : currentView === "tablet"
                ? "max-w-2xl mx-auto"
                : "w-full"
            } transition-all duration-300`}
          >
            <div className="flex">
              {/* Sidebar - Hidden on mobile */}
              {currentView !== "mobile" && (
                <div className="w-64 bg-card border-r border-border flex flex-col">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-bold text-xl">SaaSify</span>
                    </div>
                  </div>

                  <nav className="flex-1 p-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                        <BarChart3 className="w-5 h-5" />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground">
                        <Users className="w-5 h-5" />
                        <span>Users</span>
                      </div>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                      </div>
                    </div>
                  </nav>
                </div>
              )}

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b border-border bg-background/95 backdrop-blur">
                  <div className="h-full px-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Dashboard</h1>

                    <div className="flex items-center space-x-4">
                      {currentView !== "mobile" && (
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Search..."
                            className="w-48 pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      )}

                      <Button variant="ghost" size="sm" className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                      </Button>
                    </div>
                  </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 p-6 overflow-auto">
                  {/* Stats Cards */}
                  <div
                    className={`grid gap-6 mb-8 ${
                      currentView === "mobile"
                        ? "grid-cols-1"
                        : currentView === "tablet"
                        ? "grid-cols-2"
                        : "grid-cols-4"
                    }`}
                  >
                    <div className="p-6 bg-card border border-border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Total Revenue
                          </p>
                          <p className="text-2xl font-bold">$45,231</p>
                          <p className="text-sm text-green-600 flex items-center mt-1">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            +20.1%
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
                          <p className="text-sm text-muted-foreground">
                            Active Users
                          </p>
                          <p className="text-2xl font-bold">2,350</p>
                          <p className="text-sm text-green-600 flex items-center mt-1">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            +180.1%
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    {currentView !== "mobile" && (
                      <>
                        <div className="p-6 bg-card border border-border rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Conversion Rate
                              </p>
                              <p className="text-2xl font-bold">12.5%</p>
                              <p className="text-sm text-green-600 flex items-center mt-1">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +2.1%
                              </p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                              <Activity className="w-6 h-6 text-purple-600" />
                            </div>
                          </div>
                        </div>

                        {currentView === "desktop" && (
                          <div className="p-6 bg-card border border-border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  New Signups
                                </p>
                                <p className="text-2xl font-bold">573</p>
                                <p className="text-sm text-green-600 flex items-center mt-1">
                                  <TrendingUp className="w-4 h-4 mr-1" />
                                  +201
                                </p>
                              </div>
                              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                                <UserPlus className="w-6 h-6 text-orange-600" />
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-card border border-border rounded-lg">
                    <div className="p-6 border-b border-border">
                      <h3 className="text-lg font-semibold">Quick Actions</h3>
                    </div>
                    <div className="p-6">
                      <div
                        className={`grid gap-4 ${
                          currentView === "mobile"
                            ? "grid-cols-2"
                            : "grid-cols-4"
                        }`}
                      >
                        <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                          <Plus className="w-6 h-6" />
                          <span className="text-sm">New Project</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                        >
                          <UserPlus className="w-6 h-6" />
                          <span className="text-sm">Invite User</span>
                        </Button>
                        {currentView !== "mobile" && (
                          <>
                            <Button
                              variant="outline"
                              className="h-20 flex flex-col items-center justify-center space-y-2"
                            >
                              <BarChart3 className="w-6 h-6" />
                              <span className="text-sm">Analytics</span>
                            </Button>
                            <Button
                              variant="outline"
                              className="h-20 flex flex-col items-center justify-center space-y-2"
                            >
                              <Settings className="w-6 h-6" />
                              <span className="text-sm">Settings</span>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">
              Monitor your business metrics with live updates and comprehensive
              reporting.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-muted-foreground">
              Easily manage users, roles, and permissions with our intuitive
              interface.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Customizable</h3>
            <p className="text-muted-foreground">
              Tailor the platform to your needs with extensive customization
              options.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Experience the full power of SaaSify with your own account.
          </p>
          <Link href="/auth/signup">
            <Button size="lg">Start Your Free Trial</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
