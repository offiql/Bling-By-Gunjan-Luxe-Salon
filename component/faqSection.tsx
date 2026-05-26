"use client";

import { useState } from "react";
import faq1 from "@/assests/faq/faq1.jpeg"
import faq2 from "@/assests/faq/faq2.jpeg"
import faq3 from "@/assests/faq/faq3.jpeg"
export default function FAQSection() {
  const faqs = [
    {
      question: "Do you provide bridal makeup services?",
      answer:
        "Yes, we specialize in luxury bridal makeup including HD makeup, airbrush makeup, engagement looks, destination weddings, and celebrity-inspired bridal transformations.",
    },
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "We recommend contacting our salon before visiting so our team can guide you regarding consultations, bridal bookings, and service availability.",
    },
    {
      question: "Which beauty services are available at the salon?",
      answer:
        "We offer bridal makeup, celebrity makeup, luxury hair services, facials, skincare therapies, nail services, spa treatments, beauty consultations, and premium salon experiences.",
    },
    {
      question: "Do you use premium beauty products?",
      answer:
        "Yes, we use premium international beauty and skincare products to ensure luxury results, safety, and exceptional client experiences.",
    },
    {
      question: "Where is Bling by Gunjan Luxe Salon located?",
      answer:
        "Bling by Gunjan Luxe Salon is located in Dehradun, Uttarakhand — offering a sophisticated luxury beauty experience in a premium ambience.",
    },
    {
      question: "Do you offer personalized beauty consultations?",
      answer:
        "Absolutely. Every client receives personalized beauty guidance and customized recommendations based on their style, skin type, preferences, and occasion.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F7EFE5] py-12 sm:py-16 lg:py-20"
    >

      <div className="absolute left-[-180px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#5B1E2D]/10 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[420px] w-[420px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#5B1E2D_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="relative mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-14">

          <div className="relative">

            <div className="inline-flex items-center rounded-full border border-[#5B1E2D]/10 bg-white/80 px-4 py-2 shadow-[0_8px_18px_rgba(91,30,45,0.05)] backdrop-blur-xl">

              <span className="mr-2 h-2 w-2 rounded-full bg-[#D4A373]"></span>

              <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#5B1E2D] sm:text-[8px]">
                Frequently Asked Questions
              </span>

            </div>

            <h2 className="mt-4 max-w-[720px] pb-3 text-[1.9rem] font-black leading-[1.06] tracking-[-0.07em] text-[#1E1616] sm:text-[2.9rem] lg:text-[4rem] xl:text-[4.7rem]">

              Everything You
              <span className="mt-1 block bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] bg-clip-text pb-1 text-transparent">
                Need To Know
              </span>

            </h2>

            <p className="mt-4 max-w-[620px] text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
              Explore answers about our luxury beauty experiences,
              bridal artistry, consultations, salon ambience,
              premium products, and personalized care.
            </p>

            <div className="relative mt-7 overflow-hidden rounded-[28px] border border-[#5B1E2D]/10 bg-white p-2 shadow-[0_20px_60px_rgba(91,30,45,0.08)]">

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">

                <div className="overflow-hidden rounded-[20px]">

                  <img
                    src={faq1.src}
                    alt="Luxury Beauty"
                    className="h-[180px] w-full object-cover transition-all duration-700 hover:scale-105 sm:h-[220px]"
                  />

                </div>

                <div className="overflow-hidden rounded-[20px]">

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[180px] w-full object-cover transition-all duration-700 hover:scale-105 sm:h-[220px]"
                  >
                    <source src="/faq_v-1.mp4" type="video/mp4" />
                  </video>

                </div>

                <div className="overflow-hidden rounded-[20px] col-span-2 sm:col-span-1">

                  <img
                    src={faq3.src}
                    alt="Luxury Salon"
                    className="h-[180px] w-full object-cover transition-all duration-700 hover:scale-105 sm:h-[220px]"
                  />

                </div>

              </div>

              {/* <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/10 bg-white/10 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:inset-x-5 sm:p-5">

                <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-white/80 sm:text-[8px]">
                  Bling By Gunjan Luxe Salon
                </p>

                <h3 className="mt-2 pb-1 text-[1.3rem] font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-[1.8rem]">

                  Luxury Beauty
                  <span className="mt-1 block">
                    Crafted Perfectly
                  </span>

                </h3>

              </div> */}

            </div>

          </div>

          <div className="space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = activeFAQ === index;

              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-[24px] border transition-all duration-500 ${
                    isOpen
                      ? "border-[#5B1E2D]/10 bg-white shadow-[0_20px_60px_rgba(91,30,45,0.08)]"
                      : "border-[#5B1E2D]/10 bg-white/80 shadow-[0_12px_35px_rgba(91,30,45,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(91,30,45,0.08)]"
                  }`}
                >

                  <button
                    onClick={() =>
                      setActiveFAQ(isOpen ? null : index)
                    }
                    className="flex w-full items-start justify-between gap-4 p-4 text-left sm:p-5 lg:p-6"
                  >

                    <div className="flex flex-1 items-start">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_15px_35px_rgba(91,30,45,0.18)]">

                        <span className="text-[11px] font-black text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      <div className="ml-4 flex-1">

                        <h3 className="pb-1 text-[0.95rem] font-black leading-[1.5] tracking-[-0.03em] text-[#1E1616] sm:text-[1.05rem] lg:text-[1.12rem]">
                          {faq.question}
                        </h3>

                      </div>

                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-[#5B1E2D]/10 bg-[#FDF9F7] transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 bg-gradient-to-br from-[#5B1E2D] via-[#7B2D42] to-[#D4A373]"
                          : ""
                      }`}
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-all duration-500 ${
                          isOpen
                            ? "text-white"
                            : "text-[#5B1E2D]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.6}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>

                    </div>

                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-[#5B1E2D]/10 px-4 pb-5 pt-4 sm:px-5 sm:pb-6 lg:px-6">

                        <p className="max-w-[95%] text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}