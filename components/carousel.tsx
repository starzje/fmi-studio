"use client";

import { useEffect } from "react";
import Image from "next/image";
import Carousel01 from "@/public/images/carousel-01.jpg";
import Carousel02 from "@/public/images/carousel-02.jpg";
import Carousel03 from "@/public/images/carousel-03.jpg";
import Carousel04 from "@/public/images/carousel-04.jpg";
import Carousel05 from "@/public/images/carousel-05.jpg";
import Carousel06 from "@/public/images/carousel-06.jpg";
import Carousel07 from "@/public/images/carousel-07.jpg";
import Carousel08 from "@/public/images/carousel-08.jpg";
import Avatar01 from "@/public/images/carousel-avatar-01.jpg";
import Avatar02 from "@/public/images/carousel-avatar-02.jpg";
import Avatar03 from "@/public/images/carousel-avatar-03.jpg";
import Avatar04 from "@/public/images/carousel-avatar-04.jpg";
import Avatar05 from "@/public/images/carousel-avatar-05.jpg";
import Avatar06 from "@/public/images/carousel-avatar-06.jpg";
import Avatar07 from "@/public/images/carousel-avatar-07.jpg";
import Avatar08 from "@/public/images/carousel-avatar-08.jpg";
import Avatar09 from "@/public/images/carousel-avatar-09.jpg";
import Avatar10 from "@/public/images/carousel-avatar-10.jpg";
import Avatar11 from "@/public/images/carousel-avatar-11.jpg";
import Avatar12 from "@/public/images/carousel-avatar-12.jpg";
import Avatar13 from "@/public/images/carousel-avatar-13.jpg";
import Avatar14 from "@/public/images/carousel-avatar-14.jpg";
import Avatar15 from "@/public/images/carousel-avatar-15.jpg";
import Avatar16 from "@/public/images/carousel-avatar-16.jpg";
import Avatar17 from "@/public/images/carousel-avatar-17.jpg";
import Avatar18 from "@/public/images/carousel-avatar-18.jpg";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import Link from "next/link";
Swiper.use([Navigation]);

export default function Carousel() {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      autoplay: true,
      loop: true,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">Izdvojeno iz ponude</h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover rounded-t-lg"
                  src={Carousel01}
                  width={259}
                  height={148}
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow rounded-b-lg bg-white px-4 pb-6">
                  {/* Title */}
                  <Link
                    className="inline-block font-cabinet-grotesk mt-4 font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="/proizvodi-i-usluge?category=tiskani-materijali">
                    Brošure i katalozi
                  </Link>
                  <div>
                    <Link
                      className="btn-sm rounded-lg mt-6 text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                      href="/kontakt">
                      Pošalji upit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover rounded-t-lg"
                  src={Carousel01}
                  width={259}
                  height={148}
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow rounded-b-lg bg-white px-4 pb-6">
                  {/* Title */}
                  <Link
                    className="inline-block font-cabinet-grotesk mt-4 font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="/proizvodi-i-usluge?category=tiskani-materijali">
                    Vizitke
                  </Link>
                  <div>
                    <Link
                      className="btn-sm rounded-lg mt-6 text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                      href="/kontakt">
                      Pošalji upit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover rounded-t-lg"
                  src={Carousel01}
                  width={259}
                  height={148}
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow rounded-b-lg bg-white px-4 pb-6">
                  {/* Title */}
                  <Link
                    className="inline-block font-cabinet-grotesk mt-4 font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="/proizvodi-i-usluge?category=promotivni-materijali">
                    Upaljači + tisak
                  </Link>
                  <div>
                    <Link
                      className="btn-sm rounded-lg mt-6 text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                      href="/kontakt">
                      Pošalji upit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover rounded-t-lg"
                  src={Carousel01}
                  width={259}
                  height={148}
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow rounded-b-lg bg-white px-4 pb-6">
                  {/* Title */}
                  <Link
                    className="inline-block font-cabinet-grotesk mt-4 font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="/proizvodi-i-usluge?category=naljepnice-i-grafika">
                    Naljepnice za proizvode
                  </Link>
                  <div>
                    <Link
                      className="btn-sm rounded-lg mt-6 text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                      href="/kontakt">
                      Pošalji upit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover rounded-t-lg"
                  src={Carousel01}
                  width={259}
                  height={148}
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow rounded-b-lg bg-white px-4 pb-6">
                  {/* Title */}
                  <Link
                    className="inline-block font-cabinet-grotesk mt-4 font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="/proizvodi-i-usluge?category=promotivni-materijali">
                    Rokovnici + tisak
                  </Link>
                  <div>
                    <Link
                      className="btn-sm rounded-lg mt-6 text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                      href="/kontakt">
                      Pošalji upit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover rounded-t-lg"
                  src={Carousel01}
                  width={259}
                  height={148}
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow rounded-b-lg bg-white px-4 pb-6">
                  {/* Title */}
                  <Link
                    className="inline-block font-cabinet-grotesk mt-4 font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="/proizvodi-i-usluge?category=promotivni-materijali">
                    Majice s tiskom
                  </Link>
                  <div>
                    <Link
                      className="btn-sm rounded-lg mt-6 text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                      href="/kontakt">
                      Pošalji upit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
