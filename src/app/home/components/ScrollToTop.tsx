import allImgPaths from "@/assets";
import { Button } from "@/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ScrollToTopProps {
  threshold?: number;
}

const ScrollToTop = ({ threshold = 500 }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const isScrollingUp = useRef(false);
  const isPastThreshold = useRef(false);

  const handleScroll = () => {
    // Check if scrolling up or down
    const currentScrollY = window.scrollY;

    isScrollingUp.current = currentScrollY < lastScrollY.current;

    // Check if we're past the threshold
    isPastThreshold.current = currentScrollY > threshold;

    // Update visibility based on conditions
    if (isPastThreshold.current && isScrollingUp.current) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Update the last scroll position
    lastScrollY.current = currentScrollY;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        variant="secondary"
        className="rounded-full !p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.5] active:scale-x-[1.5] bg-primary-900 hover:bg-primary-800 text-primary-foreground hover:text-primary-foreground "
        aria-label="Scroll to top"
      >
        <Image src={allImgPaths.arrowUp} alt="arrowUp" width={20} height={20} />
      </Button>
    </div>
  );
};

export default ScrollToTop;
