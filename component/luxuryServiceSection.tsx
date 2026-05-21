export default function LuxuryServicesSection() {
  const services = [
    {
      title: "Bridal & Celebrity Makeup",
      description:
        "Luxury bridal transformations, engagement makeup, HD makeup, airbrush makeup, party glam, editorial looks, and destination wedding services tailored to your unique personality.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Luxury Hair Studio",
      description:
        "Precision haircuts, global coloring, balayage, keratin, hair spa, extensions, and styling designed by expert professionals.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Skin & Facial Lounge",
      description:
        "Advanced facials, glow therapies, anti-aging treatments, hydration rituals, and premium skincare solutions for radiant, healthy skin.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Nails & Beauty Bar",
      description:
        "Luxury manicures, pedicures, nail art, gel extensions, lash enhancements, and beauty essentials crafted with perfection.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Spa & Wellness",
      description:
        "Relaxing spa therapies and rejuvenation rituals created to refresh your mind, body, and soul.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#7e4b56]/6 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#b97885]/8 blur-3xl"></div>

      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-[980px] text-center">

          <div className="inline-flex items-center rounded-full border border-[#7e4b56]/10 bg-[#fff8f6] px-5 py-2.5 shadow-[0_12px_35px_rgba(126,75,86,0.06)]">

            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8c5360]"></span>

            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8c5360] sm:text-[11px]">
              Luxury Beauty Experiences
            </span>
          </div>

          <h2 className="mt-7 text-[2.7rem] font-black leading-[0.9] tracking-[-0.09em] text-[#130e0f] sm:text-[4rem] lg:text-[5.4rem] xl:text-[6rem]">

            Our Signature

            <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
            At Bling by Gunjan Luxe Salon, every experience is thoughtfully
            curated to blend luxury, artistry, elegance, and personalized
            beauty care — creating transformations that feel timeless,
            sophisticated, and unforgettable.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[34px] border border-[#7e4b56]/10 bg-[#fff8f6] shadow-[0_24px_70px_rgba(126,75,86,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_rgba(126,75,86,0.14)] ${
                index === 0
                  ? "sm:col-span-2 xl:col-span-2"
                  : ""
              } ${
                index === 4
                  ? "sm:col-span-2 xl:col-span-1"
                  : ""
              }`}
            >

              <div className="relative overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    index === 0
                      ? "h-[320px] sm:h-[420px]"
                      : "h-[260px] sm:h-[320px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#130e0f]/70 via-[#130e0f]/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">

                  <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white">
                      Signature Luxury Service
                    </span>

                  </div>

                  <h3 className="mt-4 text-[1.7rem] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[2rem]">
                    {service.title}
                  </h3>

                </div>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px]">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex items-center">

                    <div className="h-2.5 w-2.5 rounded-full bg-[#8c5360]"></div>

                    <div className="ml-2 h-[1px] w-14 bg-[#7e4b56]/20"></div>

                  </div>

                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8c5360]">
                    Luxury Experience
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 rounded-[38px] border border-[#7e4b56]/10 bg-[#fff8f6] p-8 shadow-[0_30px_90px_rgba(126,75,86,0.08)] sm:p-10 lg:p-14">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <h3 className="text-[2rem] font-black leading-[0.95] tracking-[-0.06em] text-[#130e0f] sm:text-[3rem] lg:text-[4rem]">

                Beauty That Feels

                <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
                  Personal & Timeless
                </span>
              </h3>

              <p className="mt-7 max-w-[620px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[17px]">
                At Bling by Gunjan Luxe Salon, beauty is not just about
                appearance — it’s about confidence, individuality, elegance,
                and creating experiences that leave you feeling empowered,
                radiant, and unforgettable.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-6 shadow-[0_20px_60px_rgba(126,75,86,0.06)]">

                <h4 className="text-[2rem] font-black text-[#8c5360]">
                  12+
                </h4>

                <p className="mt-2 text-sm font-semibold leading-[1.8] text-[#5d4f52]">
                  Years of Luxury Beauty Expertise
                </p>

              </div>

              <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-6 shadow-[0_20px_60px_rgba(126,75,86,0.06)]">

                <h4 className="text-[2rem] font-black text-[#8c5360]">
                  5K+
                </h4>

                <p className="mt-2 text-sm font-semibold leading-[1.8] text-[#5d4f52]">
                  Bridal & Premium Beauty Clients
                </p>

              </div>

              <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-6 shadow-[0_20px_60px_rgba(126,75,86,0.06)]">

                <h4 className="text-[2rem] font-black text-[#8c5360]">
                  Luxe
                </h4>

                <p className="mt-2 text-sm font-semibold leading-[1.8] text-[#5d4f52]">
                  Premium Products & Personalized Care
                </p>

              </div>

              <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-6 shadow-[0_20px_60px_rgba(126,75,86,0.06)]">

                <h4 className="text-[2rem] font-black text-[#8c5360]">
                  Elite
                </h4>

                <p className="mt-2 text-sm font-semibold leading-[1.8] text-[#5d4f52]">
                  Celebrity-Level Beauty Experience
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}