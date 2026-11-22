import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mmcounselling.co.za"),
  title: {
    default: "MM Counselling | Michelle Mackrell, Registered Counsellor",
    template: "%s | MM Counselling",
  },
  description:
    "A space for healing, growth and connection. Michelle Mackrell is an HPCSA Registered Counsellor working with tweens, teens, adults, couples and families.",
};

export const viewport: Viewport = {
  themeColor: "#2E4A3F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
