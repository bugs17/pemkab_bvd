import { Geist, Geist_Mono, Montserrat, Lora } from "next/font/google";
import "./globals.css";
import Provider from "./context/Provider";
import LoadingScreen from "./component/clientComponent/loadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['300', '400', "500","800"], // bold
  variable: '--font-montserrat'
});

const lora = Lora({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-lora",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${lora.variable} antialiased`}
      >
        <Provider>
          <LoadingScreen />
          {children}
        </Provider>
      </body>
    </html>
  );
}
