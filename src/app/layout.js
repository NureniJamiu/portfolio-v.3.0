import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nureni Jamiu",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-[#f3f3f3] dark:bg-black dark:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
