import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WASAN | وسن",
  description: "UI/UX & Web Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}