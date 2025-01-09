export const metadata = {
  title: "Home - Creative",
  description: "Page description",
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

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      {/* <Creatives />
      <Pricing />
      <Testimonials /> */}
      <About />
      <Faqs />
      {/* <Blog /> */}
      <Cta />
    </>
  );
}
