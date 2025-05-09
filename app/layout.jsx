import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./context/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PEMKAB BOVEN DIGOEL",
  description: "Website resmi pemerintah kabupaten boven digoel",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="autumn" lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
