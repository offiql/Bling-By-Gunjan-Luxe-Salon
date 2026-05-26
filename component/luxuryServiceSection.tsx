export default function LuxuryServicesSection() {
  const services = [
    {
      title: "Bridal & Celebrity Makeup",
      description:
        "Luxury bridal artistry, HD makeup, engagement glam, and destination wedding beauty tailored exclusively for you.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
      large: true,
    },
    {
      title: "Luxury Hair Studio",
      description:
        "Precision haircuts, balayage, keratin, global coloring, and luxury styling.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Skin & Facial Lounge",
      description:
        "Glow therapies, hydration rituals, anti-aging facials, and premium skincare.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Nails & Beauty Bar",
      description:
        "Luxury manicures, gel extensions, lash enhancements, and signature nail artistry.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Spa & Wellness",
      description:
        "Relaxing spa therapies and wellness rituals crafted for complete rejuvenation.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#F7EFE5] py-12 sm:py-16 lg:py-20">

      <div className="absolute left-[-180px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#5B1E2D]/10 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[420px] w-[420px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#5B1E2D_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-[900px] text-center">

          <div className="inline-flex items-center rounded-full border border-[#5B1E2D]/10 bg-white/80 px-4 py-2 shadow-[0_8px_18px_rgba(91,30,45,0.05)] backdrop-blur-xl">

            <span className="mr-2 h-2 w-2 rounded-full bg-[#D4A373]"></span>

            <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#5B1E2D] sm:text-[8px]">
              Signature Services
            </span>

          </div>

          <h2 className="mt-4 max-w-[760px] pb-3 text-[1.9rem] font-black leading-[1.06] tracking-[-0.07em] text-[#1E1616] sm:mx-auto sm:text-[2.9rem] lg:text-[4rem] xl:text-[4.8rem]">

            Signature Beauty

            <span className="mt-1 block bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] bg-clip-text pb-1 text-transparent">
              Crafted With Luxury
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
            Every experience at Bling by Gunjan Luxe Salon is thoughtfully curated
            to deliver confidence, elegance, and timeless luxury.
          </p>

        </div>

        <div className="mt-9 grid auto-rows-[230px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">

          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[26px] border border-[#5B1E2D]/10 bg-white shadow-[0_18px_50px_rgba(91,30,45,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(91,30,45,0.10)] ${
                service.large
                  ? "lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >

              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1616]/90 via-[#1E1616]/25 to-transparent"></div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">

                <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-xl">

                  <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-white">
                    Luxury Service
                  </span>

                </div>

                <h3 className="mt-3 max-w-[90%] pb-1 text-[1.2rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[1.5rem] lg:text-[1.75rem]">

                  {service.title}

                </h3>

                <p className={`mt-2 max-w-[92%] text-[11px] leading-[1.8] text-white/75 sm:text-[12px] ${
                  service.large ? "lg:max-w-[70%]" : ""
                }`}>

                  {service.description}

                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-8 rounded-[28px] border border-[#5B1E2D]/10 bg-white/80 p-5 shadow-[0_18px_50px_rgba(91,30,45,0.05)] backdrop-blur-xl sm:p-7 lg:p-8">

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            <div>

              <h3 className="max-w-[700px] pb-3 text-[1.8rem] font-black leading-[1.04] tracking-[-0.06em] text-[#1E1616] sm:text-[2.5rem] lg:text-[3.4rem]">

                Beauty Beyond

                <span className="mt-1 block bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] bg-clip-text pb-1 text-transparent">
                  Ordinary Luxury
                </span>

              </h3>

              <p className="mt-4 max-w-[620px] text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
                Beauty is more than appearance — it’s confidence,
                elegance, individuality, and a luxurious experience
                crafted personally for every client.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {[
                {
                  title: "12+",
                  desc: "Years Expertise",
                },
                {
                  title: "5K+",
                  desc: "Luxury Clients",
                },
                {
                  title: "Luxe",
                  desc: "Premium Products",
                },
                {
                  title: "Elite",
                  desc: "Celebrity Experience",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-[#5B1E2D]/10 bg-[#FDF9F7] p-4 shadow-[0_10px_28px_rgba(91,30,45,0.04)]"
                >

                  <h4 className="text-[1.4rem] font-black text-[#5B1E2D] sm:text-[1.6rem]">
                    {item.title}
                  </h4>

                  <p className="mt-1.5 text-[10px] leading-[1.7] text-[#5C4A4A] sm:text-[11px]">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}