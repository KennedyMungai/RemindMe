"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider attribute="class" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
