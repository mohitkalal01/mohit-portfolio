import {
  RxDesktop,
  RxMobile,
  RxCode,
  RxLayers,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCode,
    title: "React Development",
    description: "Building modern, interactive web applications using React.js, Next.js, and TypeScript with clean, maintainable code.",
  },
  {
    Icon: RxDesktop,
    title: "Responsive Design",
    description: "Creating mobile-first, responsive websites that work seamlessly across all devices and screen sizes.",
  },
  {
    Icon: RxLayers,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with focus on user experience, accessibility, and modern design principles.",
  },
  {
    Icon: RxMobile,
    title: "Frontend Development",
    description: "Developing frontend solutions using HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap frameworks.",
  },
  {
    Icon: RxRocket,
    title: "Modern Technologies",
    description: "Implementing cutting-edge web technologies and best practices for optimal performance and user experience.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
