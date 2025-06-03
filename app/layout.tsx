import "./globals.css";
import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { Work_Sans, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { Navbar } from "@/components/layout/navbar";

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

export const metadata: Metadata = {
  title: "Pinnacle Smart Solutions",
  description: "Your Business Our Canvas of Digital Magic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
