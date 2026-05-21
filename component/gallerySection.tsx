export default function GallerySection() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop",
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
              Luxury Gallery
            </span>

          </div>

          <h2 className="mt-7 text-[2.7rem] font-black leading-[0.9] tracking-[-0.09em] text-[#130e0f] sm:text-[4rem] lg:text-[5.4rem] xl:text-[6rem]">

            Our Beauty

            <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
              Gallery
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
            Explore timeless bridal transformations, luxury beauty artistry,
            glamorous makeovers, and elegant salon experiences crafted at
            Bling by Gunjan Luxe Salon.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[26px] border border-[#7e4b56]/10 bg-[#fff8f6] p-2 shadow-[0_20px_60px_rgba(126,75,86,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(126,75,86,0.14)] sm:rounded-[32px] ${
                index === 0 || index === 5 || index === 10
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
            >

              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px]">

                <img
                  src={image}
                  alt="Luxury Salon Gallery"
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    index === 0 || index === 5 || index === 10
                      ? "h-[420px] sm:h-[520px] lg:h-[620px]"
                      : "h-[200px] sm:h-[240px] lg:h-[300px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#130e0f]/70 via-[#130e0f]/10 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

                <div className="absolute bottom-0 left-0 w-full translate-y-10 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">

                  <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white">
                      Luxury Beauty
                    </span>

                  </div>

                  <h3 className="mt-4 text-[1.4rem] font-black leading-[1] tracking-[-0.04em] text-white sm:text-[1.7rem]">
                    Bling by Gunjan
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 rounded-[38px] border border-[#7e4b56]/10 bg-[#fff8f6] p-8 shadow-[0_30px_90px_rgba(126,75,86,0.08)] sm:p-10 lg:p-14">

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <h3 className="text-[2.3rem] font-black text-[#8c5360]">
                Bridal
              </h3>

              <p className="mt-3 text-[15px] leading-[2] text-[#5d4f52]">
                Timeless bridal artistry designed with elegance, glamour,
                and luxury detailing.
              </p>

            </div>

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <h3 className="text-[2.3rem] font-black text-[#8c5360]">
                Luxe
              </h3>

              <p className="mt-3 text-[15px] leading-[2] text-[#5d4f52]">
                Premium salon ambience and sophisticated beauty experiences
                crafted for modern luxury.
              </p>

            </div>

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <h3 className="text-[2.3rem] font-black text-[#8c5360]">
                Beauty
              </h3>

              <p className="mt-3 text-[15px] leading-[2] text-[#5d4f52]">
                Personalized beauty transformations celebrating confidence,
                elegance, and individuality.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}