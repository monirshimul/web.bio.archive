import MegaNav from "@/components/megaNav/MegaNav";
import { Catamaran, Inter, Overpass } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const overPass = Overpass({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overPass",
});
const catamaran = Catamaran({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-catamaran",
});

export const metadata = {
  title: "Bio Archieve",
  description: "Collection of all works, learnings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${overPass.variable} ${
          catamaran.variable
        } ${process.env.NODE_ENV == "development" ? "debug-screens" : ""}`}
      >
        <Providers>
          <MegaNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
