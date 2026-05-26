import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import logo from "@/assests/logo.jpeg";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#140f10] text-white">

      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#5B1E2D]/30 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="relative mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">

        <div className="border-b border-white/10 py-12 sm:py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.1fr] xl:gap-14">

            <div>

              <div className="flex items-center">

                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-white/10 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:h-[56px] sm:w-[56px] lg:h-[64px] lg:w-[64px]">

                  <img
                    src={logo.src}
                    alt="Bling By Gunjan Logo"
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="ml-4">

                  <h2 className="bg-gradient-to-r from-white via-[#F7EFE5] to-[#D4A373] bg-clip-text text-[1.7rem] font-black tracking-[-0.06em] text-transparent sm:text-[2rem]">
                    Bling By Gunjan
                  </h2>

                  <p className="mt-1 text-[9px] font-black uppercase tracking-[0.36em] text-[#D4A373]">
                    Luxe Salon
                  </p>

                </div>

              </div>

              <p className="mt-7 max-w-[500px] text-[13px] leading-[2] text-white/65 sm:text-[14px] lg:text-[15px]">
                Where luxury meets artistry, elegance, and timeless beauty.
                Bling by Gunjan Luxe Salon creates premium beauty experiences
                designed to make every client feel radiant, confident, and unforgettable.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                {[
                  {
                    icon: FaFacebookF,
                    link: "https://www.facebook.com/profile.php?id=61586415744187&ref=PROFILE_EDIT_xav_ig_profile_page_web#",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/bling_by_gunjan",
                  },

                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      className="group flex h-[50px] w-[50px] items-center justify-center rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A373]/20 hover:bg-gradient-to-br hover:from-[#5B1E2D] hover:via-[#7B2D42] hover:to-[#D4A373]"
                    >

                      <Icon className="text-[14px] text-white/75 transition-all duration-300 group-hover:text-white" />

                    </a>
                  );
                })}

              </div>

            </div>

            <div>

              <h3 className="text-[1.15rem] font-black tracking-[-0.03em] text-white sm:text-[1.25rem]">
                Quick Links
              </h3>

              <div className="mt-7 space-y-4">

                {[
                  {
                    name: "Services",
                    href: "#services",
                  },
                  {
                    name: "Gallery",
                    href: "#gallery",
                  },
                  {
                    name: "FAQ",
                    href: "#faq",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center text-[13px] font-semibold text-white/65 transition-all duration-300 hover:text-[#D4A373] sm:text-[14px]"
                  >

                    <div className="h-2 w-2 rounded-full bg-[#7B2D42] transition-all duration-300 group-hover:w-4"></div>

                    <span className="ml-3">
                      {item.name}
                    </span>

                  </Link>
                ))}

              </div>

            </div>

            <div>

              <h3 className="text-[1.15rem] font-black tracking-[-0.03em] text-white sm:text-[1.25rem]">
                Signature Services
              </h3>

              <div className="mt-7 space-y-4">

                {[
                  "Bridal Makeup",
                  "Celebrity Makeup",
                  "Luxury Hair Studio",
                  "Skin & Facials",
                  "Nail Extensions",
                  "Spa & Wellness",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center text-[13px] font-semibold text-white/65 transition-all duration-300 hover:text-[#D4A373] sm:text-[14px]"
                  >

                    <div className="h-2 w-2 rounded-full bg-[#7B2D42] transition-all duration-300 group-hover:w-4"></div>

                    <span className="ml-3">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div id="contact">

              <h3 className="text-[1.15rem] font-black tracking-[-0.03em] text-white sm:text-[1.25rem]">
                Contact & Location
              </h3>

              <div className="mt-7 space-y-4">

                <div className="flex items-start rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_16px_35px_rgba(91,30,45,0.22)]">

                    <FaPhoneAlt className="text-[13px] text-white" />

                  </div>

                  <div className="ml-4">

                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D4A373]">
                      Contact Us
                    </p>

                    <p className="mt-2 text-[0.95rem] font-black text-white sm:text-[1rem]">
                      +91-99994-92594
                    </p>

                  </div>

                </div>

                {/* <div className="flex items-start rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_16px_35px_rgba(91,30,45,0.22)]">

                    <MdEmail className="text-[16px] text-white" />

                  </div>

                  <div className="ml-4 min-w-0">

                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D4A373]">
                      Email Address
                    </p>

                    <p className="mt-2 break-all text-[0.9rem] font-black text-white sm:text-[1rem]">
                      info@blingbygunjan.com
                    </p>

                  </div>

                </div> */}

                <div className="flex items-start rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_16px_35px_rgba(91,30,45,0.22)]">

                    <FaMapMarkerAlt className="text-[13px] text-white" />

                  </div>

                  <div className="ml-4">

                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D4A373]">
                      Visit Our Salon
                    </p>

                    <p className="mt-2 text-[0.95rem] font-black leading-[1.7] text-white sm:text-[1rem]">
                      Dehradun,
                      <br />
                      Uttarakhand, India
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center lg:flex-row lg:text-left">

          <p className="text-[12px] font-semibold text-white/55 sm:text-[13px]">
           © {new Date().getFullYear()} Bling by Gunjan Luxe Salon. All Rights Reserved.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">

            <Link
              href="/"
              className="text-[12px] font-semibold text-white/55 transition-all duration-300 hover:text-[#D4A373] sm:text-[13px]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-[12px] font-semibold text-white/55 transition-all duration-300 hover:text-[#D4A373] sm:text-[13px]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/"
              className="text-[12px] font-semibold text-white/55 transition-all duration-300 hover:text-[#D4A373] sm:text-[13px]"
            >
              Luxury Beauty Experience
            </Link>

          </div> */}

        </div>

      </div>

    </footer>
  );
}