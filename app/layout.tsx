import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VideoBackground from "./components/video/page";

import Navbar from "./components/navbar/page";
Navbar
import Footer from "./components/footer/page";
import SideNavbar from "./components/sideNav/page";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Art Generation",
  description: "NEXTAI MODELS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <VideoBackground videoSource="/video.mp4" />
      <SideNavbar/>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
