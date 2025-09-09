"use client";

import allImgPaths from "@/assets";
import Section from "@/common/Section";
// import useHoverPosition from "@/hooks/mouseMove";
import Image from "next/image";
import { useRef } from "react";

const Vision = () => {
  const divRef = useRef(null);

  // const position = useHoverPosition(divRef);

  return (
    <Section>
      <div className="w-full relative rounded-[32px] overflow-hidden bg-primary-900">
        <Image
          src={allImgPaths.visionSectionBgImage}
          alt="visionSectionBgImage"
          layout="fill"
          objectFit="cover"
          className="absolute left-0 top-0 h-full w-full opacity-0 lg:opacity-100"
        />
        <span className="absolute blob right-72 opacity-45 !top-52" />
        <div
          ref={divRef}
          className="vision relative gap-8 item-start rounded-[32px] overflow-hidden"
        >
          <div className="col-span-2 py-16 px-8 flex flex-col gap-y-8 lg:gap-y-14 relative z-50">
            <div className="flex flex-col md:items-start items-center">
              <h2 className="text-2xl md:text-3xl  font-bold text-white mb-4 text-center lg:text-left">
                Where we are different
              </h2>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 min-h-60">
              <div className="flex gap-x-4">
                <div className="shrink-0 p-2 max-h-max">
                  <Image src={allImgPaths.file} alt="file" />
                </div>
                <div>
                  <p className="text-white text-base">
                    <span className="font-extrabold">
                      You can publish information to key sets of folks{" "}
                    </span>
                    - by facility, by country, by role, or however you manage
                    your business.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="shrink-0 p-2 max-h-max">
                  <Image src={allImgPaths.user2} alt="user2" />
                </div>
                <div>
                  <p className="text-white text-base">
                    If ever critical information is not present,{" "}
                    <span className="font-extrabold">
                      we route the inquiry to the right people
                    </span>
                    , improving answers for all
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="shrink-0 p-2 max-h-max">
                  <Image src={allImgPaths.littleBrain} alt="littleBrain" />
                </div>
                <div>
                  <p className="text-white text-base">
                    Unlike older solutions based on keyword search,{" "}
                    <span className="font-extrabold">
                      AthenaPro is AI powered to give precise answers, instantly
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Vision;
