import { Swiper, Autoplay } from "swiper";

export const slidingTicker = (): void => {
  Swiper.use([Autoplay])

  new Swiper(".ticker", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    }
  })
}