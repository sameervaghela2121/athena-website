"use client";
import allImgPaths from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const JoinWaitBtn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add record");
      }

      setEmail("");
      setIsSubmitted(true);
      setError("");
    } catch (err: any) {
      console.error("err =>", err);
    } finally {
      setIsLoading(false);
    }

    // Here you would typically send the email to your backend
  };

  return (
    <div>
      <>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative flex justify-center">
              <div
                className={`relative inline-flex items-center transition-all duration-300 ease-in-out ${isExpanded ? "w-full" : "w-auto"}`}
              >
                {!isExpanded ? (
                  <button
                    type="button"
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200 shadow-lg"
                  >
                    <span className="mr-2">Join Waitlist</span>
                    <Image src={allImgPaths.rightIcon} alt="rightIcon" />
                  </button>
                ) : (
                  <div className="w-full flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-200">
                    <input
                      type="type"
                      placeholder="Enter your email"
                      className={`flex-1 px-6 py-3 border-none focus:outline-none focus:ring-0 ${error ? "text-red-500" : "text-gray-900"}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
                    >
                      {isLoading ? (
                        <Image
                          src={allImgPaths.loader}
                          alt="loader"
                          className="animate-spin"
                        />
                      ) : (
                        <Image
                          src={allImgPaths.sendMessage}
                          alt="sendMessage"
                        />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        ) : (
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center justify-start space-x-2">
              {/* <CheckCircle2 className="h-6 w-6 text-green-500" /> */}
              <Image src={allImgPaths.checkTick} alt="check-icon" />
              <p className="text-green-800 font-medium">
                Thank you for joining our waitlist! We&apos;ll notify you when
                we launch.
              </p>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default JoinWaitBtn;
