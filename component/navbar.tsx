"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "@/assests/logo.jpeg";
const navItems = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61586415744187&ref=PROFILE_EDIT_xav_ig_profile_page_web#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bling_by_gunjan",
    label: "Instagram",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-9999 w-full">

      <nav className="relative overflow-hidden bg-[#3a0f1ba3]/70 backdrop-blur-3xl">

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%)]"></div>

        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] bg-size-[14px_14px]"></div>

        <div className="relative mx-auto flex min-h-18.5 items-center justify-between px-4 sm:min-h-21 sm:px-6 md:px-8 lg:min-h-23.5 lg:px-10 2xl:px-14">

          <Link
            href={logo.src}
            className="relative z-10 flex items-center gap-3 sm:gap-4"
          >

            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-white/10 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:h-[56px] sm:w-[56px] lg:h-[64px] lg:w-[64px]">

              <img
                src={logo.src}
                alt="Bling By Gunjan Logo"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="min-w-0">

              <h1 className="truncate bg-gradient-to-r from-white via-[#F7EFE5] to-[#D4A373] bg-clip-text pb-1 text-[1.1rem] font-black leading-[1] tracking-[-0.08em] text-transparent sm:text-[1.45rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.2rem]">

                Bling By Gunjan

              </h1>

              <p className="mt-[2px] text-[7px] font-black uppercase tracking-[0.34em] text-[#F7EFE5]/70 sm:text-[8px] md:text-[9px] lg:text-[10px] lg:tracking-[0.48em]">

                Luxe Salon • Dehradun

              </p>

            </div>

          </Link>

          <div className="relative z-10 hidden items-center gap-1 xl:flex">

            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-full px-4 py-3 text-[13px] font-black tracking-[0.02em] text-white/85 transition-all duration-300 hover:text-white 2xl:px-6 2xl:text-[14px]"
              >

                <span className="relative z-10">
                  {item.name}
                </span>

                <span className="absolute inset-0 scale-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] transition-all duration-300 group-hover:scale-100"></span>

                <span className="absolute bottom-[8px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#D4A373] via-[#F7EFE5] to-[#fff] transition-all duration-300 group-hover:w-10"></span>

              </Link>
            ))}

          </div>

          <div className="relative z-10 hidden items-center gap-3 lg:flex">

            <div className="hidden items-center gap-2 md:flex">

              <div className="hidden items-center gap-2 md:flex">

                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="group flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B2D42] hover:text-white hover:shadow-[0_20px_45px_rgba(91,30,45,0.28)]"
                    >

                      <Icon size={11} />

                    </Link>
                  );
                })}

              </div>

            </div>

            <div className="hidden rounded-[20px] border border-white/10 bg-white/10 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl 2xl:block">

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4A373]">
                Luxury Beauty Experience
              </p>

              <p className="mt-1 text-[13px] font-black text-white">
                Celebrity Makeup Artist Led Salon
              </p>

            </div>

          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-[0_10px_25px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:bg-[#7B2D42] hover:text-white xl:hidden"
          >

            {open ? (
              <HiX className="text-[26px]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[26px]" />
            )}

          </button>

        </div>

      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${open
          ? "max-h-[900px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >

        <div className="border-b border-white/10 bg-[#3A0F1B]/95 shadow-[0_35px_100px_rgba(0,0,0,0.28)] backdrop-blur-3xl">

          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

          <div className="relative px-4 py-5 sm:px-6 sm:py-6">

            <div className="flex flex-col gap-2">

              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-[22px] border border-white/5 bg-white/5 px-5 py-4 text-[15px] font-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-white/10 hover:bg-white/10"
                >

                  <span>
                    {item.name}
                  </span>

                  <span className="text-[#D4A373] transition-all duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </Link>
              ))}

            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D4A373]">
                Bling By Gunjan Luxe Salon
              </p>

              <h3 className="mt-3 text-[1.2rem] font-black leading-[1.1] tracking-[-0.04em] text-white">
                Timeless Luxury Beauty Experience
              </h3>

              <p className="mt-3 text-[14px] leading-[1.9] text-white/70">
                Celebrity makeup artistry, premium beauty services,
                bridal elegance, and luxury salon experiences crafted
                with sophistication and care.
              </p>

              <div className="mt-6 flex items-center gap-3">

                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all duration-300 hover:bg-[#7B2D42] hover:text-white"
                    >

                      <Icon size={11} />

                    </Link>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}