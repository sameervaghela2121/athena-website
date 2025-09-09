import allImgPaths from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pb-8 mt-20 text-center select-none footer">
      <div className="container px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="border-t border-gray-200"></div>

        {/* Unified Responsive Layout */}
        <div className="flex flex-col mt-8 space-y-8 md:flex-row md:justify-between md:items-start md:space-y-0 md:mt-12 lg:mt-16">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-center space-y-4 md:items-start md:flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={allImgPaths.logo}
                alt="athenapro.ai"
                className="w-32 sm:w-36 lg:w-44"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          {/* <div className="flex flex-wrap gap-y-2 gap-x-6 justify-center items-center md:justify-start md:gap-x-8 lg:gap-x-10">
            <Link
              href="#features"
              className="text-sm transition-colors text-primary-900 hover:underline sm:text-base"
            >
              Features
            </Link>
            <Link
              href="/#contact"
              className="text-sm transition-colors text-primary-900 hover:underline sm:text-base"
            >
              Contact Us
            </Link>
          </div> */}

          {/* Legal Links */}
          <div className="flex flex-wrap gap-y-2 gap-x-4 justify-center md:justify-end">
            <Link
              href="/terms-and-conditions"
              className="text-xs transition-colors sm:text-sm text-primary-600 hover:text-primary-800 hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs transition-colors sm:text-sm text-primary-600 hover:text-primary-800 hover:underline"
            >
              Privacy Policy
            </Link>
            <p className="text-sm text-[#0A142F] text-center md:text-left">
              &copy; {new Date().getFullYear()} AthenaPro.ai. All Rights
              Reserved.
            </p>
          </div>
        </div>

        {/* System Capacity Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Our system is designed to have no effective limit on the number of
            users. However, if you do need over 10,000 users, please work with
            our sales team to ensure we provision our system for your needs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
