import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import LocaleProviderWrapper from "./components/LocaleProviderWrapper";

export const metadata: Metadata = {
  title: "DGSOFT — Digital Innovation Studio",
  description: "We accelerate growth through technology and creative innovation. Your trusted partner for digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className="antialiased bg-monks-black text-white">
        <LocaleProviderWrapper>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LocaleProviderWrapper>
      </body>
    </html>
  );
}
