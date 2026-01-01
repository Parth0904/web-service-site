import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fast Frontend Web Development Services | React & Next.js",
  description:
    "I build fast, modern, mobile-friendly websites using React and Next.js. Focused on performance, clean design, and better user experience.",
  verification: {
    google: "xaiS-ThmQ0IWXZ2cvs5L4yUT9IgMpg9scBCFXVki5MA",
  },
   robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
