import Link from "next/link";
import { getUser } from "@/modules/auth";
import { getChatSessions } from "@/modules/chat";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const user = await getUser();
  const sessions = user ? await getChatSessions(user.id) : [];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Your chats</h1>
          <p className="text-muted-foreground">Continue a conversation or start a new one</p>
        </div>
        <Link
          href="/chat/new"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
        >
          New chat
        </Link>
      </div>

      {sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
          <p className="text-muted-foreground">No chats yet.</p>
          <Link
            href="/chat/new"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Start your first chat
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => (
            <Link key={session.id} href={`/chat/${session.id}`}>
              <Card className="cursor-pointer transition-colors hover:bg-accent">
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-base">{session.title}</CardTitle>
                  <CardDescription>
                    {new Date(session.updatedAt).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
