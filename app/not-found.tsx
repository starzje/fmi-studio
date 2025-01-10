"use client";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-grow flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-6">Nismo mogli pronaći stranicu koju tražite.</p>
        <Link href="/" className="btn rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
          Povratak na početnu stranicu
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
