import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const freeFeatures = [
  "Next.js App Router scaffold",
  "Supabase auth integration",
  "Streaming chat",
  "Multi-model support",
];

const proFeatures = [
  "RAG pipeline with pgvector",
  "LangGraph agents + tool calling",
  "Billing, multi-tenancy, and observability",
  "Private GitHub access + lifetime updates",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Free OSS tier for AgentKit Pro
            </Badge>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ship AI chat apps fast with the free AgentKit starter.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Start with the open-source foundation: Next.js, auth, streaming chat,
              and multi-model support. When you need the production stack — RAG,
              agents, billing, multi-tenancy, and observability — upgrade to
              AgentKit Pro.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Start free
              </Link>
              <a
                href="https://agent-kit.pro/premium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Upgrade to Premium →
              </a>
              <a
                href="https://github.com/dievez/agentkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                View source on GitHub
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Premium is the main offer: <strong className="text-foreground">$199 lifetime</strong>{" "}
              for RAG + agents + SaaS infrastructure in one stack.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Why people start here</p>
                <h2 className="mt-1 text-2xl font-semibold text-card-foreground">Free first. Upgrade when revenue matters.</h2>
              </div>
              <Badge>OSS</Badge>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Free AgentKit
                </h3>
                <ul className="space-y-2 text-sm text-card-foreground">
                  {freeFeatures.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  AgentKit Pro
                </h3>
                <ul className="space-y-2 text-sm text-card-foreground">
                  {proFeatures.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border p-5">
            <p className="text-sm font-medium text-muted-foreground">Free tier</p>
            <p className="mt-2 text-2xl font-semibold">Auth + chat + models</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Enough to validate your app idea and start building immediately.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="text-sm font-medium text-muted-foreground">Upgrade path</p>
            <p className="mt-2 text-2xl font-semibold">RAG + agents + billing</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Add the production monetization and AI orchestration stack without stitching tools together.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="text-sm font-medium text-muted-foreground">Commercial CTA</p>
            <p className="mt-2 text-2xl font-semibold">Premium at $199 lifetime</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The fastest route from OSS evaluation to a serious AI SaaS launch.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
