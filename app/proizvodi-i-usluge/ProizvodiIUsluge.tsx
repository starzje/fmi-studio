"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ShopCards01 from "./shop-cards-01";
import ShopCards02 from "./shop-cards-02";
import ShopCards03 from "./shop-cards-03";
import ShopCards04 from "./shop-cards-04";

// Fallback UI while loading search params
function Fallback() {
  return <div className="text-sm text-gray-600">Učitavanje...</div>;
}

function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category") || "sve-usluge";

  // Define categories and components
  const categories = [
    { id: "sve-usluge", label: "Sve Usluge" },
    { id: "promotivni-materijali", label: "Promotivni Materijali" },
    { id: "tiskani-materijali", label: "Tiskani Materijali" },
    { id: "reklamne-povrsine", label: "Reklamne Površine i Oprema" },
    { id: "naljepnice-i-grafika", label: "Naljepnice i Grafika" },
  ];

  // Handle filter click
  const handleFilterClick = (id: string) => {
    router.push(`?category=${id}`);
  };

  // Render components based on the category
  const renderCards = () => {
    switch (category) {
      case "promotivni-materijali":
        return (
          <div className="mt-8">
            <h2 className="text-xl  text-gray-800  font-bold mb-5">Promotivni Materijali</h2>
            <div className="grid grid-cols-12 gap-6">
              <ShopCards01 />
            </div>
          </div>
        );
      case "tiskani-materijali":
        return (
          <div className="mt-8">
            <h2 className="text-xl  text-gray-800  font-bold mb-5">Tiskani Materijali</h2>
            <div className="grid grid-cols-12 gap-6">
              <ShopCards02 />
            </div>
          </div>
        );
      case "reklamne-povrsine":
        return (
          <div className="mt-8">
            <h2 className="text-xl  text-gray-800  font-bold mb-5">Reklamne Površine i Oprema</h2>
            <div className="grid grid-cols-12 gap-6">
              <ShopCards03 />
            </div>
          </div>
        );
      case "naljepnice-i-grafika":
        return (
          <div className="mt-8">
            <h2 className="text-xl  text-gray-800  font-bold mb-5">Naljepnice i Grafika</h2>
            <div className="grid grid-cols-12 gap-6">
              <ShopCards04 />
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="mt-8">
              <h2 className="text-xl  text-gray-800  font-bold mb-5">Promotivni Materijali</h2>
              <div className="grid grid-cols-12 gap-6">
                <ShopCards01 />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl  text-gray-800  font-bold mb-5">Tiskani Materijali</h2>
              <div className="grid grid-cols-12 gap-6">
                <ShopCards02 />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl  text-gray-800  font-bold mb-5">Reklamne Površine i Oprema</h2>
              <div className="grid grid-cols-12 gap-6">
                <ShopCards03 />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl  text-gray-800  font-bold mb-5">Naljepnice i Grafika</h2>
              <div className="grid grid-cols-12 gap-6">
                <ShopCards04 />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="mt-28 max-w-6xl mx-auto px-6 sm:px-6 mb-24 ">
      {/* Page header */}
      <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-sm">
        <div className="mb-5 ">
          {/* Title */}
          <h1 data-aos="fade-right" data-aos-delay="100" className="text-2xl md:text-3xl text-gray-800  font-bold">
            Proizvodi i usluge
          </h1>
        </div>
        {/* Filters */}
        <div data-aos="fade-right" data-aos-delay="200" className=" ">
          <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
            {categories.map(({ id, label }) => (
              <li
                key={id}
                className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <button
                  className={`${
                    category === id ? "text-blue-500 " : "text-gray-500 hover:text-gray-600"
                  } whitespace-nowrap font-medium`}
                  onClick={() => handleFilterClick(id)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Page content */}
      <div className="px-4">{renderCards()}</div>
    </div>
  );
}

export default function ProizvodiIUslugePage() {
  return (
    <Suspense fallback={<Fallback />}>
      <SearchParamsHandler />
    </Suspense>
  );
}
