"use client";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Pricing from "./components/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import Values from "./components/Values";
import Vision from "./components/Vision";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Vision />
        <Values />
        <Pricing />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default index;
