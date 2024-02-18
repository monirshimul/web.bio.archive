import Footer from "@/components/footer/footer";
import MegaNav from "@/components/megaNav/MegaNav";
import {
  Catamaran,
  Inter,
  Klee_One,
  Overpass,
  Yesteryear,
} from "next/font/google";

import { DarkThemeProviders } from "./darkThemeProvider";
import "./globals.css";
import { Providers as NextUiProviders } from "./providers";
import { ReduxProvider } from "./reduxProvider";

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

const yesteryear = Yesteryear({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-yesteryear",
});

const klee_one = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-klee_one",
});

export const metadata = {
  title: "Bio Archive",
  description: "Collection of all works, learnings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${yesteryear.variable} ${inter.variable} ${
          overPass.variable
        } ${catamaran.variable} ${klee_one.variable} ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        } `}
      >
        <ReduxProvider>
          <NextUiProviders>
            <DarkThemeProviders>
              <MegaNav />
              {/* <Navbar /> */}
              {children}
              <Footer />
            </DarkThemeProviders>
          </NextUiProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
