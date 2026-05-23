import { createSlice } from "@reduxjs/toolkit";
import reducer from "./cartSlice";
import { cupons } from "./cupon";

const cuponSlice = createSlice({
  name: "cupon",
  initialState: {
    code: "",
    Discount: 0,
    applied: false,
    message: "",
  },
  reducers: {
    applyCupon: (state, action) => {
      const finalCuponCode = action.payload.toUpperCase();

      if (finalCuponCode in cupons) {
        state.code = finalCuponCode;
        state.Discount = cupons[finalCuponCode];
        state.applied = true;
        state.message = `Cupon "${finalCuponCode}" applied! You got ${cupons[finalCuponCode]}% off.`;
      }
       else {
        state.message = "Invalid cupon code.";
      }
     
    },
    resetCoupon: (state) => {
      state.code = "";
      state.Discount = 0;
      state.applied = false;
      state.message = "";
    },
  },
});

//Export the reducers
export const { applyCupon, resetCoupon } = cuponSlice.actions;

//Export the slice
export default cuponSlice.reducer;
