import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Nureni Jamiu",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} relative bg-[#f3f3f3] dark:bg-black dark:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
