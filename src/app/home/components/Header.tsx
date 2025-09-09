"use client";

import allImgPaths from "@/assets";
import { Button } from "@/common";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove the class on the <body> element based on state
    if (isOpenMenu) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }

    // Cleanup to ensure no leftover classes
    return () => {
      document.body.classList.remove("open-menu");
    };
  }, [isOpenMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-[999] bg-transparent backdrop-blur-md transition-shadow duration-300 ${
          isScrolled
            ? "bg-white/80 nav-fixed shadow-[0px_10px_20px_0px_rgba(79,35,35,0.08)]"
            : ""
        }`}
      >
        <div className="flex flex-wrap justify-between items-center p-4 mx-auto lg:container sm:px-6 lg:px-8 lg:py-4">
          <div className="flex items-center">
            <Link href="/" className="no-underline">
              <Image
                src={allImgPaths.logo}
                alt="Logo"
                className="w-36 lg:w-52"
              />
            </Link>
          </div>
          <button
            className={`site-nav-burger ${isOpenMenu ? "open" : ""}`}
            onClick={() => setIsOpenMenu((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* hide the section below 1024 screen */}
          <div className="hidden gap-x-6 items-center lg:flex">
            <Link
              className="font-semibold text-primary-900 hover:underline"
              href={"#features"}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="font-semibold text-primary-900 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="/#contact"
              className="font-semibold text-primary-900 hover:underline"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex gap-x-2 items-center">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-900"
            >
              <Button variant="primary" className="hidden lg:block">
                Login
              </Button>
            </Link>
          </div>

          <nav className="site-nav-main">
            <div className="rounded-2xl border border-gray-100 shadow-xl backdrop-blur-md site-nav-main__wrapper bg-white/95">
              <div className="">
                {/* Navigation Links */}
                <div className="mb-8 space-y-1">
                  <Link
                    href="#features"
                    onClick={() => setIsOpenMenu(false)}
                    className="flex justify-between items-center px-4 py-3 w-full text-lg font-medium text-gray-900 rounded-xl transition-all duration-200 hover:text-primary-600 hover:bg-gray-50 group"
                  >
                    <span>Features</span>
                    <svg
                      className="w-5 h-5 text-gray-400 transition-colors group-hover:text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="#pricing"
                    onClick={() => setIsOpenMenu(false)}
                    className="flex justify-between items-center px-4 py-3 w-full text-lg font-medium text-gray-900 rounded-xl transition-all duration-200 hover:text-primary-600 hover:bg-gray-50 group"
                  >
                    <span>Pricing</span>
                    <svg
                      className="w-5 h-5 text-gray-400 transition-colors group-hover:text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/#contact"
                    onClick={() => setIsOpenMenu(false)}
                    className="flex justify-between items-center px-4 py-3 w-full text-lg font-medium text-gray-900 rounded-xl transition-all duration-200 hover:text-primary-600 hover:bg-gray-50 group"
                  >
                    <span>Contact Us</span>
                    <svg
                      className="w-5 h-5 text-gray-400 transition-colors group-hover:text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Divider */}
                <div className="mb-6 border-t border-gray-200"></div>

                {/* Login Button */}
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpenMenu(false)}
                  className="block w-full"
                >
                  <button
                    type="button"
                    className="flex justify-center items-center px-6 py-3 w-full font-semibold text-white rounded-xl shadow-md transition-all duration-200 bg-primary-600 hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <span>Login</span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
