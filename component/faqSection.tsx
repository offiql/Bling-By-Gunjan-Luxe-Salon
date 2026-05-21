"use client";

import { useState } from "react";

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
    {
      question: "Is the salon suitable for bridal preparations?",
      answer:
        "Yes, we have a dedicated bridal beauty experience designed to make brides feel luxurious, confident, elegant, and stress-free on their special day.",
    },
    {
      question: "What makes Bling by Gunjan different?",
      answer:
        "Our salon combines celebrity-level artistry, luxury ambience, premium products, hygiene excellence, and personalized care to create timeless beauty experiences.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8f6] via-[#fffdfc] to-white py-16 sm:py-20 lg:py-28">

      <div className="absolute left-[-200px] top-[-140px] h-[520px] w-[520px] rounded-full bg-[#7e4b56]/10 blur-3xl"></div>

      <div className="absolute bottom-[-240px] right-[-240px] h-[620px] w-[620px] rounded-full bg-[#b97885]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#7e4b56_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="relative mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-24">

          <div className="relative">

            <div className="inline-flex items-center rounded-full border border-[#7e4b56]/10 bg-white/90 px-5 py-2.5 shadow-[0_12px_35px_rgba(126,75,86,0.06)] backdrop-blur-xl">

              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8c5360]"></span>

              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8c5360] sm:text-[11px]">
                Frequently Asked Questions
              </span>

            </div>

            <h2 className="mt-8 max-w-[760px] text-[2.8rem] font-black leading-[0.88] tracking-[-0.09em] text-[#140f10] sm:text-[4rem] lg:text-[5.2rem] xl:text-[5.8rem]">

              Everything You Need

              <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
                To Know
              </span>

            </h2>

            <p className="mt-8 max-w-[680px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
              Explore answers about our luxury beauty experiences,
              bridal artistry, celebrity makeup, consultations,
              salon ambience, premium products, and personalized care.
            </p>

            <div className="relative mt-12 overflow-hidden rounded-[40px] border border-white/60 bg-white/90 p-3 shadow-[0_40px_120px_rgba(126,75,86,0.10)] backdrop-blur-2xl">

              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Salon"
                className="h-[320px] w-full rounded-[32px] object-cover sm:h-[420px] lg:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#140f10]/35 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">

                <div className="max-w-[380px] rounded-[28px] border border-white/20 bg-white/10 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl">

                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/80">
                    Bling By Gunjan Luxe Salon
                  </p>

                  <h3 className="mt-3 text-[1.8rem] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[2.2rem]">
                    Luxury Beauty
                    <span className="mt-1 block">
                      Crafted Perfectly
                    </span>
                  </h3>

                </div>

              </div>

            </div>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => {
              const isOpen = activeFAQ === index;

              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-[34px] border transition-all duration-500 ${
                    isOpen
                      ? "border-[#7e4b56]/15 bg-white shadow-[0_35px_100px_rgba(126,75,86,0.10)]"
                      : "border-[#7e4b56]/10 bg-white/85 shadow-[0_18px_50px_rgba(126,75,86,0.05)] hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(126,75,86,0.10)]"
                  }`}
                >

                  <button
                    onClick={() =>
                      setActiveFAQ(isOpen ? null : index)
                    }
                    className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-7 lg:p-8"
                  >

                    <div className="flex flex-1 items-start">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_20px_45px_rgba(126,75,86,0.24)]">

                        <span className="text-[14px] font-black text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      <div className="ml-5 flex-1">

                        <h3 className="text-[1.02rem] font-black leading-[1.5] tracking-[-0.03em] text-[#140f10] sm:text-[1.18rem] lg:text-[1.3rem]">
                          {faq.question}
                        </h3>

                      </div>

                    </div>

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-[#7e4b56]/10 bg-[#fff8f6] transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc]"
                          : ""
                      }`}
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-all duration-500 ${
                          isOpen
                            ? "text-white"
                            : "text-[#8c5360]"
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

                      <div className="border-t border-[#7e4b56]/10 px-5 pb-6 pt-5 sm:px-7 sm:pb-7 lg:px-8 lg:pb-8">

                        <p className="max-w-[95%] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[17px]">
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