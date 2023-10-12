import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function BeforeImages() {
  return (
    <div className="w-full flex flex-col gap-11 my-16">
      <div className="w-[85%] m-auto flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[50%] flex justify-end ">
          <div className="w-full lg:w-[80%] flex flex-col items-end  ">
            <p className="text-[32px] text-[#19315B] font-bold mb-4 self-start">
              {" "}
              Before Images
            </p>
            <p>
              Prosource's team comprises dedicated professionals with expertise
              in sales, marketing, customer service, and automotive knowledge.
              Their deep understanding of customer needs and the automotive
              industry enables them to provide exceptional service, personalized
              solutions, and transparent transactions. Together, they work
              collaboratively to ensure a seamless and joyful car-buying
              experience, with a commitment to spreading happiness and exceeding
              customer expectations.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-end justify-center">
          <div className="cursor-pointer bg-[#002E5C] hover:bg-white hover:border-2 text-white hover:!text-[#002E5C] hover:border-[#002E5C] w-[190px] h-[58px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
            <p className="  font-semibold">View All Services</p>
          </div>
        </div>
      </div>

      <Swiper
        style={{ width: "95%", margin: "auto" }}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-400 w-full h-[400px]">img</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}