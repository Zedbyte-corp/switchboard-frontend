import "./header.component.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { siteMap } from "../../Routes/SiteMap";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import LOGO from '../../Assets/logo.png'
// import { store } from "../../";
// import { setProductPage } from '../../Redux/actions/product.action';


const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState("event-theme")
  const open = Boolean(anchorEl);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme])

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
    setTheme("wedding-theme")
  }

  const routeToGallery = () => {
    setTheme("event-theme")
  }


  const start = window.performance.now();
  // Your operation
  const totalTimeTaken = window.performance.now() - start;
  console.log(totalTimeTaken);

  return (
    <header className="header-main-container">
      <div className="header-logo-container" onClick={() => { routeToHome() }}>
        {/* <img className="header-logo" src={LOGO} alt="" /> */}
        LOGO
      </div>
      <div className="header-menu-container">
        <div className="desktop-menu">
          <MenuItem className="header-menu-item" onClick={() => { routeToHome() }}>Home</MenuItem>
          <MenuItem className="header-menu-item" onClick={() => { routeToGallery() }}>Gallery</MenuItem>
          <MenuItem className="header-menu-item" onClick={() => { routeToTeam() }}>Our Team</MenuItem>
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