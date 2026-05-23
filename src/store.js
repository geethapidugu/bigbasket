import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import nonvegReducer from "./nonvegSlice";
import chocolateReducer from "./chocolateSlice";
import cuponReducer from "./cuponSlice";
import ordersReducer from "./ordersSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    nonveg: nonvegReducer,
    chocolate: chocolateReducer,
    cuponDetails: cuponReducer,
    orders: ordersReducer,
  }
});

export default store;