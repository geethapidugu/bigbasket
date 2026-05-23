
import { createSlice } from "@reduxjs/toolkit";
let ordersSlice = createSlice({
  name: "orders",
  initialState: [],

  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});


export let { addOrder } = ordersSlice.actions;


export default ordersSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";


// let savedOrders =
//   JSON.parse( localStorage.getItem("orders")) || [];

// let ordersSlice = createSlice({
//   name: "orders",

//   initialState: savedOrders,

//   reducers: {
//     addOrder: (state, action) => {
//       state.push(action.payload);

      
//       localStorage.setItem("orders",   JSON.stringify(state));
//     },

//     clearOrders: () => {
//       localStorage.removeItem("orders");
//       return [];
//     },
//   },
// });

// export let { addOrder,clearOrders,} = ordersSlice.actions;

// export default ordersSlice.reducer;