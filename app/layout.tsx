import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuva Group | Premium Homes in Bengaluru",
  description:
    "Yuva Group builds premium and affordable homes across Bengaluru with transparent construction progress and site-visit support."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
