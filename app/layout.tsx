import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github Profile Viewer",
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
