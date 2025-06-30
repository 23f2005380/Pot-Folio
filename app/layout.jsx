import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import Float from "../components/float"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pot Folio",
  description: "Aman Kumar Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{backgroundColor: '#0B192C'}}>
        <Header />
        {children}
              <Float />
      </body>
    </html>
  );
}
