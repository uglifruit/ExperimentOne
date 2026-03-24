import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { getSession } from "@/app/lib/session";

export const metadata: Metadata = {
  title: "✨ Magic Teacher ✨ - AI for COOL Educators!!!",
  description: "Save time with AI! FREE! NO VIRUS! Best site 1999!!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const userEmail = (session?.email as string) ?? null;

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar userEmail={userEmail} />
        {children}
      </body>
    </html>
  );
}
