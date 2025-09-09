"use client";

import React from "react";
import Header from "../home/components/Header";
import allImgPaths from "../../assets/index";
import Image from "next/image";
import Footer from "../home/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}

      <Header />

      {/* Hero Header with Gradient */}
      <div className="bg-gradient-to-r from-primary-900 via-[#199ab1] to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              How Athena Pricing Works
            </h1>
            {/* <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Designed for frontline workers and businesses with multiple
              locations
            </p> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Built For Frontline Workers */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6 sm:mb-8">
            Built For Frontline Workers
          </h2>
          <p className="text-base sm:text-lg text-primary-900 mb-6 sm:mb-8 max-w-4xl">
            Our product is designed for frontline workers. It has special
            features for businesses with multiple locations, typically in
            industries like food service, hospitality, and retail.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="78" height="78" rx="39" fill="#D9F0F9" />
                  <mask
                    id="mask0_7830_30816"
                    maskUnits="userSpaceOnUse"
                    x="24"
                    y="24"
                    width="30"
                    height="30"
                  >
                    <rect x="24" y="24" width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_7830_30816)">
                    <path
                      d="M39.075 49.5L43.35 45.2625L39.075 41.025L37.5 42.6L39.1125 44.2125C38.4125 44.2375 37.7313 44.125 37.0688 43.875C36.4063 43.625 35.8125 43.2375 35.2875 42.7125C34.7875 42.2125 34.4062 41.6375 34.1438 40.9875C33.8813 40.3375 33.75 39.6875 33.75 39.0375C33.75 38.6125 33.8063 38.1875 33.9188 37.7625C34.0312 37.3375 34.1875 36.925 34.3875 36.525L32.7375 34.875C32.3125 35.5 32 36.1625 31.8 36.8625C31.6 37.5625 31.5 38.275 31.5 39C31.5 39.95 31.6875 40.8875 32.0625 41.8125C32.4375 42.7375 32.9875 43.5625 33.7125 44.2875C34.4375 45.0125 35.25 45.5562 36.15 45.9188C37.05 46.2812 37.975 46.475 38.925 46.5L37.5 47.925L39.075 49.5ZM45.2625 43.125C45.6875 42.5 46 41.8375 46.2 41.1375C46.4 40.4375 46.5 39.725 46.5 39C46.5 38.05 46.3188 37.1063 45.9562 36.1688C45.5938 35.2313 45.05 34.4 44.325 33.675C43.6 32.95 42.7812 32.4125 41.8688 32.0625C40.9563 31.7125 40.025 31.5375 39.075 31.5375L40.5 30.075L38.925 28.5L34.65 32.7375L38.925 36.975L40.5 35.4L38.85 33.75C39.525 33.75 40.2125 33.8813 40.9125 34.1438C41.6125 34.4062 42.2125 34.7875 42.7125 35.2875C43.2125 35.7875 43.5938 36.3625 43.8563 37.0125C44.1187 37.6625 44.25 38.3125 44.25 38.9625C44.25 39.3875 44.1938 39.8125 44.0812 40.2375C43.9688 40.6625 43.8125 41.075 43.6125 41.475L45.2625 43.125ZM39 54C36.925 54 34.975 53.6062 33.15 52.8187C31.325 52.0312 29.7375 50.9625 28.3875 49.6125C27.0375 48.2625 25.9688 46.675 25.1813 44.85C24.3937 43.025 24 41.075 24 39C24 36.925 24.3937 34.975 25.1813 33.15C25.9688 31.325 27.0375 29.7375 28.3875 28.3875C29.7375 27.0375 31.325 25.9688 33.15 25.1813C34.975 24.3937 36.925 24 39 24C41.075 24 43.025 24.3937 44.85 25.1813C46.675 25.9688 48.2625 27.0375 49.6125 28.3875C50.9625 29.7375 52.0312 31.325 52.8187 33.15C53.6062 34.975 54 36.925 54 39C54 41.075 53.6062 43.025 52.8187 44.85C52.0312 46.675 50.9625 48.2625 49.6125 49.6125C48.2625 50.9625 46.675 52.0312 44.85 52.8187C43.025 53.6062 41.075 54 39 54ZM39 51C42.35 51 45.1875 49.8375 47.5125 47.5125C49.8375 45.1875 51 42.35 51 39C51 35.65 49.8375 32.8125 47.5125 30.4875C45.1875 28.1625 42.35 27 39 27C35.65 27 32.8125 28.1625 30.4875 30.4875C28.1625 32.8125 27 35.65 27 39C27 42.35 28.1625 45.1875 30.4875 47.5125C32.8125 49.8375 35.65 51 39 51Z"
                      fill="#003366"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-primary-900 mb-2">
                High Turnover
              </h3>
              <p className="text-xs sm:text-sm text-primary-600">
                Frequent staff changes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="78" height="78" rx="39" fill="#D9F0F9" />
                  <mask
                    id="mask0_7830_30825"
                    maskUnits="userSpaceOnUse"
                    x="24"
                    y="24"
                    width="30"
                    height="30"
                  >
                    <rect x="24" y="24" width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_7830_30825)">
                    <path
                      d="M34 49H44V45.25C44 43.875 43.5104 42.6979 42.5312 41.7188C41.5521 40.7396 40.375 40.25 39 40.25C37.625 40.25 36.4479 40.7396 35.4688 41.7188C34.4896 42.6979 34 43.875 34 45.25V49ZM29 51.5V49H31.5V45.25C31.5 43.9792 31.7969 42.7865 32.3906 41.6719C32.9844 40.5573 33.8125 39.6667 34.875 39C33.8125 38.3333 32.9844 37.4427 32.3906 36.3281C31.7969 35.2135 31.5 34.0208 31.5 32.75V29H29V26.5H49V29H46.5V32.75C46.5 34.0208 46.2031 35.2135 45.6094 36.3281C45.0156 37.4427 44.1875 38.3333 43.125 39C44.1875 39.6667 45.0156 40.5573 45.6094 41.6719C46.2031 42.7865 46.5 43.9792 46.5 45.25V49H49V51.5H29Z"
                      fill="#003366"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-primary-900 mb-2">
                Part Time Worker
              </h3>
              <p className="text-xs sm:text-sm text-primary-600">
                Flexible scheduling needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="78" height="78" rx="39" fill="#D9F0F9" />
                  <mask
                    id="mask0_7830_30834"
                    maskUnits="userSpaceOnUse"
                    x="24"
                    y="24"
                    width="30"
                    height="30"
                  >
                    <rect x="24" y="24" width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_7830_30834)">
                    <path
                      d="M46.5 52.75V49H42.75V46.5H46.5V42.75H49V46.5H52.75V49H49V52.75H46.5ZM26.5 49V41.5H25.25V39L26.5 32.75H45.25L46.5 39V41.5H45.25V45.25H42.75V41.5H37.75V49H26.5ZM29 46.5H35.25V41.5H29V46.5ZM26.5 31.5V29H45.25V31.5H26.5ZM27.8125 39H43.9375L43.1875 35.25H28.5625L27.8125 39Z"
                      fill="#003366"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-primary-900 mb-2">
                Franchising
              </h3>
              <p className="text-xs sm:text-sm text-primary-600">
                Multiple locations
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-primary-600 max-w-4xl">
            These settings have critical needs that our product's features and
            pricing are designed to address.
          </p>
        </section>

        {/* Usage-Based Pricing vs Per-User Pricing */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6 sm:mb-8">
            Usage-Based Pricing, Not Per-User
          </h2>
          <p className="text-base sm:text-lg text-primary-600 mb-6 sm:mb-8 max-w-4xl">
            We don't charge based on the number of users, only on usage. Our
            cost to serve you scales with the value your teams are getting from
            the product, and we charge accordingly.
          </p>

          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="bg-[#C74D4D80]-50 border border-red-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#9B1C1C] mb-3 sm:mb-4">
                  Other Companies
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-[#9B1C1C] text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Per-named-user pricing
                  </div>
                  <div className="flex items-center text-[#9B1C1C] text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    $20–$50 per user per month
                  </div>
                  <div className="flex items-center text-[#9B1C1C] text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Expensive for part-time workers
                  </div>
                </div>
              </div>

              <div className="bg-[#52B95E]-50 border border-green-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-700 mb-3 sm:mb-4">
                  AthenaPro
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-primary-600 text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                      fill="#109110"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Shared pool of queries
                  </div>
                  <div className="flex items-center text-primary-600 text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                      fill="#109110"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    $2 per FTE per month
                  </div>
                  <div className="flex items-center text-primary-600 text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0"
                      fill="#109110"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Perfect for part-time workers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-primary-600 flex-shrink-0 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-5 sm:h-5"
                >
                  <path
                    d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                    fill="#4DA3C7"
                  />
                </svg>
              </span>
              <p className="text-sm sm:text-base lg:text-lg text-primary-900 max-w-4xl">
                This is much less expensive for you, and far better for
                accommodating your part-time workers.
              </p>
            </div>
          </div>
        </section>

        {/* Real Example Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6 sm:mb-8">
            Real Example: How It Works
          </h2>
          <p className="text-base sm:text-lg text-primary-600 mb-6 sm:mb-8 max-w-4xl">
            We don't charge based on the number of users, only on usage. Our
            cost to serve you scales with the value your teams are getting from
            the product, and we charge accordingly.
          </p>
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
            {/* Usage Pattern Card */}
            <div className="bg-gradient-to-r from-[#3DA4F8] to-[#96D2FF] border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">
                    Usage Pattern
                  </h3>
                  <p className="text-sm sm:text-base text-white">
                    We see usage of about 200 queries per month per full time
                    user equivalent.
                  </p>
                </div>
                <div className="flex-shrink-0 self-center sm:self-auto">
                  <Image
                    src={allImgPaths.usagePattern}
                    alt=""
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-40deg]"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="border border-[#EBEBEB] p-4 sm:p-6 rounded-xl">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Your Team
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 border-b-[1px] border-l-none border-t-none border-r-none rounded">
                    <span className="text-sm sm:text-base text-gray-700">
                      8 full-time workers
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      8 FTE
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 border-b-[1px] border-l-none border-t-none border-r-none rounded">
                    <span className="text-sm sm:text-base text-gray-700">
                      2 half-time workers
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      1 FTE
                    </span>
                  </div>
                  <div className="p-2 sm:p-3 bg-[#F3FCFF] rounded">
                    <div className="flex items-center justify-between font-semibold">
                      <span className="text-sm sm:text-base text-secondary-900 font-bold">
                        TOTAL FTE
                      </span>
                      <span className="text-sm sm:text-base text-secondary-900 font-bold">
                        9 FTE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#EBEBEB] p-4 sm:p-6 rounded-xl">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Monthly Cost
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 border-b-[1px] border-l-none border-t-none border-r-none rounded">
                    <span className="text-sm sm:text-base text-gray-700">
                      Estimated queries needed
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      1800 Queries
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 border-b-[1px] border-l-none border-t-none border-r-none rounded">
                    <span className="text-sm sm:text-base text-gray-700">
                      Recommended Plan
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      2000 Queries
                    </span>
                  </div>
                  <div className="bg-[#EBFFF0] border border-green-200 rounded p-2 sm:p-3">
                    <div className="flex items-center justify-between font-semibold text-base sm:text-lg">
                      <span className="text-[#179F36]">Monthly Cost:</span>
                      <span className="text-[#179F36]">$20/Month</span>
                    </div>
                    <p className="text-xs sm:text-sm italic tracking-wide text-gray-600 mt-1">
                      That's $2.22 per FTE per Month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-primary-600 mb-6 sm:mb-8 w-full">
            See if Athena Pro is perfect for your business too.
          </p>

          <div>
            <div className="p-4 sm:p-6 bg-white rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-8 lg:justify-between">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3 sm:mb-4">
                  Test Out Our Free Trial
                </h3>
                <p className="text-sm sm:text-base text-primary-600 mb-6 sm:mb-8">
                  Start with our 2-month free trial to understand your usage
                  patterns before committing to a paid plan.
                </p>
                <a
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
                  className="bg-primary-900 hover:bg-primary-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
                >
                  Try Athena for Free
                </a>
              </div>

              <div className="flex-shrink-0 w-full sm:w-auto sm:max-w-xs lg:max-w-sm">
                <div className="flex flex-col border rounded-2xl">
                  <div className="bg-gradient-to-r from-[#3DA4F8] to-[#96D2FF] p-3 sm:p-4 rounded-t-2xl">
                    <span className="text-xl sm:text-2xl font-bold text-white block">
                      2 Months
                    </span>
                    <p className="text-xs sm:text-sm text-white font-bold italic">
                      Free Trial
                    </p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-b-2xl">
                    <span className="text-xl sm:text-2xl font-bold text-primary-600 block">
                      $0
                    </span>
                    <p className="text-xs sm:text-sm text-primary-600 font-bold italic">
                      No Commitment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HowItWorks;
