import Header from "@/components/Header";
import "./globals.css";
import { Figtree } from "next/font/google";
import {twMerge} from 'tailwind-merge'

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge("min-h-full bg-neutral-100", font.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
