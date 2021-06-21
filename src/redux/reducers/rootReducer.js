import dataReducer from "./dataReducer";
import imageReducer from "./imageReducer";
import detailReducer from "./detailReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cities: dataReducer,
  images: imageReducer,
  detail: detailReducer,
});

export default rootReducer;
