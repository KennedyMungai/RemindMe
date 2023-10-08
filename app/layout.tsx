import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remind Me",
  description: "A simple reminder app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={opensans.className}>
        <div className="flex min-h-screen w-full flex-col items-center dark:bg-black">
          <body>{children}</body>
        </div>
      </html>
    </ClerkProvider>
  );
}
