import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "✨ Magic Teacher ✨ - AI for COOL Educators!!!",
  description: "Save time with AI! FREE! NO VIRUS! Best site 1999!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
