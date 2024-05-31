import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import DockComponent from "@/components/custom/DockComponent";
import Header from "@/components/custom/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nureni Jamiu",
  description: "Nureni Jamiu's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#151515] text-white px-4 max-w-4xl mx-auto`}
      >
        <Header />
        {children}
        <DockComponent />
      </body>
    </html>
  );
}
