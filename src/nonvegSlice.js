import { createSlice } from "@reduxjs/toolkit";

const nonvegSlice = createSlice({
  name: "nonveg",

  initialState: [],

  reducers: {
    addToNonvegCart: (state, action) => {
        let existingItem = state.find(
        nonvegItems => nonvegItems.name === action.payload.name);
          if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({...action.payload,quantity: 1});
      }
      
      
    },
    
    decrementQty: (state, action) => {
      let existingItem = state.find(
        (nonvegitems) => nonvegitems.name === action.payload.name
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;  
        } else {
          
          let index = state.findIndex(
            (nonvegitems) => nonvegitems.name === action.payload.name
          );
          state.splice(index, 1);
        }
      }
    },


        removeCart:(state,action)=>{
            let existingItemIndex = state.findIndex((nonvegitems) => nonvegitems.name===action.payload.name);
            state.splice(existingItemIndex,1);
        },
        clearCart:()=>[],

  }
});

export const { addToNonvegCart,decrementQty,removeCart,clearCart } = nonvegSlice.actions;

export default nonvegSlice.reducer;