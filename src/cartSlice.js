// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",

//   initialState: [],

//   reducers: {
//     // Add Item
//     addToCart: (state, action) => {
//       const existingItem = state.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.push({
//           ...action.payload,
//           quantity: 1,
//         });
//       }
//     },

//     // Remove Item
//     removeCart: (state, action) => {
//       return state.filter(
//         (item) => item.id !== action.payload.id
//       );
//     },

//     // Increase Quantity
//     incrementQty: (state, action) => {
//       const item = state.find(
//         (item) => item.id === action.payload.id
//       );

//       if (item) {
//         item.quantity += 1;
//       }
//     },

//     // Decrease Quantity
//     decrementQty: (state, action) => {
//       const item = state.find(
//         (item) => item.id === action.payload.id
//       );

//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },

//     // Clear Cart
//     clearCart: () => {
//       return [];
//     },
//   },
// });

// export const {
//   addToCart,
//   removeCart,
//   incrementQty,
//   decrementQty,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.redux
import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name:"cart",
    initialState :[],
    reducers:{
        addtoCart:(state,action)=>{
            let existingItem = state.find((vegitems)=>
                vegitems.name === action.payload.name)

            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        
        },

    decrementQty: (state, action) => {
      let existingItem = state.find(
        (vegitems) => vegitems.name === action.payload.name
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;  
        } else {
          
          let index = state.findIndex(
            (vegitems) => vegitems.name === action.payload.name
          );
          state.splice(index, 1);
        }
      }
    },


        removeCart:(state,action)=>{
            let existingItemIndex = state.findIndex((vegitems) => vegitems.name===action.payload.name);
            state.splice(existingItemIndex,1);
        },
        clearCart:()=>[],

    
}
  })
export const {addtoCart,decrementQty,removeCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;