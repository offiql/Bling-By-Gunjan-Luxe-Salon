import { location } from "./helperData";
import saloon_1 from "@/assests/aboutSalon/salon_1.jpeg";
import saloon_2 from "@/assests/aboutSalon/salon_2.jpeg";

export default function LuxuryAboutSection() {
  return (
    <section id="#about"  className="relative overflow-hidden bg-[#F7EFE5] py-14 sm:py-18 lg:py-24 xl:py-28">

      <div className="absolute left-[-180px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#5B1E2D]/10 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-180px] h-[420px] w-[420px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#5B1E2D_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] xl:gap-20">

          <div className="relative order-2 lg:order-1">

            <div className="relative grid grid-cols-2 gap-3 sm:gap-5">

              <div className="space-y-3 sm:space-y-5">

                <div className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white p-2 shadow-[0_22px_60px_rgba(91,30,45,0.10)] sm:rounded-[28px]">

                  <img
                    src={saloon_1.src}
                    alt="Luxury Makeup"
                    className="h-[180px] w-full rounded-[18px] object-cover transition-all duration-700 group-hover:scale-105 sm:h-[260px] sm:rounded-[22px] lg:h-[360px] xl:h-[420px]"
                  />

                </div>

                <div className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white p-2 shadow-[0_22px_60px_rgba(91,30,45,0.10)] sm:rounded-[28px]">

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[150px] w-full rounded-[18px] object-cover transition-all duration-700 group-hover:scale-105 sm:h-[210px] sm:rounded-[22px] lg:h-[260px] xl:h-[300px]"
                  >
                    <source src="/salon_3_v.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-[#2B0D14]/45 via-transparent to-transparent sm:rounded-[28px]"></div>

                </div>

              </div>

              <div className="space-y-3 pt-6 sm:space-y-5 sm:pt-12 lg:pt-20">

                <div className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white p-2 shadow-[0_22px_60px_rgba(91,30,45,0.10)] sm:rounded-[28px]">

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[150px] w-full rounded-[18px] object-cover transition-all duration-700 group-hover:scale-105 sm:h-[210px] sm:rounded-[22px] lg:h-[260px] xl:h-[300px]"
                  >
                    <source src="/salon_4_v.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-[#2B0D14]/45 via-transparent to-transparent sm:rounded-[28px]"></div>

                </div>

                <div className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white p-2 shadow-[0_22px_60px_rgba(91,30,45,0.10)] sm:rounded-[28px]">

                  <img
                    src={saloon_2.src}
                    alt="Luxury Beauty"
                    className="h-[180px] w-full rounded-[18px] object-cover transition-all duration-700 group-hover:scale-105 sm:h-[260px] sm:rounded-[22px] lg:h-[360px] xl:h-[420px]"
                  />

                </div>

              </div>

              <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block">

                <div className="rounded-[28px] border border-white/70 bg-white/90 px-7 py-6 shadow-[0_30px_80px_rgba(91,30,45,0.16)] backdrop-blur-2xl">

                  <div className="flex items-center gap-7">

                    <div>

                      <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#D4A373]">
                        Experience
                      </p>

                      <h4 className="mt-1 text-[2.2rem] font-black text-[#5B1E2D]">
                        12+
                      </h4>

                      <p className="text-[12px] text-[#5C4A4A]">
                        Years Expertise
                      </p>

                    </div>

                    <div className="h-14 w-[1px] bg-[#5B1E2D]/10"></div>

                    <div>

                      <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#D4A373]">
                        Clients
                      </p>

                      <h4 className="mt-1 text-[2.2rem] font-black text-[#5B1E2D]">
                        5K+
                      </h4>

                      <p className="text-[12px] text-[#5C4A4A]">
                        Happy Clients
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="relative order-1 lg:order-2">

            <div className="inline-flex items-center rounded-full border border-[#5B1E2D]/10 bg-white/80 px-4 py-2 shadow-[0_8px_22px_rgba(91,30,45,0.05)] backdrop-blur-xl">

              <span className="mr-2 h-2 w-2 rounded-full bg-[#D4A373]"></span>

              <span className="text-[8px] font-bold uppercase tracking-[0.32em] text-[#5B1E2D] sm:text-[9px]">
                About Our Salon
              </span>

            </div>

            <h2 className="mt-5 max-w-[760px] pb-2 text-[2rem] font-black leading-[1.05] tracking-[-0.08em] text-[#1E1616] sm:text-[3rem] lg:text-[4.3rem] xl:text-[5.2rem]">

              Luxury Beauty

              <span className="mt-2 block bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] bg-clip-text text-transparent">
                Crafted With Elegance
              </span>

            </h2>

            <p className="mt-5 max-w-[680px] text-[13px] font-semibold italic leading-[1.9] text-[#7B2D42] sm:text-[14px] lg:text-[15px]">
              Where luxury meets artistry, and beauty becomes an unforgettable experience.
            </p>

            <div className="mt-6 space-y-4">

              <p className="text-[13px] leading-[1.95] text-[#5C4A4A] sm:text-[14px] lg:text-[15px]">
                Founded by celebrity makeup artist Gunjan Sajwan,
                Bling by Gunjan Luxe Salon is Dehradun’s premium
                destination for bridal artistry, salon luxury,
                and timeless beauty experiences.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#5C4A4A] sm:text-[14px] lg:text-[15px]">
                From flawless bridal transformations to luxury hair,
                skin, and spa experiences, every service is designed
                to deliver confidence, elegance, and sophistication.
              </p>

            </div>

            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "Luxury Bridal Studio",
                "Celebrity Makeup Artist",
                "Premium Beauty Services",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-[#5B1E2D]/10 bg-white/80 px-3.5 py-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#5B1E2D] shadow-[0_8px_20px_rgba(91,30,45,0.04)] backdrop-blur-xl sm:px-4 sm:text-[9px]"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <a
                href={location}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[22px] border border-[#5B1E2D]/10 bg-white/80 p-4 shadow-[0_15px_40px_rgba(91,30,45,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(91,30,45,0.10)] sm:p-5"
              >

                <div className="absolute right-[-25px] top-[-25px] h-[80px] w-[80px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

                <div className="relative flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] text-white shadow-[0_10px_25px_rgba(91,30,45,0.20)]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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

                  <div>

                    <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#D4A373]">
                      Visit Salon
                    </p>

                    <h4 className="mt-1 text-[14px] font-black text-[#1E1616]">
                      Get Directions
                    </h4>

                    <p className="mt-1 text-[11px] text-[#5C4A4A]">
                      Dehradun, Uttarakhand
                    </p>

                  </div>

                </div>

              </a>

              <div className="group relative overflow-hidden rounded-[22px] border border-[#5B1E2D]/10 bg-white/80 p-4 shadow-[0_15px_40px_rgba(91,30,45,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(91,30,45,0.10)] sm:p-5">

                <div className="absolute right-[-25px] top-[-25px] h-[80px] w-[80px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

                <div className="relative flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] text-white shadow-[0_10px_25px_rgba(91,30,45,0.20)]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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

                  <div>

                    <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#D4A373]">
                      Opening Hours
                    </p>

                    <h4 className="mt-1 text-[14px] font-black text-[#1E1616]">
                      10 AM — 8 PM
                    </h4>

                    <p className="mt-1 text-[11px] text-[#5C4A4A]">
                      Open all days
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}