import { TParentElem } from "../utils/Types/types"

const header: TParentElem = document.querySelector(".header")

export const scrollingAnimation = (): void => {
  window.addEventListener("scroll", () => {
    let distanceHeight: number = window.scrollY

    if(distanceHeight > 20) {
      header?.classList.add("header_active")
    }
    else {
      header?.classList.remove("header_active")
    }
  })
}
