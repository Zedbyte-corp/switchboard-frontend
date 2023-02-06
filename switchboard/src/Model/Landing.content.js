import eventBg from "../Assets/Images/Landing/event-bg.png"
import weddingBg from "../Assets/Images/Landing/wedding-bg.png"


export const landingPageContent = (GetThemeStatus) => {
  
  return {
    image: !GetThemeStatus ? eventBg : weddingBg,
    heading: "we are SWITCHBOARD",
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
