import './GalleryScrollOne.css'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import ImageTrailComp from '../../../imageTrail';
import { preloadImages } from '../../../utils';
import { importAll } from '../../../utils';
// import sfs from "../../../Assets/Images/ScrollGalleryOne"


const GalleryScrollOne = () => {

  useEffect(() => {
    // Promise.all([preloadImages('.tiles__line-img')]).then(() => {

    //   const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    //   });
    //   ImageTrailComp();
    // });
  }, [])



  const galleryImageOne = importAll(require.context("../../../Assets/Images/ScrollGalleryOne", false, /\.(png|jpe?g|svg)$/));

  return (
    // <div className="GalleryScrollOne-main-container">
    <main data-scroll-container >

      <section className="tiles tiles--rotated" id="grid2">
        <div className="tiles__wrap">
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            {Object.keys(galleryImageOne).map((key, value) => {
              if (value >= 0 && value <= 2)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${galleryImageOne[key]})` }}></div>
            })}
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            {Object.keys(galleryImageOne).map((key, value) => {

              if (value >= 3 && value <= 8)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${galleryImageOne[key]})` }}></div>
            })}
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            {Object.keys(galleryImageOne).map((key, value) => {

              if (value >= 8 && value <= 13)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${galleryImageOne[key]})` }}></div>
            })}
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            {Object.keys(galleryImageOne).map((key, value) => {

              if (value >= 13 && value <= 17)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${galleryImageOne[key]})` }}></div>
            })}
            <div className="tiles__line-img"></div>
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            {Object.keys(galleryImageOne).map((key, value) => {

              if (value >= 18 && value <= 20)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${galleryImageOne[key]})` }}></div>
            })}
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
          </div>
        </div>
      </section >
    </main>
    // </div>
  )
}
export default GalleryScrollOne