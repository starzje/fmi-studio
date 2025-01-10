import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // Get the current route pathname

  // Helper function to check if a link is active
  const isActive = (href: string) => pathname === href;
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap  items-center justify-end gap-2 text-sm lg:gap-8">
              <li className="px-1 py-1">
                <Link
                  href="/"
                  className={`flex items-center transition ${
                    isActive("/") ? "text-blue-500 font-medium" : "font-light text-gray-500 hover:text-gray-700"
                  }`}>
                  Početna
                </Link>
              </li>
              <li className="px-1 py-1">
                <Link
                  href="/proizvodi-i-usluge?category=sve-usluge"
                  className={`flex items-center transition ${
                    isActive("/proizvodi-i-usluge")
                      ? "text-blue-500 font-medium"
                      : "font-light text-gray-500 hover:text-gray-700"
                  }`}>
                  Proizvodi i usluge
                </Link>
              </li>
              <li className="px-1 py-1">
                <Link
                  href="/o-nama"
                  className={`flex items-center transition ${
                    isActive("/o-nama") ? "text-blue-500 font-medium" : "font-light text-gray-500 hover:text-gray-700"
                  }`}>
                  O nama
                </Link>
              </li>
              <li className="px-1 py-1">
                <Link
                  href="/kontakt"
                  className={`flex items-center transition ${
                    isActive("/kontakt") ? "text-blue-500  font-medium" : "font-light text-gray-500 hover:text-gray-700"
                  }`}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
