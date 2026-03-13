import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import LocaleProviderWrapper from "./components/LocaleProviderWrapper";

const FAVICON_URL = "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp";

export const metadata: Metadata = {
  title: "DGSOFT — Digital Innovation Studio",
  description: "We accelerate growth through technology and creative innovation. Your trusted partner for digital transformation.",
  icons: {
    icon: FAVICON_URL,
    shortcut: FAVICON_URL,
    apple: FAVICON_URL,
  },
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
