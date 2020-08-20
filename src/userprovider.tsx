import React, { createContext, useContext, useState, ReactNode } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
}

const UserContext = createContext<IUser | undefined>(undefined);

export function useUserContext() {
  return useContext(UserContext);
}

interface IUpdateUserContext {
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

const UpdateUserContext = createContext<IUpdateUserContext>({
  setUser: (user: IUser) => {},
  clearUser: () => {},
});

export function useUpdateUserContext() {
  return useContext(UpdateUserContext);
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, updateUser] = useState<IUser | undefined>(undefined);

  const setUser = (u: IUser) => {
    updateUser(u);
    console.log(`setUser called`);
  };

  const clearUser = () => {
    updateUser(undefined);
    console.log(`clearUser called`);
  };

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={{ setUser, clearUser }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
