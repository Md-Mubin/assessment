import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Suspense } from "react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <Suspense fallback={null}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
