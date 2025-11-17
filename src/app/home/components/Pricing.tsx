"use client";

import { Button, Select } from "@/common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

// Helper function to format numbers with commas
const formatNumber = (num: number) => {
  if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
};

// Type definitions
interface Plan {
  id: string;
  name: string;
  subscription_amount: number;
  is_default: boolean;
  priority: number;
  features: {
    chat_limit: number;
    [key: string]: any;
  };
}

interface PlanOption {
  value: string;
  label: React.ReactNode;
  price: number;
  is_default: boolean;
  chat_limit: number;
}

interface PerUserPricing {
  cost_per_user_per_month: number;
  unit: string;
}

const Pricing = () => {
  const router = useRouter();

  // State for API data
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedQueryOption, setSelectedQueryOption] =
    useState<PlanOption | null>(null);
  const [isPerUserPricingLoading, setIsPerUserPricingLoading] =
    useState<boolean>(false);
  const [perUserPricing, setPerUserPricing] = useState<PerUserPricing>({
    cost_per_user_per_month: 0,
    unit: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  console.info("selectedQueryOption =>", selectedQueryOption);

  // API functions
  const fetchTiers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_APP_URL + "/users/v1.0/tiers",
      );

      if (!response.ok) {
        throw new Error(`Error fetching tiers: ${response.status}`);
      }

      const data = await response.json();
      const result = data?.data?.result || [];

      const sortedPlans = result.sort((a: Plan, b: Plan) => {
        // Convert boolean to number for sorting
        return (
          Number(b.is_default) - Number(a.is_default) || a.priority - b.priority
        );
      });

      console.info("sortedPlans =>", sortedPlans);

      setPlans(sortedPlans);
      return sortedPlans;
    } catch (error) {
      console.error("fetchTiers Error:", error);
      setError("Failed to load plans. Please try again later.");
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPerUserPricing = async () => {
    try {
      setIsPerUserPricingLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_APP_URL + "/users/v1.0/tiers/per-user-pricing",
      );

      if (!response.ok) {
        throw new Error(`Error fetching per-user pricing: ${response.status}`);
      }

      const data = await response.json();
      const result = data?.data?.result || {
        cost_per_user_per_month: 0,
        unit: "$",
      };
      setPerUserPricing(result);
      return result;
    } catch (error) {
      console.error("fetchPerUserPricing Error:", error);
      return { cost_per_user_per_month: 0, unit: "$" };
    } finally {
      setIsPerUserPricingLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchTiers();
    fetchPerUserPricing();
  }, []);

  // Set default plan when plans are loaded
  useEffect(() => {
    if (plans.length > 0) {
      // Find default plan
      const defaultPlan = plans.find((plan) => plan.is_default);

      if (defaultPlan) {
        setSelectedQueryOption({
          value: defaultPlan.id,
          label: (
            <div className="flex justify-between items-center w-full">
              <p>{defaultPlan.name}</p>
              {defaultPlan.is_default && (
                <span className="px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[10px] sm:text-xs text-white border border-[#085F9D] bg-[linear-gradient(90deg,#036_0%,#06C_100%)] shadow-[inset_0_4px_4px_0_rgba(0,77,94,0.25)]">
                  2 Month Free
                </span>
              )}
            </div>
          ),
          price: defaultPlan.subscription_amount,
          is_default: defaultPlan.is_default,
          chat_limit: defaultPlan.features.chat_limit,
        });
      }
    }
  }, [plans]);

  // Plan options derived from plans data
  const plansOptions = useMemo(() => {
    return plans.map((plan) => ({
      value: plan.id,
      label: (
        <div className="flex justify-between items-center w-full">
          <p>{plan.name}</p>
          {plan.is_default && (
            <span className="px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[10px] sm:text-xs text-white border border-[#085F9D] bg-[linear-gradient(90deg,#036_0%,#06C_100%)] shadow-[inset_0_4px_4px_0_rgba(0,77,94,0.25)]">
              2 Month Free
            </span>
          )}
        </div>
      ),
      price: plan.subscription_amount,
      is_default: plan.is_default,
      chat_limit: plan.features.chat_limit,
    }));
  }, [plans]);

  // Find default plan
  const defaultPlan = useMemo(() => {
    return plansOptions.find((plan) => plan.is_default) || null;
  }, [plansOptions]);

  // Business plan features
  const businessPlanFeatures = [
    "Key Athena Features",
    "Support a wide number of formats, including text, pdf, word, video & more",
    "No limit on the number of users",
    "Free dedicated app on iOS and Android",
    "24/7 priority support",
    "Buy Extra Queries",
  ];

  const enterprisePlanFeatures = [
    "All the features of Business Standard",
    "Support Custom ID systems (e.g., Okta, Entra)",
    "Support Complex Corporate Hierarchies",
    "Custom Dashboards and Analytics",
    "Specialized Franchise Billing Options",
    "Custom Pricing Options",
    "Dedicated Customer Success Manager",
  ];

  // Handle submit button click
  const handleSubmit = () => {
    setIsSubmitting(true);
    // In a real implementation, this would call an API to process the subscription
    window.open(
      `${process.env.NEXT_PUBLIC_APP_URL}/register?dpId=${selectedQueryOption?.value}`,
      "_blank",
    );
    setIsSubmitting(false);
  };
  return (
    <section id="pricing" className="py-16 bg-gray-50 lg:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
            Try AthenaPro Free for 2 Months
          </h2>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#036] via-[#409ED0] to-[#36a6e2] mb-4">
            Scale When You&apos;re Ready.
          </h3>
          {/* <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Designed for frontline workers in food service, hospitality, and retail. 
            Perfect for businesses with high turnover and part-time workers.
          </p> */}
          <p className="mx-auto mt-4 max-w-4xl text-sm text-gray-600">
            We don't charge per user - only usage. Our pricing comes out to
            about $2 per full-time-equivalent worker per month, much less
            expensive than traditional $20-$50 per user pricing. Perfect for
            accommodating your part-time workers.
          </p>
          <div className="mt-4">
            <Link
              href="/how-athena-pricing-works"
              className="underline text-primary-900 hover:text-primary-800"
            >
              How Athena Pricing works, explained
            </Link>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 mx-auto max-w-5xl md:grid-cols-2">
          {/* Business Standard Plan */}
          <div className="flex overflow-hidden relative flex-col h-full bg-white rounded-2xl border-2 border-blue-800 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="p-4 text-white border-2 bg-primary-900 border-primary-900">
              <h3 className="text-xl font-bold">Business Standard</h3>
            </div>
            <div className="flex flex-col flex-1 p-3 sm:p-8">
              {error && (
                <div className="p-3 mb-4 text-red-700 bg-red-50 rounded-md">
                  {error}
                </div>
              )}

              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="w-12 h-12 rounded-full border-t-2 border-b-2 animate-spin border-primary-900"></div>
                </div>
              ) : (
                <>
                  {/* Per User Pricing */}
                  {!isPerUserPricingLoading &&
                    !!perUserPricing.cost_per_user_per_month && (
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-primary-900">
                          {perUserPricing.unit}
                          {perUserPricing.cost_per_user_per_month}
                        </span>
                        <span className="text-sm text-tertiary-600">
                          {" "}
                          / Per User / Month
                        </span>
                      </div>
                    )}

                  {/* Queries Per Month Section */}
                  <div className="mb-2">
                    <div className="flex items-center mb-6">
                      <svg
                        className="mr-2 w-5 h-5 text-blue-800"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#003366"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">
                        Queries Per Month - pooled between all users
                      </span>
                    </div>

                    {/* Plan Selection Dropdown */}
                    <div className="mt-4 mb-2">
                      {plansOptions.length > 0 && selectedQueryOption && (
                        <Select
                          // menuIsOpen={true}
                          isSearchable={false}
                          isClearable={false}
                          options={plansOptions.map((option) => ({
                            value: option.value,
                            label: option.label,
                          }))}
                          value={selectedQueryOption}
                          onChange={(selected: any) => {
                            const option = plansOptions.find(
                              (opt) => opt.value === selected.value,
                            );
                            if (option) setSelectedQueryOption(option);
                          }}
                          menuPlacement="auto"
                          maxMenuHeight={400}
                          placeholder="Select queries per month"
                          components={{
                            DropdownIndicator: () => (
                              <div className="mr-2 cursor-pointer">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4 6L8 10L12 6"
                                    stroke="#6B7280"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            ),
                            IndicatorSeparator: () => null,
                            Option: ({ children, ...props }: any) => {
                              const data: any = props.data;
                              return (
                                <div
                                  {...props.innerProps}
                                  className={`hover:border-l-primary-900 border-l-2 border-l-transparent flex flex-col custom-option gap-x-1 cursor-pointer hover:bg-tertiary-50 duration-300 p-2 ${
                                    props.isSelected
                                      ? "bg-secondary-200"
                                      : "bg-transparent"
                                  }`}
                                >
                                  <div className="flex items-center">
                                    <span className="ml-2 w-full text-gray-900">
                                      {data.label}
                                    </span>
                                  </div>
                                </div>
                              );
                            },
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="p-3 mb-4 bg-gray-50 rounded-md">
                    {selectedQueryOption?.is_default ? null : (
                      <div className="flex justify-between items-center">
                        <span className="text-base font-medium">
                          Total : ${selectedQueryOption?.price.toFixed(2)}/Month
                        </span>
                      </div>
                    )}
                    <p className="text-sm text-gray-600">
                      {selectedQueryOption?.is_default
                        ? "Enjoy 2 months free."
                        : "billing starts after the free plan ends"}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-4">
                    <div className="flex gap-x-2 items-center mb-4 pl-[6px]">
                      <svg
                        className="w-5 h-5 text-blue-800"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          stroke="#003366"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-base font-medium text-gray-900">
                        What&apos;s included:
                      </span>
                    </div>

                    <ul className="pl-1 space-y-3">
                      {businessPlanFeatures.map((feature, index) => (
                        <li key={index} className="flex gap-x-2 items-start">
                          <svg
                            className="w-5 h-5 text-green-500 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-sm text-gray-800">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex justify-center items-center">
                          <div className="mr-2 w-5 h-5 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        "Start Now"
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Enterprise Scale */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#6F42C1] hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <div className="bg-[#6F42C1] text-white p-4 border-2 border-[#6F42C1]">
              <h3 className="text-xl font-bold">Large Enterprise</h3>
            </div>
            <div className="p-3 sm:p-8">
              <div className="mb-8">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    Custom Pricing
                  </span>
                </div>
                <p className="mb-6 text-gray-600">
                  For large operations that need maximum control, compliance,
                  and customization.
                </p>
              </div>
              {/* Features List */}
              <div className="flex-1 mt-20">
                <div className="flex gap-x-2 items-center mb-4 pl-[6px]">
                  <span>
                    <svg
                      className="w-5 h-5 text-blue-800"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        stroke="#003366"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-gray-900">
                    What&apos;s included:
                  </span>
                </div>

                <ul className="pl-1 space-y-3">
                  {enterprisePlanFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-x-2 items-start">
                      <span>
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* CTA Button */}
              <div className="pt-8 mt-auto">
                <Button
                  variant="tertiaryDark"
                  className="w-full"
                  onClick={() => {
                    router.push("#contact");
                  }}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
