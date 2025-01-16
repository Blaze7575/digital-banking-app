import type { Metadata } from "next";
import { Geist, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexSerif = {
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  Weight: ["400", "700"],
};

export const metadata: Metadata = {
  title: "Horizon",
  description: "A digital banking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
