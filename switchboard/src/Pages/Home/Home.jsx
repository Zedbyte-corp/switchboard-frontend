import "./Home.css";
import Landing from "./Landing-Section/Landing";
import GalleryScrollOne from "./GalleryScrollOne-Section/GalleryScrollOne";
import WhyUs from "./WhyUs-Section/WhyUs";
import Events from "./Events-Section/Events";
import InNumbers from "./InNumbers-Section/InNumbers";
import OurWorks from "./OurWorks-Section/OurWorks";
import Testimonials from "./Testimonial-Section/Testimonials";
import Team from "./Team-Section/Team";
import GalleryScrollTwo from "./GalleryScrollTwo-Section/GalleryScrollTwo";


const Home = () => {

  return (   
    <div className="home-main-container">
      <Landing/>
      <GalleryScrollOne/>
      <WhyUs/>
      <Events/>
      <InNumbers/>
      <OurWorks/>
      <Testimonials/>
      <Team/>
      <GalleryScrollTwo/>
    </div>
  )
}
export default Home