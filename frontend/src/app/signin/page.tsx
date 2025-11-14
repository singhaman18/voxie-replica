"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add authentication logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleGoogleSignIn = () => {
    // Add Google OAuth logic here
    console.log("Google sign in");
  };

  return (
    <div className="relative min-h-screen">
      {/* Cross pattern background */}
      <div className="cross-pattern" />

      <div className="relative flex min-h-screen flex-col items-center justify-center">
        {/* Background gradients */}
        <div className="pointer-events-none fixed inset-0 -z-20 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,97,255,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_55%)]" />
        </div>

        {/* Logo and back button */}
        <div className="absolute left-6 top-6 flex items-center gap-4 sm:left-8 sm:top-8">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              className="size-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>

        {/* Two section layout */}
        <div className="w-full max-w-6xl px-4 py-8 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left side - CYRA Details */}
            <div className="hidden lg:block space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-linear-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30">
                    <svg
                      className="size-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground">CYRA</h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  AI-powered cloud security for your GCP infrastructure
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20">
                    <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real-time Threat Detection</h3>
                    <p className="text-sm text-muted-foreground">Get instant alerts for security vulnerabilities and misconfigurations</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                    <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Compliance Monitoring</h3>
                    <p className="text-sm text-muted-foreground">Stay audit-ready with continuous compliance tracking</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-chart-2/10 ring-1 ring-chart-2/20 transition-all group-hover:bg-chart-2/20">
                    <svg className="size-5 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Intelligent insights to fix vulnerabilities before incidents occur</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Trusted by developers</span> across startups and enterprises to secure their cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Right side - Sign in form */}
            <div className="w-full animate-fade-in-up lg:animate-none">
          <Card className="border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl">
            <CardHeader className="space-y-3 pb-8 text-center">
              {/* CYRA Logo */}
              <div className="mx-auto mb-2 flex size-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30">
                <svg
                  className="size-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription className="text-base">
                Sign in to your CYRA security dashboard
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Google Sign In */}
              <Button
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full border-border/60 bg-secondary/30 hover:bg-secondary/50"
                size="lg"
              >
                <svg className="size-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="relative">
                <Separator className="opacity-50" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">
                  or continue with email
                </span>
              </div>

              {/* Email Sign In Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-secondary/20 px-3 py-2 text-sm ring-offset-background transition-all placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-secondary/20 px-3 py-2 text-sm ring-offset-background transition-all placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </form>

              {/* Sign up link */}
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-medium text-primary hover:text-primary/80 transition-colors">
                  Create account
                </Link>
              </p>
            </CardContent>
          </Card>

          {/* Security message */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground/80">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Your connection is secured with end-to-end encryption</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
