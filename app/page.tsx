import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="secondary" className="mb-4">
          Open Source
        </Badge>

        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          AgentKit
        </h1>

        <p className="mb-8 text-xl text-muted-foreground">
          The Next.js starter kit for building AI-powered apps.
          Auth, streaming chat, and multi-model support — out of the box.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Get started free
          </Link>
          <a
            href="https://github.com/dievez/agentkit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            View on GitHub
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Need RAG, agents, multi-tenancy?{" "}
          <a
            href="https://agentkit-pro.lemonsqueezy.com"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Check out AgentKit Pro →
          </a>
        </p>
      </div>
    </main>
  );
}
