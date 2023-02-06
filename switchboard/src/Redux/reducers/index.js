import theme from "./Theme/theme";
import mobile from "./Mobile/ismobile";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  theme,
  ismobile:mobile
});

export default allReducers;
