export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff8f6] pb-14 pt-6 sm:pb-20 sm:pt-8 lg:pb-28 lg:pt-10">

      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#7e4b56]/10 blur-3xl"></div>

      <div className="absolute bottom-[-260px] right-[-240px] h-[620px] w-[620px] rounded-full bg-[#b97885]/12 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#7e4b56_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-24">

          <div className="relative z-10">

            <div className="inline-flex items-center rounded-full border border-[#7e4b56]/10 bg-white/85 px-5 py-2.5 shadow-[0_12px_35px_rgba(126,75,86,0.08)] backdrop-blur-2xl">

              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8c5360]"></span>

              <span className="text-[10px] font-black uppercase tracking-[0.42em] text-[#8c5360] sm:text-[11px]">
                Luxury Beauty Destination
              </span>

            </div>

           <h1 className="mt-8 max-w-[920px] text-[2.8rem] font-black leading-[0.9] tracking-[-0.08em] text-[#140f10] sm:text-[3.8rem] md:text-[4.7rem] lg:text-[5.5rem] xl:text-[6.2rem] 2xl:text-[6.8rem]">

  Where Beauty Meets

  <span className="mt-2 block bg-gradient-to-r from-[#6f404b] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
    Luxury &
  </span>

  <span className="mt-1 block text-[#140f10]">
    Timeless Glamour
  </span>

</h1>

            <p className="mt-8 max-w-[760px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px] xl:text-[19px]">
              Experience celebrity makeup artistry, premium bridal beauty,
              luxury salon experiences, flawless transformations, and timeless
              elegance crafted exclusively at Bling By Gunjan Luxe Salon.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Celebrity Makeup Artist",
                "Luxury Bridal Studio",
                "Premium Beauty Experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-[#7e4b56]/10 bg-white/90 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#8c5360] shadow-[0_12px_30px_rgba(126,75,86,0.06)] backdrop-blur-xl sm:text-[11px]"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <div className="group relative overflow-hidden rounded-[32px] border border-[#7e4b56]/10 bg-white/90 p-5 shadow-[0_24px_70px_rgba(126,75,86,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(126,75,86,0.14)]">

                <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-[#b97885]/10 blur-3xl"></div>

                <div className="relative flex items-center">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_20px_45px_rgba(126,75,86,0.24)]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
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

                  <div className="ml-5 min-w-0">

                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8c5360]">
                      Contact Us
                    </p>

                    <h3 className="mt-2 truncate text-[1.15rem] font-black text-[#140f10] sm:text-[1.22rem]">
                      +91 98765 43210
                    </h3>

                  </div>

                </div>

              </div>

              <div className="group relative overflow-hidden rounded-[32px] border border-[#7e4b56]/10 bg-white/90 p-5 shadow-[0_24px_70px_rgba(126,75,86,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(126,75,86,0.14)]">

                <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-[#b97885]/10 blur-3xl"></div>

                <div className="relative flex items-center">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_20px_45px_rgba(126,75,86,0.24)]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
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

                  <div className="ml-5 min-w-0">

                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8c5360]">
                      Visit Our Salon
                    </p>

                    <h3 className="truncate text-[1.15rem] font-black text-[#140f10] sm:text-[1.22rem]">
                      Dehradun, Uttarakhand
                    </h3>

                  </div>

                </div>

              </div>

            </div>

            <div className="relative mt-14 overflow-hidden rounded-[40px] border border-[#7e4b56]/10 bg-white/90 p-6 shadow-[0_35px_100px_rgba(126,75,86,0.10)] backdrop-blur-2xl sm:p-8 lg:p-10">

              <div className="absolute right-[-50px] top-[-50px] h-[180px] w-[180px] rounded-full bg-[#b97885]/12 blur-3xl"></div>

              <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">

                <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[30px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] text-[2.2rem] font-black text-white shadow-[0_28px_60px_rgba(126,75,86,0.28)]">
                  G
                </div>

                <div className="flex-1">

                  <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#8c5360] sm:text-[11px]">
                    The Artist Behind Timeless Beauty
                  </p>

                  <h2 className="mt-4 text-[2.2rem] font-black leading-[0.9] tracking-[-0.07em] text-[#140f10] sm:text-[2.7rem] lg:text-[3rem]">
                    Gunjan Sajwan
                  </h2>

                  <p className="mt-4 text-[1rem] font-black italic text-[#8c5360] sm:text-[1.08rem]">
                    “Crafting Beauty with Elegance & Expertise.”
                  </p>

                  <p className="mt-5 max-w-[780px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[17px]">
                    Renowned celebrity and bridal makeup artist with over
                    12 years of expertise in luxury beauty artistry,
                    transforming brides, influencers, and personalities
                    through signature elegance, glamour, sophistication,
                    and flawless attention to detail.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="relative mt-4 lg:mt-0">

            <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7e4b56]/14 to-[#b97885]/12 blur-3xl"></div>

            <div className="relative mx-auto max-w-[780px]">

              <div className="absolute -left-5 top-10 hidden rounded-[34px] border border-white/50 bg-white/92 p-6 shadow-[0_35px_90px_rgba(126,75,86,0.16)] backdrop-blur-2xl xl:block">

                <h3 className="text-[2.6rem] font-black text-[#8c5360]">
                  4.9★
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#5d4f52]">
                  Luxury Client Satisfaction
                </p>

              </div>

              <div className="absolute -bottom-6 -right-4 hidden rounded-[34px] border border-white/50 bg-white/92 p-6 shadow-[0_35px_90px_rgba(126,75,86,0.16)] backdrop-blur-2xl xl:block">

                <h3 className="text-[2.6rem] font-black text-[#8c5360]">
                  12+
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#5d4f52]">
                  Years Beauty Expertise
                </p>

              </div>

              <div className="relative overflow-hidden rounded-[46px] border border-white/60 bg-white p-3 shadow-[0_55px_140px_rgba(126,75,86,0.18)]">

                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop"
                  alt="Bling By Gunjan Luxe Salon"
                  className="h-[440px] w-full rounded-[38px] object-cover sm:h-[620px] md:h-[760px] xl:h-[900px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#140f10]/35 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-10">

                  <div className="max-w-[420px] rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl">

                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">
                      Bling By Gunjan Luxe Salon
                    </p>

                    <h3 className="mt-4 text-[2rem] font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-[2.5rem]">
                      Luxury Beauty
                      <span className="mt-1 block">
                        Crafted Perfectly
                      </span>
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.9] text-white/80 sm:text-[15px]">
                      A premium destination for bridal artistry,
                      celebrity makeup, luxury beauty experiences,
                      and timeless elegance.
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