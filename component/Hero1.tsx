import Link from "next/link";
import { location } from "./helperData";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#2B0D14]">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/hero1_ba.mp4"
          type="video/mp4"
        />
      </video>



      <div className="relative  flex-col justify-start items-center z-10 mx-auto flex w-full max-w-[1750px]  px-4 pb-10 pt-[3.5em] sm:px-6 lg:px-8">


        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:px-5 sm:py-2.5">

          <span className="mr-2 h-2 w-2 rounded-full bg-[#D4A373]"></span>

          <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-white/85 sm:text-[10px]">
            Bling By Gunjan Luxe Salon
          </span>

        </div>

        <h1 className="my-5 text-center font-black leading-[1.2]  text-white text-[2.5rem] sm:text-[3.5rem] md:text-[4.4rem] lg:text-[5.2rem] xl:text-[6rem] 2xl:text-[6.6rem]">
          Where Beauty Meets
          Luxury &
          Timeless Glamour
        </h1>

        <div className="  flex justify-center items-center w-full flex-wrap gap-3">

          {[
            "Celebrity Makeup Artist",
            "Luxury Bridal Studio",
            "Premium Beauty Experience",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-5 sm:text-[10px]"
            >
              {item}
            </div>
          ))}

        </div>




        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[980px]">

          <Link
            href={location}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/10 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.12] sm:px-5"
          >

            <div className="absolute right-[-30px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

            <div className="relative flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_10px_25px_rgba(91,30,45,0.30)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

              </div>

              <div className="min-w-0">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#D4A373]">
                  Visit Salon
                </p>

                <h3 className="mt-1 text-[14px] font-black text-white sm:text-[15px]">
                  Get Directions
                </h3>

                <p className="mt-1 text-[12px] leading-[1.6] text-white/60">
                  Dehradun, Uttarakhand
                </p>

              </div>

            </div>

          </Link>

          <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/10 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.12] sm:px-5">

            <div className="absolute right-[-30px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

            <div className="relative flex  items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_10px_25px_rgba(91,30,45,0.30)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.894 1.368l1.09 3.272a2 2 0 01-.45 2.11l-1.517 1.518a16.042 16.042 0 006.586 6.586l1.518-1.517a2 2 0 012.11-.45l3.272 1.09A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 3V2a2 2 0 012-2h1z"
                  />
                </svg>

              </div>

              <div className="min-w-0">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#D4A373]">
                  Contact Us
                </p>

                <h3 className="mt-1 text-[14px] font-black text-white sm:text-[15px]">
                  +91-99994-92594
                </h3>

                <p className="mt-1 text-[12px] leading-[1.6] text-white/60">
                  Luxury beauty consultations
                </p>

              </div>

            </div>

          </div>

          <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/10 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.12] sm:px-5">

            <div className="absolute right-[-30px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

            <div className="relative flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] shadow-[0_10px_25px_rgba(91,30,45,0.30)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22C17.523 22 22 17.523 22 12S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  />
                </svg>

              </div>

              <div className="min-w-0">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#D4A373]">
                  Opening Hours
                </p>

                <h3 className="mt-1 text-[14px] font-black text-white sm:text-[15px]">
                  10 AM — 8 PM
                </h3>

                <p className="mt-1 text-[12px] leading-[1.6] text-white/60">
                  Open all days
                </p>

              </div>

            </div>

          </div>

        </div>


      </div>

    </section>
  );
}