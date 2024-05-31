import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import DockComponent from "@/components/custom/DockComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nureni Jamiu",
  description: "Nureni Jamiu's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <DockComponent />
      </body>
    </html>
  );
}
