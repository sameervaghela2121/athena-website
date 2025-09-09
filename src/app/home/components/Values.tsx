import allImgPaths from "@/assets";
import Section from "@/common/Section";
import Image from "next/image";

const Values = () => {
  return (
    <Section>
      <div className="relative w-full" id="features">
        <span className="absolute blob h-96 w-96 -bottom-56 -left-24" />

        <div className="flex flex-col items-center">
          <h3 className=" mt-8 text-2xl md:text-[32px] text-primary-900 font-bold text-center">
            AI-Powered Knowledge,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#036] via-[#409ED0] to-[#36a6e2]">
              Tailored for Enterprise Excellence
            </span>
          </h3>
          <p className="mt-4 md:mt-8 text-sm md:text-base text-gray-700 text-center">
            Enhance productivity with intelligent knowledge sharing, secure
            access controls, and tailored solutions for enterprise-wide success.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 border rounded-3xl border-primary-400 gap-y-7 flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold text-secondary-900">
                    Scalable
                  </h3>
                  <p className="text-md font-medium">
                    Powerful to serve the needs of the biggest multi-nationals,
                    with built-in support for multi-lingual, multi-location, and
                    up to millions of users
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image src={allImgPaths.scalable} alt="Scalable" />
                </div>
              </div>
              <div className="p-8 border rounded-3xl border-primary-400 gap-y-7 flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold text-secondary-900">
                    Secure
                  </h3>
                  <p className="text-md font-medium">
                    Designed with enterprise-grade security from the ground up,
                    to ensure peace of mind with robust protections.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image src={allImgPaths.secure} alt="Secure" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative p-8 border rounded-3xl border-primary-400 gap-y-7 flex flex-col overflow-hidden">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold text-secondary-900">
                    Efficient
                  </h3>
                  <p className="text-md font-medium">
                    Streamlining knowledge access to save your people time and
                    improve customer experience
                  </p>
                </div>
                <div className="flex justify-center relative h-[285px]">
                  <div className="flex justify-start w-full h-full">
                    <Image
                      src={allImgPaths.userAvatarList}
                      alt="users"
                      className="h-fit"
                    />
                  </div>
                  <Image
                    src={allImgPaths.efficient}
                    alt="Efficient"
                    className="lg:absolute relative text-transparent w-full lg:scale-150   lg:-bottom-[150px] lg:left-[105px] left-0 bottom-0 scale-1"
                  />
                </div>
              </div>
              <div className="relative p-8 border rounded-3xl border-primary-400 gap-y-7 flex flex-col overflow-hidden">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold text-secondary-900">
                    User-Centric Design
                  </h3>
                  <p className="text-md font-medium">
                    Intuitive and seamless, enabling brand new workers to get
                    what they need, fast, without training
                  </p>
                </div>
                <div className="flex justify-center relative h-[285px]">
                  <div className="flex justify-start w-full h-full">
                    <Image
                      src={allImgPaths.userCentricDesignIcon}
                      alt="users"
                      className="h-fit"
                    />
                  </div>
                  <Image
                    src={allImgPaths.userCentricDesign}
                    alt="User-Centric Design"
                    className="lg:absolute relative text-transparent w-full lg:scale-150  lg:-bottom-[150px] lg:left-[105px] left-0 bottom-0 scale-1"
                  />
                </div>
              </div>
              <div className="p-8 border rounded-3xl border-primary-400 gap-y-7 flex flex-col">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold text-secondary-900">
                    Enterprise-Grade Innovation
                  </h3>
                  <p className="text-md font-medium">
                    Continuously advancing product to give you the best
                    technology
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={allImgPaths.AIBrain}
                    alt="scalable"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Values;
