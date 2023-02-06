import './App.css';
import React from 'react';
import PageRoutes from "./Routes/Routes";
import Header from './Components/Header/header.component';
import Footer from './Components/Footer/footer.component';
// import { useLocation } from "react-router-dom";
// import { GetSEOData } from './Services/networkCall';

function App() {
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

 


  return (
    <div className='app-main-container'>
      <Header/>
      <PageRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
