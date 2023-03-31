"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "@next/font/google";
import Navbar from "@/Components/Navbar2";
import Footer from "@/Components/Footer/Footer";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <SessionProvider>
          <Navbar />
          <div className="container">
            {children}
          </div>
          <Footer />
        </SessionProvider>
        
      </body>
    </html>
  );
}