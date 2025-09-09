import allImgPaths from "@/assets";
import { Button } from "@/common";
import Section from "@/common/Section";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <Section className="flex flex-col-reverse justify-between items-center px-4 w-full lg:flex-row lg:px-0">
      <span className="absolute blob right-72 opacity-45 !top-52 !left-10" />
      <div className="w-full text-center lg:w-2/5 lg:text-left lg:pr-5 pix-fade-up">
        <div className="hero">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-4  !leading-tight">
            Revolutionize
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#036] via-[#409ED0] to-[#36a6e2] italic">
              Knowledge Access
            </span>
          </h1>
          <p className="mb-8 text-2xl font-semibold text-gray-700 lg:text-3xl">
            <span className="italic">A cost effective and </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#036] via-[#409ED0] to-[#36a6e2]">
              focused solution <br />
              for seamless information flow
            </span>
          </p>
          <div className="w-full">
            <Button
              variant="primary"
              className="group"
              onClick={() =>
                // open new tab
                window.open(
                  `${process.env.NEXT_PUBLIC_APP_URL}/login`,
                  "_blank",
                )
              }
            >
              <div className="flex gap-x-3 items-center">
                {/* <span className="px-3 py-1 bg-white rounded-full text-primary-600">
                  FREE TRIAL
                </span> */}
                <span>Get Started</span>
                <Image
                  src={allImgPaths.rightIcon}
                  alt=""
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-40deg]"
                />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex gap-x-6 justify-center space-x-4 lg:justify-start">
          <div className="border-l-0 border-secondary-900 lg:!border-l-4 flex gap-x-2 items-center mt-12 flex-col lg:flex-row md:item-start">
            <div className="ml-2">
              <Image src={allImgPaths.user} alt="user" />
            </div>
            <div className="text-lg">
              <p>AthenaPro gets your staff the right information,</p>
              <p>at the right time, cost effectively.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-8 w-full lg:w-auto lg:mb-0 pix-fade-down">
        <div className="bg-spiral"></div>
        <Image
          src={allImgPaths.bannerImg}
          alt=""
          className="w-full max-w-md lg:max-w-[530px] xl:max-w-[650px] mx-auto relative z-[130]"
        />
      </div>
    </Section>
  );
};

export default HeroBanner;
