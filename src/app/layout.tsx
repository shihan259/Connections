import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/contexts/ToastContext";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const libre_franklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Konnections",
  description: "Your second favorite word association game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={libre_franklin.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ToastProvider>{children}</ToastProvider>
        </div>
      </body>
    </html>
  );
}
