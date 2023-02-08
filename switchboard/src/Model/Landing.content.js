import eventBg from "../Assets/Images/Landing/event-bg.png"
import weddingBg from "../Assets/Images/Landing/wedding-bg.png"
// import { useSelector } from "react-redux";


export const landingPageContent = (GetThemeStatus, landingImages) => {
  // const a = useSelector(state => state.landingImages)

  return {
    image: !GetThemeStatus ? landingImages[Object.keys(landingImages)[0]] : landingImages[Object.keys(landingImages)[1]],
    // image: !GetThemeStatus ? a[Object.keys(a)[0]] : a[Object.keys(a)[1]],
    heading: "we are ",
    companyName: "SWITCHBOARD",
    content: "SWITCHBOARD is an event organizing company that specializes in delivering seamless  event experiences for clients whether it's a corporate conference, a personal celebration, or a community gathering, you name it, our team of experts is dedicated to bringing your vision to life and making sure every detail is taken care of.",
    buttons: [
      {
        button_name: "Events"
      },
      {
        button_name: "Wedding"
      }
    ]
  }
}
