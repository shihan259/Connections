import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/contexts/ToastContext";

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
      <body className={libre_franklin.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}