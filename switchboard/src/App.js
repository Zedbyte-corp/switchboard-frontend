import './App.css';
import React, { useEffect, useState } from 'react';
import PageRoutes from "./Routes/Routes";
import Header from './Components/Header/header.component';
import Footer from './Components/Footer/footer.component';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { importAll, loadImage, preloadFonts } from './utils';
import { useDispatch } from "react-redux";
import { setLandingImages, setScrollImages1 } from './Redux/actions/images.action';
import LocomotiveScroll from 'locomotive-scroll';

// import { useLocation } from "react-router-dom";
// import { GetSEOData } from './Services/networkCall';

function App() {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch()
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
  const scrollGalleryOne = importAll(
    require.context("./Assets/Images/ScrollGalleryOne", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    (async () => {
      Promise.all([
        preloadFonts(),
        Object.keys(scrollGalleryOne).map((key, value) => loadImage(scrollGalleryOne[key])),
        Object.keys(landing).map((key, value) => loadImage(landing[key]))
      ])
        .then(() => {
          // throw ("a");
          dispatch(setLandingImages(landing));
          dispatch(setScrollImages1(scrollGalleryOne));
          setMounted(true)
        })
        .catch(err => { console.log("Failed to load images", err); setError(true) })
    })()
      // .then(() =>
      //   new LocomotiveScroll({
      //     el: document.querySelector('[data-scroll-container]'),
      //     smooth: true
      //   })
      // )
      ;
    // menu(resultJson, category)
  }, [])


  return (
    error ?
      <div className='app-main-container'>
        Some problem
      </div>
      :
      mounted ?
        <div className='app-main-container'>
          <Header />
          <PageRoutes />
          <Footer />
        </div> :
        <div className='app-main-container'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          Please Wait, Site is getting ready
        </div>
  );
}

export default App;
