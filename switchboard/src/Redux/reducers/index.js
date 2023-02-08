import theme from "./Theme/theme";
import mobile from "./Mobile/ismobile";
import { landingImages, scrollImages1 } from "./Images/images";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  theme,
  ismobile: mobile,
  landingImages,
  scrollImages1
});

export default allReducers;
