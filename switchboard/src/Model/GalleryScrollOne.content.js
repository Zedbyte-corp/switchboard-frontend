import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
// import ImageTrailComp from './imageTrail';
import { preloadImages } from '../utils';

export const GalleryScrollOneContent = (GetThemeStatus) => {
  
  useEffect(() => {
    Promise.all([preloadImages('.tiles__line-img')]).then(() => {
  
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });
      // ImageTrailComp();
    });
  }, [])

  const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  const galleryImageOne = importAll(require.context("../Assets/Images/ScrollGalleryOne", false, /\.(png|jpe?g|svg)$/));

  return  galleryImageOne 
}
