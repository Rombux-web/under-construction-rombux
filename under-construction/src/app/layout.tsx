import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-albert-sans',
})

export const metadata: Metadata = {
  title: "Rombux",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
