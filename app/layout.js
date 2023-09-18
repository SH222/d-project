import "./globals.css";
import { Exo_2, Montserrat } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const exo = Exo_2({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--exo",
});

export const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "김승현",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(montserrat.className, exo.variable)}>{children}</body>
    </html>
  );
}
