
import { createServerClient } from "@/lib/supabase";
import type { ChatSession, Message } from "@/types";

export async function getChatSessions(userId: string): Promise<ChatSession[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("chat_sessions")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getChatSession(id: string): Promise<ChatSession | null> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("chat_sessions")
    .select("*, messages(*)")
    .eq("id", id)
    .single();

  if (error) return null;
  return data;
}

export async function createChatSession(userId: string, title: string): Promise<ChatSession> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("chat_sessions")
    .insert({ user_id: userId, title })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteChatSession(id: string): Promise<void> {
  const supabase = await createServerClient();
  const { error } = await supabase
    .from("chat_sessions")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function saveMessage(
  sessionId: string,
  message: Pick<Message, "role" | "content">
): Promise<Message> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("messages")
    .insert({ session_id: sessionId, role: message.role, content: message.content })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
