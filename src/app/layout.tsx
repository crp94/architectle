import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architectle",
  description: "Guess the architect from a widening crop of a building photo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
