import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
// config
// components
import "./globals.css";
import { Header } from "@/components";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray"}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
