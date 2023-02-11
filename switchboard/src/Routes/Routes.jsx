import { Routes, Route } from "react-router-dom";
import { siteMap } from "./SiteMap";

import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Team from "../Pages/Team/Team";


const PageRoutes = () => {
  return (
      <Routes>
        <Route path={siteMap.HomePage.path} element={<Home />} />
        <Route path={siteMap.GalleryPage.path} element={<Gallery />} />
        <Route path={siteMap.TeamPage.path} element={<Team />} />
      </Routes>
  );
};

export default PageRoutes;
