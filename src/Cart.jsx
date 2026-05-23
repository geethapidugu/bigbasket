

// import React from "react";
// import "./Cart.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import {
//   addtoCart,
//   decrementQty as vegDecrement,
//   removeCart as vegRemove,
//   clearCart as vegClear,
// } from "./cartSlice";

// import {
//   addToNonvegCart,
//   decrementQty as nonvegDecrement,
//   removeCart as nonvegRemove,
//   clearCart as nonvegClear,
// } from "./nonvegSlice";

// import {
//   addToChocolateCart,
//   decrementQty as chocolateDecrement,
//   removeCart as chocolateRemove,
//   clearCart as chocolateClear,
// } from "./chocolateSlice";
// import {
//   applyCupon,
//   resetCoupon
// } from "./cuponSlice";

// function Cart() {
//   const dispatch = useDispatch();

//   const vegItems = useSelector((state) => state.cart);
//   const nonvegItems = useSelector((state) => state.nonveg);
//   const chocolateItems = useSelector((state) => state.chocolate);

//   const cartItems = [
//     ...vegItems.map((item) => ({ ...item, type: "Veg" })),
//     ...nonvegItems.map((item) => ({ ...item, type: "NonVeg" })),
//     ...chocolateItems.map((item) => ({ ...item, type: "Chocolate" })),
//   ];

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const deliveryFee = cartItems.length > 0 ? 40 : 0;
//   const packingFee = cartItems.length > 0 ? 20 : 0;
//   const totalAmount = subtotal + deliveryFee + packingFee;

//   const incrementItem = (item) => {
//     if (item.type === "Veg") dispatch(addtoCart(item));
//     if (item.type === "NonVeg") dispatch(addToNonvegCart(item));
//     if (item.type === "Chocolate") dispatch(addToChocolateCart(item));
//   };

//   const decrementItem = (item) => {
//     if (item.type === "Veg") dispatch(vegDecrement(item));
//     if (item.type === "NonVeg") dispatch(nonvegDecrement(item));
//     if (item.type === "Chocolate") dispatch(chocolateDecrement(item));
//   };

//   const removeItem = (item) => {
//     if (item.type === "Veg") dispatch(vegRemove(item));
//     if (item.type === "NonVeg") dispatch(nonvegRemove(item));
//     if (item.type === "Chocolate") dispatch(chocolateRemove(item));
//   };

//   const clearAll = () => {
//     dispatch(vegClear());
//     dispatch(nonvegClear());
//     dispatch(chocolateClear());
//   };
//   const totalPrice = cartItems.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );
//   const [discount, setDiscount] = useState(0);

// const discountAmount = (totalPrice * discount) / 100;
// const amountAfterDiscount=totalPrice-discountAmount;
// const taxAmount = (totalPrice - discountAmount) * 18/100;

// const finalAmount = amountAfterDiscount + taxAmount;
// let [cupon, setCupon] = useState("");
//  let { code, Discount, applied, message } = useSelector(
//     (globalState) => globalState.cuponDetails,
//   );

//   const couponDiscountAmount = (amountAfterDiscount * Discount) / 100;

//   const finalAmountAfterCoupon = amountAfterDiscount - couponDiscountAmount;

//   const cupontaxAmount = (finalAmountAfterCoupon * 18) / 100;

//   const netAmount = finalAmountAfterCoupon +  cupontaxAmount;
// /* REMOVE ITEM + RESET COUPON */

// const removeItems = (item) => {
//   if (item.type === "Veg") {
//     dispatch(vegRemove(item));
//   }

//   if (item.type === "NonVeg") {
//     dispatch(nonvegRemove(item));
//   }

//   if (item.type === "Chocolate") {
//     dispatch(chocolateRemove(item));
//   }

//   /* If last item removed, reset coupon */
//   if (cartItems.length === 1) {
//     dispatch(resetCoupon());
//   }
// }
//   return (
//     <div
//       className="cart-page"
//       style={{
//         backgroundImage: "url('/chocolate/cartbackground.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <h1 className="cart-main-title">🛒 YOUR CART</h1>
//       <p className="cart-sub-title">Good Food, Good Mood</p>

//       {cartItems.length === 0 ? (
//         <h2 className="empty-cart"></h2>
//       ) : (
//         <div className="cart-layout">
//           {/* LEFT TABLE */}
//           <div className="cart-left">
//             <div className="cart-header">
//               <span>ITEM</span>
//               <span>PRICE</span>
//               <span>QUANTITY</span>
//               <span>TOTAL</span>
//               <span>REMOVE</span>
//             </div>

//             {cartItems.map((item) => (
//               <div className="cart-row" key={item.type + item.id}>
//                 <div className="item-box">
//                   <img src={item.imageurl} alt={item.name} />
//                   <div>
//                     <h3>{item.name}</h3>
//                     <p>{item.type} Item</p>
//                   </div>
//                 </div>

//                 <span className="green">₹{item.price}</span>

//                 <div className="qty-box">
//                   <button onClick={() => decrementItem(item)}>
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => incrementItem(item)}>
//                     +
//                   </button>
//                 </div>

//                 <span className="orange">
//                   ₹{item.price * item.quantity}
//                 </span>

//                 {/* <button
//                   className="delete-btn"
//                   onClick={() => removeItem(item)}
//                 >
//                   🗑
//                 </button> */}
//                  <button onClick={() => {
// 			dispatch(removeItem(item));
// 			if(cartItems.length === 1)
//         { // last item being removed
// 				dispatch(resetCoupon());
// 			}
// 		}}>
// 			Remove
// 		</button> 

//               </div>
//             ))}

//             {/* <button
//               className="continue-btn"
//               onClick={clearAll}
//             >
//               Clear Cart
//             </button> */}
//             {/* <button onClick={() => {
// 		dispatch(clearCart());   // your cart clear action
// 		dispatch(resetCoupon()); // reset coupon
// 	}}>
// 		Clear Cart
// 	</button> */}.








// <button
//   className="continue-btn"
//   onClick={() => {
//     clearAll();
//     dispatch(resetCoupon());
//   }}
// >
//   Clear Cart
// </button>
//           </div>
//         </div>
//       )}
//  {cartItems.length === 0 ? (
//   <h2 className="empty-cart">Your Cart is Empty</h2>
// ) : (
//   <>
//     <div className="cart-layout">
//       {/* Your Cart Items Code */}
//     </div>

//     {/* Show totals only when cart has items */}
//     <div className="discount-box">
//       <h2>Select Discount</h2>

//       <button onClick={() => setDiscount(10)}>
//         10% OFF
//       </button>

//       <button onClick={() => setDiscount(20)}>
//         20% OFF
//       </button>

//       <button onClick={() => setDiscount(30)}>
//         30% OFF
//       </button>
//        <input
//         type="text"
//         placeholder="Enter coupon"
//         value={cupon}
//         onChange={(e) => setCupon(e.target.value)}
//       />
	  
// <button onClick={() => dispatch(applyCupon(cupon))}>Apply Coupon</button>

//     </div>
//  {applied && (
//         <div>
//           <h3 >{message}</h3>
//           <h2>Coupon Code: {code}</h2>
//           <h2>Coupon Discount: {Discount}%</h2>
//           <h2>Coupon Discount Amount: ₹{couponDiscountAmount}</h2>
//         </div>
//       )}
      

//     <h1>Total Amount: {totalPrice}</h1>
//     <h1>Discount Amount: {discountAmount}</h1>
//     <h1>After Discount Amount: {amountAfterDiscount}</h1>
//     <h1>Tax Amount: {cupontaxAmount}</h1>
//     <h1>Net Amount: {finalAmount}</h1>
//   </>
 
// )}
//     </div>
//   );
// }

// export default Cart;









import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";

import {
  addtoCart,
  decrementQty as vegDecrement,
  removeCart as vegRemove,
  clearCart as vegClear,
  clearCart,
} from "./cartSlice";

import {
  addToNonvegCart,
  decrementQty as nonvegDecrement,
  removeCart as nonvegRemove,
  clearCart as nonvegClear,
} from "./nonvegSlice";

import {
  addToChocolateCart,
  decrementQty as chocolateDecrement,
  removeCart as chocolateRemove,
  clearCart as chocolateClear,
} from "./chocolateSlice";

import { applyCupon, resetCoupon } from "./cuponSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import {QRCode} from "react-qr-code";
import emailjs from "@emailjs/browser";
import { addOrder } from "./ordersSlice";

function Cart() {
  const dispatch = useDispatch();

  const vegItems = useSelector((state) => state.cart);
  const nonvegItems = useSelector((state) => state.nonveg);
  const chocolateItems = useSelector((state) => state.chocolate);

  const { code, Discount, applied, message } = useSelector(
    (state) => state.cuponDetails
  );

  const [discount, setDiscount] = useState(0);
  const [cupon, setCupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const cartItems = [
    ...vegItems.map((item) => ({
      ...item,
      type: "Veg",
    })),

    ...nonvegItems.map((item) => ({
      ...item,
      type: "NonVeg",
    })),

    ...chocolateItems.map((item) => ({
      ...item,
      type: "Chocolate",
    })),
  ];

  const incrementItem = (item) => {
    if (item.type === "Veg") {
      dispatch(addtoCart(item));
    }

    if (item.type === "NonVeg") {
      dispatch(addToNonvegCart(item));
    }

    if (item.type === "Chocolate") {
      dispatch(addToChocolateCart(item));
    }
  };

  const decrementItem = (item) => {
    if (item.type === "Veg") {
      dispatch(vegDecrement(item));
    }

    if (item.type === "NonVeg") {
      dispatch(nonvegDecrement(item));
    }

    if (item.type === "Chocolate") {
      dispatch(chocolateDecrement(item));
    }
  };

  const removeItem = (item) => {
    if (item.type === "Veg") {
      dispatch(vegRemove(item));
    }

    if (item.type === "NonVeg") {
      dispatch(nonvegRemove(item));
    }

    if (item.type === "Chocolate") {
      dispatch(chocolateRemove(item));
    }

    toast.error(`${item.name} removed`);
  };

  const clearAll = () => {
    dispatch(vegClear());
    dispatch(nonvegClear());
    dispatch(chocolateClear());
    dispatch(resetCoupon());

    setDiscount(0);
    setCupon("");

    toast.error("Cart Cleared Successfully!");
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const discountAmount =
    (totalPrice * discount) / 100;

  const amountAfterDiscount =
    totalPrice - discountAmount;

  const couponDiscountAmount =
    (amountAfterDiscount * Discount) / 100;

  const finalAmount =
    amountAfterDiscount - couponDiscountAmount;

  const taxAmount =
    (finalAmount * 18) / 100;

  const netAmount =
    finalAmount + taxAmount;

  const placeOrder = () => {
    Swal.fire({
      icon: "success",
      title: "🎉 Order Placed!",
      text: "Your order has been placed successfully.",
      confirmButtonColor: "#16a34a",
    }).then(() => {
      confetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.6 },
      });
    });
  };

  const handleCheckout = () => {
    if (!customerEmail) {
      toast.error("Please enter email");
      return;
    }

    const templateParams = {
      order_id: "ORDER123",

      orders: cartItems.map((item) => ({
        name: item.name,
        price: (
          item.price * item.quantity
        ).toFixed(2),
        units: item.quantity,
    //       image:window.location.origin +
    // item.imageurl,

      })),

      cost: {
        shipping: 50,
        tax: taxAmount.toFixed(2),
        total: netAmount.toFixed(2),
      },

      email: customerEmail,
    };

    emailjs
      .send(
        "service_o06erzs",
        "template_yuuhhsl",
        templateParams,
        "MhqLBVxPKsFszlaqe"
      )
      .then(() => {
        toast.success(
          "✅ Email sent successfully"
        );
      })
      .catch((error) => {
        console.log(error);

        toast.error(
          "❌ Email sending failed"
        );
      });
        let purchaseDetails = {
				orderId: "ORD-" + Math.floor(Math.random() * 1000000000),
				date: new Date().toLocaleString(),
				items: [...cartItems],
				totalPrice: netAmount
			};
dispatch(addOrder(purchaseDetails));
       dispatch(clearCart()); 
	
  };

  return (
    <div
      className="cart-page"
      style={{
        backgroundImage:
          "url('/chocolate/cartbackground.jpg')",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />

      <h1 className="cart-main-title">
        🛒 YOUR CART
      </h1>

      <p className="cart-sub-title">
        Good Food, Good Mood
      </p>

      {cartItems.length === 0 ? (
        <h2 className="empty-cart">
          Your Cart is Empty
        </h2>
      ) : (
        <>
          {/* LEFT SIDE */}
          <div className="cart-left">
            <div className="cart-header">
              <span>ITEM</span>
              <span>PRICE</span>
              <span>QTY</span>
              <span>TOTAL</span>
              <span>REMOVE</span>
            </div>

            {cartItems.map((item) => (
              <div
                className="cart-row"
                key={item.type + item.id}
              >
                <div className="item-box">
                  <img
                    src={item.imageurl}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.type}</p>
                  </div>
                </div>

                <span className="green">
                  ₹{item.price}
                </span>

                <div className="qty-box">
                  <button
                    onClick={() =>
                      decrementItem(item)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      incrementItem(item)
                    }
                  >
                    +
                  </button>
                </div>

                <span className="orange">
                  ₹
                  {item.price *
                    item.quantity}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "Are you sure?",
                      text: `Remove ${item.name}?`,
                      showCancelButton: true,
                      confirmButtonText: "Yes",
                    }).then((result) => {
                      if (
                        result.isConfirmed
                      ) {
                        removeItem(item);
                      }
                    });
                  }}
                >
                  🗑
                </button>
              </div>
            ))}

            <button
              className="continue-btn"
              onClick={clearAll}
            >
              Clear Cart
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="summary-card">
            <h2>
              🎁 Offers & Billing
            </h2>

            <div className="discount-box">
              <button
                onClick={() =>
                  setDiscount(10)
                }
              >
                10% OFF
              </button>

              <button
                onClick={() =>
                  setDiscount(20)
                }
              >
                20% OFF
              </button>

              <button
                onClick={() =>
                  setDiscount(30)
                }
              >
                30% OFF
              </button>
            </div>

            <div className="coupon-box">
              <input
                type="text"
                placeholder="Enter Coupon"
                value={cupon}
                onChange={(e) =>
                  setCupon(
                    e.target.value
                  )
                }
              />

              <button
                onClick={() =>
                  dispatch(
                    applyCupon(cupon)
                  )
                }
              >
                Apply
              </button>
            </div>

            {message && (
              <p className="coupon-msg">
                {message}
              </p>
            )}

            {applied && (
              <>
                <div className="bill-row">
                  <span>
                    Coupon Code
                  </span>

                  <span>{code}</span>
                </div>

                <div className="bill-row">
                  <span>
                    Coupon Discount
                  </span>

                  <span>
                    {Discount}%
                  </span>
                </div>
              </>
            )}

            <div className="bill-row">
              <span>Total Amount</span>

              <span>
                ₹{totalPrice}
              </span>
            </div>

            <div className="bill-row">
              <span>Discount</span>

              <span>
                - ₹
                {discountAmount.toFixed(
                  2
                )}
              </span>
            </div>

            <div className="bill-row">
              <span>
                Coupon Discount
              </span>

              <span>
                - ₹
                {couponDiscountAmount.toFixed(
                  2
                )}
              </span>
            </div>

            <div className="bill-row">
              <span>GST 18%</span>

              <span>
                ₹
                {taxAmount.toFixed(2)}
              </span>
            </div>

            <div className="bill-total">
              <span>Net Amount</span>

              <span>
                ₹
                {netAmount.toFixed(2)}
              </span>
            </div>

            {/* PAYMENT */}
            <div className="payment-method">
              <h3>
                💳 Select Payment
              </h3>

              <button
                onClick={() =>
                  setPaymentMethod("qr")
                }
              >
                📱 QR Code
              </button>

              <button
                onClick={() =>
                  setPaymentMethod("card")
                }
              >
                💳 Card
              </button>
            </div>

            {/* QR SECTION */}
            {paymentMethod === "qr" && (
              <div className="qr-section">
                <h4>
                  Scan to Pay ₹
                  {netAmount.toFixed(2)}
                </h4>

                <div
                  style={{
                    background: "white",
                    padding: "15px",
                    width: "240px",
                    margin: "auto",
                    borderRadius:
                      "15px",
                  }}
                >
                  <QRCode
                    value={`upi://pay?pa=8143140412@ybl&pn=FoodHub&am=${netAmount.toFixed(
                      2
                    )}&cu=INR`}
                    size={220}
                  />
                </div>

                <p>
                  UPI ID:
                  8143140412@ybl
                </p>
              </div>
            )}

            {/* EMAIL SECTION */}
            <div className="email-box">
              <label>
                📧 Enter Gmail for
                Order Confirmation
              </label>

              <input
                type="email"
                value={customerEmail}
                onChange={(e) =>
                  setCustomerEmail(
                    e.target.value
                  )
                }
                placeholder="you@example.com"
              />
            </div>

            <button
              className="continue-btn"
              onClick={handleCheckout}
            >
              Checkout & Send Email
            </button>

            <button
              className="continue-btn"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;