
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Orders.css";
import { useSelector } from "react-redux";

function Orders() {
  const [showBalloons, setShowBalloons] =
    useState(false);

  const notification = () => {
    Swal.fire({
      icon: "success",
      title: "🎉 Order Placed!",
      text:
        "Your order has been placed successfully.",
      confirmButtonText: "OK",
      confirmButtonColor: "#16a34a",
    }).then(() => {
      setShowBalloons(true);

      setTimeout(() => {
        setShowBalloons(false);
      }, 15000);
    });
  };
let orders = useSelector( globalState=> globalState.orders);
  let finalOrdersListItems = orders.map((order) => (
    <li key={order.orderId}>
      <p>order ID: {order.orderId}</p>  
      <p>Date: {order.date}</p>
      <ul>
        {order.items.map((item, itemIndex) => (
        <li key={itemIndex} className="order-item">
  <img src={item.imageurl} alt={item.name} />

  <div className="item-details">
    <span className="item-name" style={{color:"black"}}>{item.name}</span>-
    <span className="item-price" style={{color:"black"}}>${item.price}</span>-

    {/* if quantity exists */}
    {item.quantity && (
      <span className="item-qty" style={{color:"black"}}>{item.quantity}</span>
    )}
  </div>
</li>
        ))}
      </ul>
       <p>Total Amount: ${order.totalPrice.toFixed(2)}</p>
    </li>
  ));
  return (
    <div className="orders-page">
            <h1>Your Orders</h1>
      <ol>
        {finalOrdersListItems}
      </ol>

      {showBalloons && (
        <div className="balloon-wrapper">
          {[...Array(30)].map(
            (_, index) => (
              <span
                key={index}
                className="balloon"
                style={{
                  left: `${
                    Math.random() *
                    100
                  }%`,
                  animationDelay: `${
                    Math.random() *
                    3
                  }s`,
                  fontSize: `${
                    35 +
                    Math.random() *
                      20
                  }px`,
                }}
              >
                🎈
              </span>
            )
          )}
        </div>
      )}

      {/* <h1 className="orders-title">
        🍽️ Orders Page
      </h1> */}

      <p className="orders-text">
        Click below to place your
        order.
      </p>

      <button
        className="order-btn"
        onClick={notification}
      >
        Place Order
      </button>
    </div>
  );
}

export default Orders; 


// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import "./Orders.css";
// import { useSelector } from "react-redux";

// function Orders() {
//   const [showBalloons, setShowBalloons] = useState(false);

//   // Load orders from Redux
//   let reduxOrders = useSelector(globalState => globalState.orders);

//   // Load orders from localStorage
//   const storedOrders = localStorage.getItem("orders")
//     ? JSON.parse(localStorage.getItem("orders"))
//     : [];

//   // Merge Redux + Stored (priority to Redux)
//   let orders =
//     reduxOrders && reduxOrders.length > 0
//       ? reduxOrders
//       : storedOrders;

//   // Save to localStorage whenever Redux updates
//   useEffect(() => {
//     if (reduxOrders && reduxOrders.length > 0) {
//       localStorage.setItem("orders", JSON.stringify(reduxOrders));
//     }
//   }, [reduxOrders]);

//   const notification = () => {
//     Swal.fire({
//       icon: "success",
//       title: "🎉 Order Placed!",
//       text: "Your order has been placed successfully.",
//       confirmButtonText: "OK",
//       confirmButtonColor: "#16a34a",
//     }).then(() => {
//       setShowBalloons(true);

//       setTimeout(() => {
//         setShowBalloons(false);
//       }, 15000);
//     });
//   };

//   let finalOrdersListItems = orders.map((order) => (
//     <li key={order.orderId}>
//       <p>Order ID: {order.orderId}</p>
//       <p>Date: {order.date}</p>

//       <ul>
//         {order.items.map((item, itemIndex) => (
//           <li key={itemIndex} className="order-item">
//             <img src={item.imageurl} alt={item.name} />

//             <div className="item-details">
//               <span className="item-name" style={{color:"black"}}>{item.name}</span>

//               <span className="item-price" style={{color:"black"}}>
//                 ${item.price}
//               </span>

//               {item.quantity && (
//                 <span className="item-qty"  style={{color:"black"}}>
//                   Qty: {item.quantity}
//                 </span>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       <p>
//         Total Amount: $
//         {order.totalPrice.toFixed(2)}
//       </p>
//     </li>
//   ));

//   return (
//     <div className="orders-page">
//       <h1>Your Orders</h1>

//       <ol>{finalOrdersListItems}</ol>

//       {/* Balloons */}
//       {showBalloons && (
//         <div className="balloon-wrapper">
//           {[...Array(30)].map((_, index) => (
//             <span
//               key={index}
//               className="balloon"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 fontSize: `${35 + Math.random() * 20}px`,
//               }}
//             >
//               🎈
//             </span>
//           ))}
//         </div>
//       )}

//       <p className="orders-text">
//         Click below to place your order.
//       </p>

//       <button
//         className="order-btn"
//         onClick={notification}
//       >
//         Place Order
//       </button>
//     </div>
//   );
// }

// export default Orders;