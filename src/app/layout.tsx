import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Expo | India's First Code Expo for Beginners",
  icons:{
    icon: "/logo/logo-favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-inter antialiased bg-black text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  );
}
