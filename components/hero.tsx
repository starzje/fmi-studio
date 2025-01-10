import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/images/hero-image.png";

export default function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div className="absolute inset-0 rounded-bl-[100px] bg-gray-50 pointer-events-none -z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h1 className="h1 font-cabinet-grotesk mb-6" data-aos="fade-right" data-aos-delay="100">
                Dizajn, print, promotivni materijali i više
              </h1>
              <p className="text-xl text-gray-500 mb-10" data-aos="fade-right" data-aos-delay="200">
                S više od od 16 godina postojanja, usavršavanja i praćenja trendova digitalni i print studio FMI Vam
                nudi sve vrste grafčkih, vizualnih i printanih proizvoda za Vaše poslovanje
              </p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300">
                <div>
                  <Link
                    className="btn rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                    href="/proizvodi-i-usluge?category=sve-usluge">
                    Usluge koje nudimo
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn rounded-lg text-gray-600 bg-white hover:bg-blue-100 hover:text-blue-600 w-full shadow-sm"
                    href="/kontakt">
                    Kontaktiraj nas
                  </Link>
                </div>
              </div>
              {/* Stats */}
              <div
                className="inline-flex items-center space-x-4 md:space-x-6"
                data-aos="fade-right"
                data-aos-delay="400">
                <div></div>
              </div>
            </div>
            {/* Image */}
            <div
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12 hidden md:block"
              data-aos="fade-left"
              data-aos-duration="1100">
              <Image
                src={HeroImage}
                className="md:max-w-none"
                width="584"
                height="659"
                priority
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
