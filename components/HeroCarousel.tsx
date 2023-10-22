"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImage = [
  {
    imgUrl: "/assets/images/hero-1.svg",
    alt: "smartwatch",
  },
  {
    imgUrl: "/assets/images/hero-2.svg",
    alt: "bag",
  },
  {
    imgUrl: "/assets/images/hero-3.svg",
    alt: "lamp",
  },
  {
    imgUrl: "/assets/images/hero-4.svg",
    alt: "smarsstwatch",
  },
  {
    imgUrl: "/assets/images/hero-5.svg",
    alt: "smartwasstch",
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showArrows={false}
      >
        {heroImage.map((img) => (
          <Image
            src={img.imgUrl}
            alt={img.alt}
            width={484}
            height={484}
            key={img.alt}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image
        src={"assets/icons/hand-drawn-arrow.svg"}
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
