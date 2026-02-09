import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogPose Signals",
  description:
    "Real-time stock screener for trend, momentum, and signal-based trade discovery.",
};

/**
 * Root layout component that wraps application content in an HTML document using global fonts and dark mode.
 *
 * Renders an <html lang="en"> element with a <body> that applies the configured Geist fonts and antialiasing, then injects `children` inside the body.
 *
 * @param children - The React node(s) to render inside the document body
 * @returns The top-level HTML structure containing the provided `children`
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}