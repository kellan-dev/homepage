import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/header";
import Container from "@/components/container";
import Noise from "@/components/noise";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "kellan.dev",
  description: "The humble notes and projects of an aspiring web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen font-mono antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Container className="relative mt-8 flex flex-col gap-4 px-4">
            {children}
          </Container>
          <Noise />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
