import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Dalan Vekst",
  description:
    "Vi skaffer deg kunder gjennom nettet. Nettsider, annonser og systemer som faktisk genererer salg.",
  keywords: [
    "nettside",
    "google ads",
    "annonsering",
    "leads",
    "markedsføring",
    "vekst",
    "bedrift",
    "dalan vekst",
  ],
  authors: [{ name: "Dalan Vekst" }],
  creator: "Dalan Vekst",

  openGraph: {
    title: "Dalan Vekst",
    description:
      "Vi skaffer deg kunder gjennom nettet. Nettsider, annonser og systemer som faktisk genererer salg.",
    url: "https://dalanvekst.no",
    siteName: "Dalan Vekst",
    locale: "no_NO",
    type: "website",
  },

  metadataBase: new URL("https://dalanvekst.no"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={manrope.variable}>
      <body className="bg-[#000080] text-white antialiased selection:bg-[#FF0000]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}