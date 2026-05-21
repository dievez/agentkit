import { ChatWindow } from "@/components/chat/chat-window";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ChatPage({ params }: PageProps) {
  const { id } = await params;
  return <ChatWindow sessionId={id === "new" ? null : id} />;
}
