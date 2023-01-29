import { TParentElem, TChildElem } from "../utils/Types/types"
import { ICompArg } from "../utils/Interfaces/interfaces"
import { Swiper, EffectFade, Pagination } from "swiper"

export const slidingCompImages = (config: ICompArg): any => {
  const {sectionClass, blockClass, pagination, swiperBullets} = config

  const blockClassEl: TParentElem = document.querySelector(`.${sectionClass}`)
  const blockPagination: TChildElem = blockClassEl?.querySelector(`.${pagination}`)

  Swiper.use([EffectFade, Pagination])

  new Swiper(`.${blockClass}`, {
    effect: "fade",
    speed: 1500,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: blockPagination,
      clickable: true
    }
  })
  
  const bullets = document.querySelectorAll<HTMLElement>(`.${swiperBullets}`)
  const clickByHover = (): void => {
    bullets.forEach(el => {
      el.addEventListener("mouseover", () => {
        el.click()
      })
    })
  }
  clickByHover()
}
