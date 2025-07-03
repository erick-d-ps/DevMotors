import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.scss";
import { Header } from '@/components/header'

const inter = Inter({
  subsets: ['latin'], 
  display: 'swap',  
  variable: '--font-inter', 
});

export const metadata: Metadata = {
  title: "DevMotors - sua oficina especializada!",
  description: "Oficina de carros em Paraníba MS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
