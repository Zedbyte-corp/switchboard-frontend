import "./header.component.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { siteMap } from "../../Routes/SiteMap";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from 'react-router-dom';
import WHITELOGO from '../../Assets/logo-white.svg'
import BLACKLOGO from '../../Assets/logo-black.svg'
// import { store } from "../../";
// import { setProductPage } from '../../Redux/actions/product.action';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState("event-theme")
  const [logo, setLogo] = useState(WHITELOGO)
  const [menuColor, setMenuColor] = useState("#dee0dc")
  const [headerBg, setHeaderBg] = useState("transparent")
  const open = Boolean(anchorEl);

  useEffect(() => {
    
    // var header = document.getElementById("Header");
    console.log("header", document.body.scrollTop);
    if(location.pathname === siteMap.GalleryPage.path || location.pathname === siteMap.TeamPage.path){
      setHeaderBg("white")
      setMenuColor("black")
      setLogo(BLACKLOGO)
      // document.getElementById("header").style.color = "blue";
    }else{
      setHeaderBg("transparent")
      setMenuColor("#dee0dc")
      setLogo(WHITELOGO)
    }
    document.body.setAttribute("data-theme", theme)
  }, [theme,location, window])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeToHome = () => {
    navigate(siteMap.HomePage.path, { replace: false });
    handleClose()
  }

  const routeToTeam = () => {
    navigate(siteMap.TeamPage.path, { replace: true });
    // setTheme("wedding-theme")
  }

  const routeToGallery = () => {
    navigate(siteMap.GalleryPage.path, { replace: true });
    // setTheme("event-theme")
  }


  const start = window.performance.now();
  // Your operation
  const totalTimeTaken = window.performance.now() - start;
  console.log(totalTimeTaken);

  return (
    <header id="Header" className="header-main-container" style={{backgroundColor:headerBg}} data-scroll data-scroll-sticky data-scroll-target="#scroll-container">

      <div className="header-logo-container" onClick={() => { routeToHome() }}>
        <img className="header-logo" src={logo} alt="" />
        {/* LOGO */}
      </div>
      <div className="header-menu-container">
        <div className="desktop-menu">
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToHome() }}>Home</MenuItem>
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToGallery() }}>Gallery</MenuItem>
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToTeam() }}>Our Team</MenuItem>
        </div>
        <div className="header-mobile-menu">
          <div onClick={handleClick}>
            <MenuIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className="header-mobile-menu-item" onClick={() => { routeToHome() }}>Home</MenuItem>
            <MenuItem className="header-menu-item" onClick={() => { routeToGallery() }}>Gallery</MenuItem>
            <MenuItem className="header-menu-item" onClick={() => { routeToTeam() }}>Our Team</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  )
}
export default Header