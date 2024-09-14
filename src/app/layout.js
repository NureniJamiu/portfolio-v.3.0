import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nureni Jamiu',
    description: "Nureni Jamiu's portfolio website",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} relative bg-[#f3f3f3] dark:bg-[#151515] dark:text-white`}>
                {children}
            </body>
        </html>
    )
}
