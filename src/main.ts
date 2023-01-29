import "swiper/css/bundle"

import { slidingIntro, slidingImageIntro } from "./components/intro"
import { slidingTicker } from "./components/ticker"
import { scrollingAnimation } from "./components/header"
import { slidingCompImages } from "./components/composition"

document.addEventListener("DOMContentLoaded", () => {
  slidingIntro().controller.control = slidingImageIntro()
  slidingImageIntro().controller.control = slidingIntro()

  slidingTicker()
  scrollingAnimation()
  slidingCompImages({
    sectionClass: "composition",
    blockClass: "composition__block-image",
    pagination: "composition__pagination",
    swiperBullets: "swiper-pagination-bullet"
  })
  slidingCompImages({
    sectionClass: "develop",
    blockClass: "develop__block-image",
    pagination: "develop__pagination",
    swiperBullets: "swiper-pagination-bullet"
  })
})

export {}