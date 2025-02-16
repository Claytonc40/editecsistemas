import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export const metadata: Metadata = {
  title: "Editec Sistemas Desenvolvimento",
  description: "Editec Sistemas Desenvolvimento de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
