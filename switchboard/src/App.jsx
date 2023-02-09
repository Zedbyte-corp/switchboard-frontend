import './App.css';
import React, { useEffect, useState } from 'react';
import PageRoutes from "./Routes/Routes";
import Header from './Components/Header/header.component';
import Footer from './Components/Footer/footer.component';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ImageTrailComp, importAll, loadImage, preloadFonts } from './utils';
import { useDispatch } from "react-redux";
import { setLandingImages, setScrollEventImagesOne, setScrollEventImagesTwo, setScrollWeddingImagesOne, setScrollWeddingImagesTwo } from './Redux/actions/images.action';
import LocomotiveScroll from 'locomotive-scroll';
// import { useLocation } from "react-router-dom";
// import { GetSEOData } from './Services/networkCall';

function App() {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const [ismobile, setIsmobile] = useState(false)
  // const location = useLocation();

  // useLayoutEffect(() => {
  //   if (window.screen.width <= 760 && location.pathname === "/") {
  //     setIsmobile(true)
  //     console.log("location",location.pathname)
  //     console.log("width", windowSize.current[0])
  //   }else{
  //     setIsmobile(false)
  //   }

  //  }, [location, windowSize])

  //  useEffect(()=>{
  //   console.log("from App.js file");
  //   GetSEOData()
  //  },[])

  //  useLayoutEffect(() => {
  //   console.log("width", windowSize.current[0])
  //  }, [])

  const landing = importAll(
    require.context("./Assets/Images/Landing", false, /\.(png|jpe?g|svg)$/)
  );
  const scrollEventOne = importAll(
    require.context("./Assets/Images/ScrollGalleryOneEvent", false, /\.(png|jpe?g|svg)$/)
  );

  const scrollEventTwo = importAll(
    require.context("./Assets/Images/ScrollGalleryTwoEvent", false, /\.(png|jpe?g|svg)$/)
  );
  const scrollWeddingOne = importAll(
    require.context("./Assets/Images/ScrollGalleryOneWedding", false, /\.(png|jpe?g|svg)$/)
  );

  const scrollWeddingTwo = importAll(
    require.context("./Assets/Images/ScrollGalleryTwoWedding", false, /\.(png|jpe?g|svg)$/)
  );



  useEffect(() => {

    (async () => {
      Promise.all([
        preloadFonts(),
        Object.keys(landing).map((key, value) => loadImage(landing[key])),
        Object.keys(scrollEventOne).map((key, value) => loadImage(scrollEventOne[key])),
        Object.keys(scrollEventTwo).map((key, value) => loadImage(scrollEventTwo[key])),
        Object.keys(scrollWeddingOne).map((key, value) => loadImage(scrollWeddingOne[key])),
        Object.keys(scrollWeddingTwo).map((key, value) => loadImage(scrollWeddingTwo[key])),
      ])
        .then(() => {

          // throw ("a");
          dispatch(setLandingImages(landing));
          dispatch(setScrollEventImagesOne(scrollEventOne));
          dispatch(setScrollEventImagesTwo(scrollEventTwo));
          dispatch(setScrollWeddingImagesOne(scrollWeddingOne));
          dispatch(setScrollWeddingImagesTwo(scrollWeddingTwo));
          const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            inertia: 0.8,
            smooth: true,
            getDirection: true,
            smoothMobile: false,
          });
          ImageTrailComp();
          new ResizeObserver(() => scroll.update()).observe(
            document.querySelector("[data-scroll-container]")
          );
          setMounted(true);

        })
        .catch(err => { console.log("Failed to load images", err); setError(true) })
    })();




    // menu(resultJson, category)
  }, [])


  return (
    <div data-scroll-container>{error ?
      <div className='app-main-container' >
        Some problem
      </div >
      :
      mounted ?
        <div className='app-main-container' >
          <Header />
          <PageRoutes />
          <Footer />
        </div>
        :
        <div className='app-main-container'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          Please Wait, Site is getting ready
        </div>}
    </div>
  );
}

export default App;
