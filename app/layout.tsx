import "./globals.css";
import type { Metadata } from "next";

import { Work_Sans, Space_Grotesk, Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { Toaster } from "@/components/ui/sonner";
import LenisProvider from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-workSans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-spaceGrotesk",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinnacle Smart Solutions | we craft digital experiences",
  description: "Website Development, app development, web dsigning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${spaceGrotesk.variable} ${nunito.variable} antialiased`}
      >
        <LenisProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
