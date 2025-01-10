export const metadata = {
  title: "Studio F.M.I. - Početna",
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
};

import Hero from "@/components/hero";
import Inspiration from "@/components/inspiration";
import Carousel from "@/components/carousel";
import Creatives from "@/components/creatives";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Faqs from "@/components/faqs";
import Blog from "@/components/blog";
import Cta from "@/components/cta";
import About from "@/components/about";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      {/* <Creatives />
      <Pricing />
      <Testimonials /> */}
      <div className=" bg-gray-50 flex justify-center pt-12">
        <Link
          className="btn rounded-lg text-white bg-blue-500 hover:bg-blue-600  shadow-sm"
          href="/proizvodi-i-usluge?category=sve-usluge">
          Pogledaj sve usluge
        </Link>
      </div>
      <About />
      <Faqs />
      {/* <Blog /> */}
      <Cta />
    </>
  );
}
