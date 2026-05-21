import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#130e0f] text-white">

      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#7e4b56]/30 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#b97885]/20 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] bg-[size:14px_14px]"></div>

      <div className="relative mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">

          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] xl:gap-16">

            <div>

              <div className="flex items-center">

                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_24px_60px_rgba(185,120,133,0.35)]">

                  <span className="text-[2rem] font-black text-white">
                    ✦
                  </span>

                </div>

                <div className="ml-4">

                  <h2 className="bg-gradient-to-r from-white via-[#f3d5cf] to-[#d89ca8] bg-clip-text text-[1.9rem] font-black tracking-[-0.06em] text-transparent sm:text-[2.2rem]">
                    Bling By Gunjan
                  </h2>

                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#d89ca8]">
                    Luxe Salon
                  </p>

                </div>

              </div>

              <p className="mt-8 max-w-[520px] text-[15px] leading-[2] text-white/70 sm:text-[16px]">
                Where luxury meets artistry, elegance, and timeless beauty.
                Bling by Gunjan Luxe Salon creates premium beauty experiences
                designed to make every client feel radiant, confident, and unforgettable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d89ca8]/20 hover:bg-gradient-to-br hover:from-[#7e4b56] hover:via-[#b97885] hover:to-[#efc4bc]"
                    >

                      <Icon className="text-[15px] text-white/80 transition-all duration-300 group-hover:text-white" />

                    </a>
                  )
                )}

              </div>

            </div>

            <div>

              <h3 className="text-[1.3rem] font-black tracking-[-0.03em] text-white">
                Quick Links
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "Home",
                  "About",
                  "Services",
                  "Gallery",
                  "Testimonials",
                  "Contact",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="group flex items-center text-[15px] font-semibold text-white/70 transition-all duration-300 hover:text-[#efc4bc]"
                  >

                    <div className="h-2 w-2 rounded-full bg-[#8c5360] transition-all duration-300 group-hover:w-4"></div>

                    <span className="ml-3">
                      {item}
                    </span>

                  </Link>
                ))}

              </div>

            </div>

            <div>

              <h3 className="text-[1.3rem] font-black tracking-[-0.03em] text-white">
                Luxury Services
              </h3>

              <div className="mt-8 space-y-5">

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
                    className="group flex items-center text-[15px] font-semibold text-white/70 transition-all duration-300 hover:text-[#efc4bc]"
                  >

                    <div className="h-2 w-2 rounded-full bg-[#8c5360] transition-all duration-300 group-hover:w-4"></div>

                    <span className="ml-3">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div>

              <h3 className="text-[1.3rem] font-black tracking-[-0.03em] text-white">
                Contact & Location
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-start rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(185,120,133,0.25)]">

                    <FaPhoneAlt className="text-sm text-white" />

                  </div>

                  <div className="ml-4">

                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#d89ca8]">
                      Contact Us
                    </p>

                    <p className="mt-2 text-[1rem] font-black text-white">
                      +91 98765 43210
                    </p>

                  </div>

                </div>

                <div className="flex items-start rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(185,120,133,0.25)]">

                    <MdEmail className="text-[18px] text-white" />

                  </div>

                  <div className="ml-4">

                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#d89ca8]">
                      Email Address
                    </p>

                    <p className="mt-2 break-all text-[1rem] font-black text-white">
                      info@blingbygunjan.com
                    </p>

                  </div>

                </div>

                <div className="flex items-start rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(185,120,133,0.25)]">

                    <FaMapMarkerAlt className="text-sm text-white" />

                  </div>

                  <div className="ml-4">

                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#d89ca8]">
                      Visit Our Salon
                    </p>

                    <p className="mt-2 text-[1rem] font-black leading-[1.7] text-white">
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

        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center lg:flex-row lg:text-left">

          <p className="text-[14px] font-semibold text-white/60">
            © 2026 Bling by Gunjan Luxe Salon. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/"
              className="text-[14px] font-semibold text-white/60 transition-all duration-300 hover:text-[#efc4bc]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-[14px] font-semibold text-white/60 transition-all duration-300 hover:text-[#efc4bc]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/"
              className="text-[14px] font-semibold text-white/60 transition-all duration-300 hover:text-[#efc4bc]"
            >
              Luxury Beauty Experience
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}