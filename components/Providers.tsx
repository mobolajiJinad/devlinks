"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  console.log(typeof children);
  
  return <SessionProvider>{children}</SessionProvider>;
};
