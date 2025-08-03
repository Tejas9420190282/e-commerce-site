
// store.jsx

import { createStore } from "redux";
import { cartReducer } from "./component/Reducer";

export const store = createStore(cartReducer);

