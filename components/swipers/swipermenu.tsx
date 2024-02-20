import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { useState } from "react";

SwiperCore.use([Autoplay, Pagination]);

interface dummy {
    realIndex: number;
}

export const SwiperMenu = () => {
    const [activeImg, setActiveImg] = useState(0);
    const images = [
        "/bannerimage/배너이미지1.png",
        "/bannerimage/배너이미지2.png",
        "/bannerimage/배너이미지3.png",
        "/bannerimage/배너이미지4.png",
        "/bannerimage/배너이미지5.jpg",
        "/bannerimage/배너이미지6.png",
    ];

    const handleSlideNum = (swiper: dummy) => {
        setActiveImg(swiper.realIndex);
    };

    return (
        <div className="w-full my-8">
            <div className="relative cursor-pointer">
                <div className="z-0">
                    <div className="mx-auto relative overflow-hidden list-none p-0 z-10 border-none rounded-lg">
                        <Swiper
                            onSlideChange={handleSlideNum}
                            modules={[Autoplay, Pagination]}
                            spaceBetween={50}
                            speed={800}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="relative w-full h-full z-10 flex"
                                        style={{
                                            boxSizing: "content-box",
                                            transitionProperty: "transform",
                                            transitionTimingFunction:
                                                "var(--swiper-wrapper-transition-timing-function, initial)",
                                            background: `url(${image}) no-repeat center center`,
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <img
                                            src={image}
                                            className="w-full h-auto"
                                            alt={`Slide ${index}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="absolute bg-swiper-num border-solid rounded-[44px] text-xs font-bold text-white bottom-4 right-4 pt-1 px-3 pb-[3px] z-10">
                                {activeImg + 1} / {images.length}
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
