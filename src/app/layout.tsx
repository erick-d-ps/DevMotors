import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevMotors - sua oficina especializada!",
  description: "Oficina de carros em Paraníba MS",
  keywords: ["oficina", "oficina de carros", "carros", "manutenção de carros"],
  openGraph: {
    title: "DevMotors - sua oficina especializada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/opengraph.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header />
        {children}
        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 14 }}>
          Todos diritos reservados DevMotors @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
