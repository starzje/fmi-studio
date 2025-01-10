import CookieConsentManager from "@/utils/CookiesConsentManager";
import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cabinet = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Studio F.M.I.",
  description: "Grafički dizajn, tisak, i još puno toga.",

  openGraph: {
    title: "Studio F.M.I. - Grafički dizajn i tisak",
    description: "Profesionalni dizajn i usluge tiska.",
    siteName: "Studio F.M.I.",
    locale: "hr_HR",
    type: "website",
    url: "https://www.studio-fmi.hr",
    metadataBase: new URL("https://www.studio-fmi.hr"),
    images: [
      {
        url: "https://www.studio-fmi.hr/images/website-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Studio F.M.I. website",
      },
    ],
    keywords: ["grafički dizajn", "tisak", "Studio F.M.I.", "dizajn u Zagrebu", "print studio"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio F.M.I.",
    description: "Grafički dizajn, tisak, i još puno toga.",
    images: ["https://www.studio-fmi.hr/images/website-screenshot.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cabinet.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">{children}</div>
        <CookieConsentManager />
      </body>
    </html>
  );
}
