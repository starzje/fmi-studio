import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@/public/images/fmi-logo.svg";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname(); // Get the current route pathname

  // Helper function to check if a link is active
  const isActive = (href: string) => pathname === href;
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Top area */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6">
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="inline-flex group mb-8 sm:mb-0" href="/" aria-label="FMI">
                <Image src={logo} alt="FMI" width={32} height={32} />
              </Link>
            </div>
            <form className="w-full max-w-sm">
              <div className="flex flex-col sm:flex-row justify-end max-w-xs mx-auto sm:max-w-none">
                <button
                  className="btn-sm rounded-xl text-white bg-blue-500 hover:bg-blue-600 shadow-sm whitespace-nowrap"
                  type="submit">
                  Kontaktiraj nas
                </button>
              </div>
              {/* Success message */}
              {/* <p class="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>
          </div>
          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6">
            {/* Social links */}
            <ul className="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <li>
                <a
                  className="flex p-2 justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex p-2 justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </li>
            </ul>
            {/* Left links */}
            <div className="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
              <ul className="flex grow flex-wrap md:gap-0 gap-4 items-center justify-center md:justify-end  text-sm lg:gap-8">
                <li className=" py-1">
                  <Link
                    href="/"
                    className={`flex items-center transition ${
                      isActive("/") ? "text-blue-500 font-medium" : "font-light text-gray-700 hover:text-blue-500"
                    }`}>
                    Početna
                  </Link>
                </li>
                <li className=" py-1">
                  <Link
                    href="/customers"
                    className={`flex items-center transition ${
                      isActive("/customers")
                        ? "text-blue-500 font-medium"
                        : "font-light text-gray-700 hover:text-blue-500"
                    }`}>
                    Proizvodi i usluge
                  </Link>
                </li>
                <li className=" py-1">
                  <Link
                    href="/blog"
                    className={`flex items-center transition ${
                      isActive("/blog") ? "text-blue-500 font-medium" : "font-light text-gray-700 hover:text-blue-500"
                    }`}>
                    O nama
                  </Link>
                </li>
                <li className=" py-1">
                  <Link
                    href="/documentation"
                    className={`flex items-center transition ${
                      isActive("/documentation")
                        ? "text-blue-500  font-medium"
                        : "font-light text-gray-700 hover:text-blue-500"
                    }`}>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom notes */}
          <div className="text-xs text-gray-400 text-center md:text-left">F.M.I. d.o.o.</div>
          <div className="text-xs text-gray-400 text-center md:text-left">OIB: 04095595789</div>
          <div className="text-xs text-gray-400 text-center md:text-left">Kralja Tomislava 41, 53000 Gospić</div>
          <div className="text-xs text-gray-400 text-center pt-4 ">© 2025 studio F.M.I. Sva prava pridržana</div>
        </div>
      </div>
    </footer>
  );
}
