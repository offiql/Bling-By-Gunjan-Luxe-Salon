"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">

      <div className="w-full">

        <nav className="relative overflow-hidden  border border-[#d9adb4]/20 bg-[linear-gradient(135deg,#fff8f6_0%,#ffd9d2_100%)] ">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%)]"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(183,110,121,0.12),transparent_45%)]"></div>

          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(255,255,255,0.28)_50%,transparent_90%)] opacity-80"></div>

          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#b76e79_0.7px,transparent_0.7px)] bg-[size:14px_14px]"></div>

          <div className="relative flex min-h-[84px] items-center justify-between px-4 py-4 sm:min-h-[92px] sm:px-6 lg:min-h-[100px] lg:px-8 xl:px-10">

            <Link
              href="/"
              className="relative z-10 flex items-center gap-3 sm:gap-4"
            >

              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#7e4b56] via-[#B76E79] to-[#efc4bc] shadow-[0_24px_60px_rgba(183,110,121,0.30)] sm:h-[68px] sm:w-[68px] lg:h-[74px] lg:w-[74px]">

                <span className="text-[1.9rem] font-black text-white sm:text-[2.2rem]">
                  ✦
                </span>

              </div>

              <div className="min-w-0">

                <h1 className="truncate bg-gradient-to-r from-[#1f1719] via-[#6d454c] to-[#B76E79] bg-clip-text text-[1.25rem] font-black tracking-[-0.08em] text-transparent sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.3rem]">
                  Bling By Gunjan
                </h1>

                <p className="mt-[5px] pl-[2px] text-[8px] font-black uppercase tracking-[0.36em] text-[#B76E79] sm:text-[9px] md:text-[10px] lg:text-[11px] lg:tracking-[0.52em]">
                  Luxe Salon • Dehradun
                </p>

              </div>

            </Link>

            <div className="relative z-10 hidden items-center gap-1 xl:flex">

              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative overflow-hidden rounded-full px-5 py-3 text-[14px] font-black tracking-[0.01em] text-[#382d2f] transition-all duration-300 hover:text-[#B76E79] 2xl:px-6 2xl:text-[15px]"
                >

                  <span className="relative z-10">
                    {item.name}
                  </span>

                  <span className="absolute inset-0 scale-0 rounded-full bg-[linear-gradient(135deg,rgba(183,110,121,0.12),rgba(255,255,255,0.45))] transition-all duration-300 group-hover:scale-100"></span>

                  <span className="absolute bottom-[8px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#B76E79] via-[#efc4bc] to-[#fff] transition-all duration-300 group-hover:w-10"></span>

                </Link>
              ))}

            </div>

            <div className="relative z-10 hidden items-center gap-3 lg:flex">

              <div className="hidden items-center gap-2 md:flex">

                {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label="Social Media"
                      className="group flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#d8a8b0]/20 bg-white/75 text-[#B76E79] shadow-[0_12px_30px_rgba(183,110,121,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#B76E79] hover:text-white hover:shadow-[0_24px_50px_rgba(183,110,121,0.25)]"
                    >

                      <Icon size={12} />

                    </a>
                  )
                )}

              </div>

              <div className="hidden rounded-[22px] border border-[#d8a8b0]/15 bg-white/70 px-5 py-3 shadow-[0_12px_35px_rgba(183,110,121,0.08)] backdrop-blur-xl xl:block">

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#B76E79]">
                  Luxury Beauty Experience
                </p>

                <p className="mt-1 text-[14px] font-black text-[#2a1f21]">
                  Celebrity Makeup Artist Led Salon
                </p>

              </div>

            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-2xl border border-[#d8a8b0]/20 bg-white/75 text-[#B76E79] shadow-[0_12px_30px_rgba(183,110,121,0.10)] backdrop-blur-xl transition-all duration-300 hover:bg-[#B76E79] hover:text-white lg:hidden"
            >

              {open ? (
                <HiX className="text-[28px]" />
              ) : (
                <HiOutlineMenuAlt3 className="text-[28px]" />
              )}

            </button>

          </div>

        </nav>

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open
              ? "mt-4 max-h-[900px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="overflow-hidden rounded-[32px] border border-[#d8a8b0]/15 bg-[linear-gradient(135deg,#fff8f6_0%,#ffd9d2_100%)] shadow-[0_35px_100px_rgba(183,110,121,0.18)] backdrop-blur-3xl">

            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#b76e79_0.7px,transparent_0.7px)] bg-[size:14px_14px]"></div>

            <div className="relative p-5 sm:p-6">

              <div className="flex flex-col gap-2">

                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-[22px] border border-transparent bg-white/50 px-5 py-4 text-[15px] font-black text-[#382d2f] shadow-[0_10px_25px_rgba(183,110,121,0.04)] transition-all duration-300 hover:border-[#d8a8b0]/20 hover:bg-white hover:text-[#B76E79]"
                  >

                    <span>
                      {item.name}
                    </span>

                    <span className="text-[#B76E79] transition-all duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </Link>
                ))}

              </div>

              <div className="mt-7 rounded-[26px] border border-[#d8a8b0]/15 bg-white/60 p-5 shadow-[0_12px_35px_rgba(183,110,121,0.06)] backdrop-blur-xl">

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#B76E79]">
                  Bling By Gunjan Luxe Salon
                </p>

                <h3 className="mt-3 text-[1.3rem] font-black leading-[1.1] tracking-[-0.04em] text-[#2a1f21]">
                  Timeless Luxury Beauty Experience
                </h3>

                <p className="mt-3 text-[14px] leading-[1.9] text-[#5d4f52]">
                  Celebrity makeup artistry, premium beauty services,
                  bridal elegance, and luxury salon experiences crafted
                  with sophistication and care.
                </p>

                <div className="mt-6 flex items-center gap-3">

                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        aria-label="Social Media"
                        className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#d8a8b0]/20 bg-white text-[#B76E79] transition-all duration-300 hover:bg-[#B76E79] hover:text-white"
                      >

                        <Icon size={12} />

                      </a>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}