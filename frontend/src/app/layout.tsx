import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer"; // 👈 make sure this path is correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyra — AI Cyber Platform",
  description:
    "Transform customer engagement with intelligent AI solutions. Seamlessly integrate advanced chatbot technology into any platform.",
  metadataBase: new URL("https://oma-voxia.framer.website"),
  openGraph: {
    title: "Cyra — AI Cyber Platform",
    description:
      "Transform customer engagement with intelligent AI solutions. Seamlessly integrate advanced chatbot technology into any platform.",
    url: "https://oma-voxia.framer.website",
    siteName: "Cyra",
    images: [
      {
        url: "https://framerusercontent.com/assets/iTZSdnwwR1pq7icgfCYFz03P6M.png",
        width: 1200,
        height: 630,
        alt: "Cyra hero preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxia — AI Chatbot Platform",
    description:
      "Transform customer engagement with intelligent AI solutions. Seamlessly integrate advanced chatbot technology into any platform.",
    images: [
      "https://framerusercontent.com/assets/iTZSdnwwR1pq7icgfCYFz03P6M.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        {/* Main Page Content */}
        <main className="grow">{children}</main>

        {/* Global Footer (touches all sides) */}
        <Footer />
      </body>
    </html>
  );
}
