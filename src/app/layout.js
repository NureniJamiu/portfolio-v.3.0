import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";

// primereact config
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { DockComponent } from "@/components/custom/DockComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nureni Jamiu",
  description: "Nureni Jamiu's personal website",
};

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <html lang="en">
        <body
          className={`${inter.className} relative bg-[#F3F3F3] dark:bg-[#151515] dark:text-white px-4 max-w-3xl mx-auto`}
        >
          <Header />
          {children}
          <DockComponent />
        </body>
      </html>
    </PrimeReactProvider>
  );
}
