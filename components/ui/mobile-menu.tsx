"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get the current route pathname

  // Helper function to check if a link is active
  const isActive = (href: string) => pathname === href;
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node))
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center bg-transparent text-center text-gray-800 transition ${
          mobileNavOpen && "active"
        }`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}>
        <span className="sr-only">Menu</span>
        <svg
          className="pointer-events-none fill-current"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:translate-x-0"
            y="7"
            width="9"
            height="2"
            rx="1"></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-expanded=true]]:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:translate-y-0"
            y="7"
            width="9"
            height="2"
            rx="1"></rect>
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 w-full rounded-xl bg-white shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out duration-200 data-[enter]:data-[closed]:-translate-y-2 data-[closed]:opacity-0">
          <ul className="p-2 text-sm">
            <li>
              <Link
                href="/"
                className={`flex rounded-lg px-2 py-1.5 hover:bg-gray-100 ${
                  isActive("/") ? "text-blue-500 font-medium" : "font-light text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setMobileNavOpen(false)}>
                Početna
              </Link>
            </li>
            <li>
              <Link
                href="/proizvodi-i-usluge"
                className={`flex rounded-lg px-2 py-1.5 hover:bg-gray-100 ${
                  isActive("/proizvodi-i-usluge")
                    ? "text-blue-500 font-medium"
                    : "font-light text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setMobileNavOpen(false)}>
                Proizvodi i usluge
              </Link>
            </li>
            <li>
              <Link
                href="/o-nama"
                className={`flex rounded-lg px-2 py-1.5 hover:bg-gray-100 ${
                  isActive("/o-nama") ? "text-blue-500 font-medium" : "font-light text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setMobileNavOpen(false)}>
                O nama
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={`flex rounded-lg px-2 py-1.5 hover:bg-gray-100 ${
                  isActive("/kontakt") ? "text-blue-500 font-medium" : "font-light text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setMobileNavOpen(false)}>
                Kontakt
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
