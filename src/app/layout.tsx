import type { Metadata } from "next";
import { Poppins, Montserrat, Sansita } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartNotification } from "@/components/CartNotification";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sansita = Sansita({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farsanwadi – Swaad Bhi, Sehat Bhi!",
  description:
    "Farsanwadi offers guilt-free, healthy Indian snacks — Khakhra, Chips, Bakarwadi, Namkeen and more. Pan India delivery. 100% Veg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${sansita.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffcfc] text-[#444444] font-poppins">
        <CartProvider>
          <CartNotification />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
