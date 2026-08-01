import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Yuva Group | Premium Homes in Bengaluru";
const siteDescription =
  "Yuva Group builds premium and affordable homes across Bengaluru with transparent construction progress and site-visit support.";
const siteImage =
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Yuva Group",
    images: [{ url: siteImage, width: 1400, height: 800, alt: "Yuva Group residential project" }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage]
  }
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
