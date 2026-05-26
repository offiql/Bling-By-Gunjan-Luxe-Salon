import gallery_1 from "@/assests/gallery/gallery_1.jpeg";
import gallery_2 from "@/assests/gallery/gallery_7.jpeg";
import gallery_3 from "@/assests/gallery/gallery_3.jpeg";
import gallery_4 from "@/assests/gallery/gallery_4.jpeg";
import gallery_5 from "@/assests/gallery/gallery_5.jpeg";
import gallery_6 from "@/assests/gallery/gallery_6.jpeg";

export default function GallerySection() {

  const galleryItems:any = [
    
    {
      type: "image",
      image: gallery_1,
      title: "Celebrity Glam",
      position: "top",
    },
    {
      type: "image",
      image: gallery_2,
      title: "Beauty Studio",
      position: "center",
    },
    {
      type: "video",
      video: "/galleryv3.mp4",
      title: "Luxury Hair",
      position: "top",
    },
    {
      type: "image",
      image: gallery_3,
      title: "Signature Makeup",
      position: "top",
    },
    {
      type: "image",
      image: gallery_4,
      title: "Luxury Experience",
      position: "center",
    },
    {
      type: "video",
      video: "/gallery_v_1.mp4",
      title: "Timeless Beauty",
      position: "top",
    },
    {
      type: "image",
      image: gallery_5,
      title: "Luxury Salon",
      position: "center",
    },
    {
      type: "video",
      video: "/gallery_v2.mp4",
      title: "Luxury Moments",
      position: "center",
    },
    {
      type: "image",
      image: gallery_6,
      title: "Beauty Elegance",
      position: "top",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#F7EFE5] py-12 sm:py-16 lg:py-20"
    >

      <div className="absolute left-[-180px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#5B1E2D]/10 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[420px] w-[420px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#5B1E2D_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-[860px] text-center">

          <div className="inline-flex items-center rounded-full border border-[#5B1E2D]/10 bg-white/80 px-4 py-2 shadow-[0_8px_18px_rgba(91,30,45,0.05)] backdrop-blur-xl">

            <span className="mr-2 h-2 w-2 rounded-full bg-[#D4A373]"></span>

            <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#5B1E2D] sm:text-[8px]">
              Luxury Gallery
            </span>

          </div>

          <h2 className="mt-4 max-w-[760px] pb-3 text-[1.9rem] font-black leading-[1.06] tracking-[-0.07em] text-[#1E1616] sm:mx-auto sm:text-[2.9rem] lg:text-[4rem] xl:text-[4.8rem]">

            Beauty In Every

            <span className="mt-1 block bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] bg-clip-text pb-1 text-transparent">
              Luxury Detail
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
            Explore timeless bridal artistry, luxury beauty experiences,
            and elegant transformations crafted at Bling by Gunjan Luxe Salon.
          </p>

        </div>

        <div className="mt-10 columns-2 gap-3  mx-auto space-y-3 sm:columns-3  lg:gap-4 lg:space-y-4">

          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[30px] border border-[#5B1E2D]/10 bg-white p-2 shadow-[0_18px_50px_rgba(91,30,45,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(91,30,45,0.14)] lg:mb-4"
            >

              <div className="relative overflow-hidden rounded-[24px]">

                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ objectPosition: item.position }}
                    className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image.src}
                    alt={item.title}
                    style={{ objectPosition: item.position }}
                    className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#140f10]/90 via-[#140f10]/20 to-transparent"></div>

                
                <div className="absolute right-4 top-4 opacity-0 transition-all duration-500 group-hover:opacity-100">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl">

                    <div className="h-2 w-2 rounded-full bg-[#D4A373]"></div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">

          {[
            {
              title: "Bridal",
              desc: "Elegant bridal artistry crafted with timeless luxury.",
            },
            {
              title: "Luxury",
              desc: "Sophisticated salon experiences with premium ambience.",
            },
            {
              title: "Beauty",
              desc: "Personalized transformations celebrating individuality.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] border border-[#5B1E2D]/10 bg-white/80 p-5 shadow-[0_12px_35px_rgba(91,30,45,0.05)] backdrop-blur-xl"
            >

              <h3 className="text-[1.35rem] font-black tracking-[-0.05em] text-[#5B1E2D] sm:text-[1.55rem]">
                {item.title}
              </h3>

              <p className="mt-2 text-[11px] leading-[1.8] text-[#5C4A4A] sm:text-[12px] lg:text-[13px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}