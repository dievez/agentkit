// Auth types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: Date;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  expiresAt: number;
}
