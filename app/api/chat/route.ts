import { streamText } from "ai";
import { NextRequest } from "next/server";
import { getDefaultModel } from "@/modules/ai/model-registry";
import { getUser } from "@/modules/auth";
import { saveMessage, createChatSession } from "@/modules/chat";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const user = await getUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { messages, sessionId: existingSessionId } = await req.json();

  // Create a new session if one isn't provided
  let sessionId = existingSessionId;
  if (!sessionId) {
    const firstUserMessage = messages.find(
      (m: { role: string }) => m.role === "user"
    );
    const title = firstUserMessage?.content?.slice(0, 50) ?? "New chat";
    const session = await createChatSession(user.id, title);
    sessionId = session.id;
  }

  // Save the last user message
  const lastMessage = messages[messages.length - 1];
  if (lastMessage?.role === "user") {
    await saveMessage(sessionId, { role: "user", content: lastMessage.content });
  }

  const result = streamText({
    model: getDefaultModel(),
    system: "You are a helpful assistant.",
    messages,
    async onFinish({ text }) {
      // Persist assistant response
      await saveMessage(sessionId, { role: "assistant", content: text });
    },
  });

  return result.toTextStreamResponse();
}
