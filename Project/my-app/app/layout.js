import "./globals.css";
import { Inter } from "next/font/google";
import Searchbar from "@/components/Searchbar";
import MessiStats from "./achievements/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
