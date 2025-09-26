import { createContext, useContext } from "react";

export interface UserSession {
  email: string;
  name: string;
  id: string;
}

interface UserSessionProviderProps {
  children: React.ReactNode;
  userSession: UserSession;
}

const UserSessionContext = createContext<UserSession | null>(null);

export function useUserSession() {
  return useContext(UserSessionContext);
}

export function UserSessionProvider({
  children,
  userSession,
}: UserSessionProviderProps) {
  return (
    <UserSessionContext.Provider value={userSession}>
      {children}
    </UserSessionContext.Provider>
  );
}
