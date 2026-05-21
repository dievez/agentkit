"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { signOut } from "@/modules/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, LayoutDashboard, LogOut } from "lucide-react";

interface SidebarProps {
  user: User;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/chat/new", label: "New chat", icon: MessageSquare },
];

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 flex-col border-r bg-card">
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-lg font-bold">AgentKit</span>
        </Link>
      </div>

      <Separator />

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Separator />

      <div className="p-3">
        <div className="mb-2 flex items-center gap-3 px-2 py-1">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="text-xs">
              {user.email?.[0]?.toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
          <span className="flex-1 truncate text-sm text-muted-foreground">
            {user.email}
          </span>
        </div>
        <form action={signOut}>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground" type="submit">
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </form>
      </div>
    </aside>
  );
}
