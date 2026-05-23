import { createSlice } from "@reduxjs/toolkit";

const chocolateSlice = createSlice({
  name: "chocolate",

  initialState: [],

  reducers: {
    addToChocolateCart: (state, action) => {

      const existingItem = state.find(
        chocolateItems => chocolateItems.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
      decrementQty: (state, action) => {
      let existingItem = state.find(
        (chocolateItems) => chocolateItems.name === action.payload.name
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;  
        } else {
          
          let index = state.findIndex(
            (chocolateItems) => chocolateItems.name === action.payload.name
          );
          state.splice(index, 1);
        }
      }
    },


        removeCart:(state,action)=>{
            let existingItemIndex = state.findIndex((chocolateItems) => chocolateItems.name===action.payload.name);
            state.splice(existingItemIndex,1);
        },
        clearCart:()=>[],
  }
});

export const { addToChocolateCart,decrementQty,removeCart,clearCart } = chocolateSlice.actions;

export default chocolateSlice.reducer;