import { Swiper, Navigation, EffectFade, FreeMode, Pagination, Controller } from "swiper"
import type { TChildElem, TParentElem } from "../utils/Types/types"

const intro: TParentElem = document.querySelector(".intro__swiper")
const introBtnNxt: TChildElem = intro?.querySelector(".intro__button-next")
const introBtnPrv: TChildElem = intro?.querySelector(".intro__button-prev")
const introPagination: TChildElem = intro?.querySelector(".intro__pagination")

export const slidingIntro = (): Swiper => {
  Swiper.use([Navigation, Controller, EffectFade, FreeMode, Pagination])

  let introBlock = new Swiper(".intro__swiper", {
    speed: 2000, 
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: introBtnNxt,
      prevEl: introBtnPrv
    },
    pagination: {
      el: introPagination,
      type: "fraction",
    }
  })
  return introBlock
}

export const slidingImageIntro = (): Swiper => {
  Swiper.use([Controller, EffectFade])

  let swiperImage = new Swiper(".intro__swiper-image", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    }
  })
  return swiperImage
}


