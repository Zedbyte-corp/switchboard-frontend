import { Routes, Route } from "react-router-dom";
import { siteMap } from "./SiteMap";

import Home from "../Pages/Home/Home";

const PageRoutes = () => {
  return (
      <Routes>
        <Route path={siteMap.HomePage.path} element={<Home />} />
      </Routes>
  );
};

export default PageRoutes;
