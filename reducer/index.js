import { combineReducers } from "redux";

import home from "~/modules/home/reducer";
import productDescription from "~/modules/product-description/reducer";

const rootReducer = combineReducers({
  home,
  productDescription
});

export default rootReducer;
