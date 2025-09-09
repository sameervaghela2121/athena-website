"use client";

import { ContactForm } from "@/app/shared/validation";
import allImgPaths from "@/assets";
import { Button, Input, Textarea } from "@/common";
import Section from "@/common/Section";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(ContactForm),
  });

  const onSubmit = async (data: object) => {
    try {
      setIsLoading(true);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow" as RequestRedirect,
      };

      fetch(
        `https://athena-qa.demotrt.com/dashboard-api/v1.0/dashboard/write-waitlist-data`,
        requestOptions,
      )
        .then((response) => response.text())
        .then((result) => {
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("error =>", error);
        })
        .finally(() => {
          reset();
          setIsLoading(false);
        });
    } catch (err: any) {
      console.error("err =>", err);
    }
  };

  return (
    <Section>
      <div className="flex flex-col gap-y-2" id="contact">
        <span className="text-2xl text-slate-800 mb-4">Contact Us</span>
        <h2 className="text-[45px] font-extrabold text-gray-900 leading-none">
          Get in touch with us.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#036] via-[#409ED0] to-[#36a6e2]">
            We&apos;re here to assist you.
          </span>
        </h2>
      </div>
      <form
        className="w-full space-y-4 mt-8"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isSubmitted && (
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center justify-start space-x-2">
              {/* <CheckCircle2 className="h-6 w-6 text-green-500" /> */}
              <Image src={allImgPaths.checkTick} alt="check-icon" />
              <p className="text-green-800 font-medium">
                Thank you for contacting us! We will get back to you soon.
              </p>
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            key="name"
            name="name"
            control={control}
            placeholder={"Your name"}
            errors={errors}
          />
          <Input
            key="phone"
            name="phone"
            control={control}
            placeholder={"Phone (Optional)"}
            errors={errors}
          />
        </div>
        <Input
          key="email"
          name="email"
          control={control}
          placeholder={"Email"}
          errors={errors}
        />
        <Textarea
          key="message"
          name="message"
          control={control}
          rows={4}
          type="textarea"
          placeholder={"Your Message"}
          errors={errors}
        />
        <Button
          type="submit"
          className="px-6 py-3 bg-blue-700 text-white rounded"
        >
          <span className="mr-2"> Submit</span>
          {isLoading && (
            <Image
              src={allImgPaths.loader}
              alt="loader"
              className="animate-spin h-6"
            />
          )}
        </Button>
      </form>
    </Section>
  );
};

export default Contact;
