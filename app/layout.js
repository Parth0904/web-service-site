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
  title: "Parth Londhe",
  description: "Get a free website audit and see how your design, speed, and usability can be improved.",
};

<meta name="google-site-verification" content="xaiS-ThmQ0IWXZ2cvs5L4yUT9IgMpg9scBCFXVki5MA" />

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
